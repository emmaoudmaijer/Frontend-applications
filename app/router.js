import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('collectie');
  this.route('opgeslagen');
  this.route('about');
  this.route('detail', {path: 'detail/:url'});
});

export default Router;
