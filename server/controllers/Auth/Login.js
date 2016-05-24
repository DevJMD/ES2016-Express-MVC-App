import Passport from 'passport';

export const Login = {

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
