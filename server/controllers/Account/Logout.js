export const Logout = {

	getLogout: {
		path: '/logout',
		controller(req, res, next) {
			if (req.isAuthenticated()) {
				req.logout();
			}

			res.redirect('/');
		}
	}
}
