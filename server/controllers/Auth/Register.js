import User from '../../models/User';

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
			User.register(new User({ username: req.body.username }), req.body.password, (err) => {
				if (err) {
					console.log('Error registering user.', err);
					return next(err);
				}

				res.redirect('/');
			});
		}
	}
}
