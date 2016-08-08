module.exports = (app, express, passport) => {
  app.use('/', express.static(`${__dirname}/../../public`));

  app.get('/auth/yahoo',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  });

  app.get('/auth/yahoo/callback',
  passport.authenticate('yahoo', { failureRedirect: '/login' }),
    (req, res) => {
      res.redirect(req.session.redirect || '/');
      // res.redirect('/');
    }
  );

  app.get('/roster', (req, res) => {
    const yahoo = req.app.yf;
    yahoo.user.game_teams('359', (err, data) => {
      if (data) {
        const teamKey = data.teams[0].teams[0].team_key.toString();
        yahoo.team.roster(teamKey, (e, subdata) => {
          res.json(subdata.roster);
        });
      }
    });
  });
};
