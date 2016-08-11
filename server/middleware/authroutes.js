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

  const getTeams = (yahoo, league_key) => {
    return new Promise((resolve, reject) => {
      yahoo.user.game_teams('359', (err, data) => {
        if (err) { reject(err); }
        const team = data.teams[0].teams.filter((team) => {
          if (team.team_key.includes(league_key)) {
            return team;
          };
        });
        const teamObj = { team, yahoo };
        resolve(teamObj);
      });
    });
  };

  const getPlayers = (teamObj) => {
    return new Promise((resolve, reject) => {
      teamObj.yahoo.team.roster(teamObj.team[0].team_key, (err, data) => {
        if (err) { reject(err); }
        resolve(data.roster);
      });
    });
  };

  const getRoster = (req, res) => {
    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~>',req.params.league_key);
    const yahoo = req.app.yf;
    getTeams(yahoo, req.params.league_key)
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

  app.get('/roster/:league_key', getRoster);
  app.get('/leagues', getLeagues);

  app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      req.app.yf = null;
      res.redirect('/');
    });
  });
};
