meteor-ionic
============

## Quick start

    meteor add urigo:ionic

## Usage
The inizialize your AngularJS app module to work both on both mobile and desktop devices please remove the 'ng-app' 
attribute from your html and manually bootstrap your app like so:

    var app = angular.module('app.example', [
      'angular-meteor',
      'ui.router',
      'ionic',
      'ngCordova.plugins.datePicker']);

    function onReady() {
      angular.bootstrap(document, ['app.example']);
    }

    if (Meteor.isCordova) {
      angular.element(document).on("deviceready", onReady);
    }
    else {
      angular.element(document).ready(onReady);
    }
  
for working with Ionic you can have a look at [Ionic Framework](http://ionicframework.com/).
This package just brings the original Ionic Framework through Bower.
No changes to the original JS code.
You can use it with [angular-meteor](https://github.com/Urigo/angular-meteor "angular-meteor") but you don't have to, you can bring only the AngularJS library itself with bower, npm or anyway you want.

## Example

You can find the "Todo" example in this repository: [meteor-ionic-example](https://github.com/netanelgilad/meteor-ionic-example). Follow the insructions there to get started with ionic on meteor.


> *Special thanks to [Andrew Lee](https://github.com/loneleeandroo "Andrew Leek") for helping me on creating this smart package.*
