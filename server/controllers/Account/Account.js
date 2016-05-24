export const Account = {

	getAccountDefault: {
		path: '/account',
		controller(req, res, next) {
			if (req.isAuthenticated()) {
				return res.redirect(`/account/${encodeURIComponent(req.user.username)}`);
			}

			res.redirect('/login');
		},
	},

	getAccount: {
		path: '/account/:username',
		controller(req, res, next) {
			if (req.isAuthenticated() && req.params.username === req.user.username) {
				return res.render('account/profile', { user: req.user });
			}

			res.redirect('/login');
		},
	}
}
