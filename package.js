Package.describe({
  summary: "Ionic framework packaged for Meteor."
});

Package.on_use(function (api, where) {
  api.use(['ngMeteor', 'angular-ui-router'], 'client');
  
  // ionic files
  api.add_files(['lib/fonts/ionicons.eot', 
                 'lib/fonts/ionicons.svg', 
                 'lib/fonts/ionicons.ttf', 
                 'lib/fonts/ionicons.woff', 
                 'lib/css/ionic.css', 
                 'lib/js/ionic.js', 
                 'lib/js/ionic-angular.js', 
                 'init.js'], 'client');
});
