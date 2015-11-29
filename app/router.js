import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('auditions', function() {
    this.route('audition', {path: ':audition_id'});
  });

});

export default Router;
