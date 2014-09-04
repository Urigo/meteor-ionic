Package.describe({
  summary: "Ionic framework packaged for Meteor.",
  version: "1.0.0",
  git: "https://github.com/cramrov/meteor-ionic.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.0.1');
  api.use(['urigo:ngmeteor', 'urigo:angular-ui-router'], 'client');

  // ionic files
  api.add_files(['lib/fonts/ionicons.eot',
                 'lib/fonts/ionicons.svg',
                 'lib/fonts/ionicons.ttf',
                 'lib/fonts/ionicons.woff',
                 'lib/css/ionic.css',
                 'lib/js/ionic.js',
                 'lib/js/ionic-angular.js',
                 'init.js'], 'client');

  //font path override
  api.add_files('path_override.css', 'client');
});
