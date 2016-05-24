export const HomePage = {

	index(req, res, next) {
		res.render('index', { user: req.user });
	}
}
