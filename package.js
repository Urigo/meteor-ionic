Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "0.0.2",
  git: "https://github.com/Urigo/meteor-ionic.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use([
    'urigo:angular@0.4.2',
    'urigo:angular-ui-router@0.6.0',
    'mquandalle:bower@0.1.11'],
    'client');

  // ionic files
  api.addFiles('init.js', 'client');
});
