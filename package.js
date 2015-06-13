// package metadata file for Meteor.js
var packageName = 'urigo:ionic'; // https://atmospherejs.com/urigo/ionic
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
var version = '1.0.0';

Package.describe({
  name: packageName,
  version: version,
  summary: 'Ionic Framework official Meteor package',
  git: 'https://github.com/Urigo/meteor-ionic.git'
});

Package.onUse(function(api) {
  api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);

  api.use('angular:angular@1.4.0', where);
  api.use('angular:angular-animate@1.4.0', where);
  api.use('angular:angular-sanitize@1.4.0', where);
  api.use('angularui:angular-ui-router@0.2.15', where);

  api.use('fastclick@1.0.2', 'client', {weak : true});

  api.addFiles([
    'release/css/ionic.css',
    'release/fonts/ionicons.eot',
    'release/fonts/ionicons.svg',
    'release/fonts/ionicons.ttf',
    'release/fonts/ionicons.woff',
    'release/js/ionic.js',
    'release/js/ionic-angular.js',
    'meteor/override-fastclick.js' // Stop Meteor's Fastclick in favor of Ionic one
  ], where);
});
