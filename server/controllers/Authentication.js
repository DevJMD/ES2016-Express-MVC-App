import Passport from 'passport';

export const Authentication = {

	getRegister: {
		path: '/register',
		controller(req, res) {
			res.render('account/register', { csrfToken: req.csrfToken() });
		}
	},

	postRegister: {
		path: '/register',
		method: 'post',
		controller(req, res, next) {
			User.register(new User({ username: req.body.username }), req.body.password, function(err) {
				if (err) {
					console.log('Error registering user.', err);
					return next(err);
				}

				res.redirect('/');
			});
		}
	},

	getLogin: {
		path: '/login',
		controller(req, res, next) {
			if (!req.isAuthenticated()) {
				res.render('account/login', { csrfToken: req.csrfToken() });
			} else {
				res.redirect('/');
			}
		},
	},

	postLogin: {
		path: '/login',
		method: 'post',
		middleware: [Passport.authenticate('local')],
		controller(req, res, next) {
			res.redirect('/');
		}
	}
}
