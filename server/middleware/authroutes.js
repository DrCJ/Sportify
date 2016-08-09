module.exports = (app, express, passport) => {
  const getTeam = (yahoo) => {
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
    getTeam(yahoo)
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

  app.get('/logout', (req, res) => {
    req.session.destroy(() => {
      req.app.yf = null;
      res.redirect('/');
    });
  });
};
