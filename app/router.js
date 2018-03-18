import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
    location: config.locationType,
    rootURL: config.rootURL
});

Router.map(function() {
    this.route('home', { path: '/' });
    this.route('champions', function() {
        this.route('details', { path: '/:key' });
    });
});

export default Router;
