Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "0.0.1",
  git: "https://github.com/Urigo/meteor-ionic.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use(['urigo:angular', 'urigo:angular-ui-router'], 'client');

  // ionic files
  api.addFiles(['lib/fonts/ionicons.eot',
                 'lib/fonts/ionicons.svg',
                 'lib/fonts/ionicons.ttf',
                 'lib/fonts/ionicons.woff',
                 'lib/css/ionic.css',
                 'lib/js/ionic.js',
                 'lib/js/ionic-angular.js',
                 'init.js'], 'client');
});
