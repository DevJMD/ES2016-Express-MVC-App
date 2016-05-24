export const Authentication = {

	getRegister(req, res) {
		res.render('account/register', { csrfToken: req.csrfToken() });
	},

	postRegister(req, res, next) {
		User.register(new User({ username: req.body.username }), req.body.password, function(err) {
			if (err) {
				console.log('Error registering user.', err);
				return next(err);
			}

			res.redirect('/');
		});
	},

	getLogin(req, res, next) {
		if (!req.isAuthenticated()) {
			res.render('account/login', { csrfToken: req.csrfToken() });
		} else {
			res.redirect('/');
		}
	},

	postLogin(req, res, next) {
		res.redirect('/');
	}
}
