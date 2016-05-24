import Passport from 'passport';

import {
	Server,
	Router,
	Controller
}  from './server';

import {
	EnsureAuthenticated,
	CSRFProtection
} from './server/middleware';


Server.launch((success) => {

	Router.get('/', Controller.HomePage.index);

	Router.get('/register', Controller.Authentication.getRegister);
	Router.post('/register', Controller.Authentication.postRegister);

	Router.get('/login', Controller.Authentication.getLogin);
	Router.post('/login', Passport.authenticate('local'), Controller.Authentication.postLogin);
});
