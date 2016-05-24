import Passport from 'passport';

export default () => {
	return Passport.authenticate('local');
}
