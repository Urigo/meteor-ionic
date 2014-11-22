Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "0.0.6",
  git: "https://github.com/Urigo/meteor-ionic.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use([
      'urigo:angular@0.4.8',
      'urigo:angular-ui-router@0.6.1',
      'mquandalle:bower@0.1.11'],
    'client');

  api.use([
    'fastclick'
  ], 'client', {weak : true});

  api.imply([
    'urigo:angular',
    'urigo:angular-ui-router'
  ]);

  // Add bower
  api.addFiles('smart.json', 'client');

  // Fix icons to absolute path
  api.addFiles('ionic-override.css', 'client');

  // ionic files
  api.addFiles('init.js', 'client');
});
