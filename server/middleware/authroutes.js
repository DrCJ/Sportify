module.exports = (app, express, passport) => {
  const getLeagues = (req, res) => {
    const yahoo = req.app.yf;
    yahoo.user.game_leagues('359', (err, data) => {
      if (err) { console.log(err); }
      if (data) {
        const leagueArr = data.leagues[0].leagues;
        res.json(leagueArr);
      }
    });
  };

  const getTeams = (yahoo) => {
    return new Promise((resolve, reject) => {
      yahoo.user.game_teams('359', (err, data) => {
        if (err) { reject(err); }
        const teamKey = data.teams[0].teams[0].team_key.toString();
        const teamObj = { teamKey, yahoo };
        resolve(teamObj);
      });
    });
  };

  const getPlayers = (teamObj) => {
    return new Promise((resolve, reject) => {
      teamObj.yahoo.team.roster(teamObj.teamKey, (err, data) => {
        if (err) { reject(err); }
        resolve(data.roster);
      });
    });
  };

  const getRoster = (req, res) => {
    const yahoo = req.app.yf;
    getTeams(yahoo)
      .then(getPlayers)
      .then((roster) => res.json(roster));
  };

  app.use('/', express.static(`${__dirname}/../../public`));

  app.get('/auth/yahoo',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

  app.get('/auth/yahoo/callback',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get('/roster', getRoster);
  app.get('/leagues', getLeagues);

  app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      req.app.yf = null;
      res.redirect('/');
    });
  });
};
