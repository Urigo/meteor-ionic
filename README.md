meteor-ionic
============

> [Ionic framework](http://ionicframework.com "Ionic framework") packaged for Meteor.

> Use [ngMeteor](https://github.com/loneleeandroo/ngMeteor "ngMeteor") as underlying meteor-angular bridge, and [meteor-angular-ui-router](https://github.com/ccll/meteor-angular-ui-router "meteor-angular-ui-router") as a requirement of the Ionic framework.

## Quick start
1. Install ngMeteor
<pre><code>mrt add ngMeteor</code></pre>
2. Install angular-ui-router
<pre><code>mrt add angular-ui-router --force</code></pre>
3. Install ionic
<pre><code>mrt add ionic</code></pre>

## Usage
Build your app as a normal Ionic app just taking care of changes made on ngMeteor in order to use AngularJS on Meteor without conflict. Please visit the [ngMeteor](https://github.com/loneleeandroo/ngMeteor "ngMeteor") page to get more details.

## Example
Here is a simple example app that can be used to start using Ionic in your project:

CSS file:
```sh
.slider, .slider-slides, .slider-slide, .scroll{
	height:100%;
}
.slider-pager{
	margin-bottom: 50px;
}
.box{
	height:100%;
	text-align:center;
}
.box h1{
	color:white;
}
.blue{
	background: #6699FF;
}
.yellow{
	background: #E6E65C;
}
.pink{
	background: #FF66CC;
}
```

HTML file:
```sh
<head>
  <title>ionic</title>
</head>
<body>
  <div ng-controller="MenuCtrl">
    <side-menus>
      <pane side-menu-content>
        <header class="bar bar-header bar-positive">
          <button class="button button-icon" ng-click="openLeft()"><i class="icon ion-navicon"></i></button>
          <h1 class="title">Slide me</h1>
        </header>
        <content has-header="true" padding="true">
          <tabs tabs-type="tabs-icon-only" tabs-style="tabs-primary">
            <tab title="Home" icon-on="icon ion-ios7-filing" icon-off="icon ion-ios7-filing-outline">
              <slide-box>
                <slide>
                  <div class="box blue">
                    <h1>BLUE</h1>
                  </div>
                </slide>
                <slide>
                  <div class="box yellow"><h1>YELLOW</h1></div>
                </slide>
                <slide>
                  <div class="box pink"><h1>PINK</h1></div>
                </slide>
              </slide-box>
            </tab>
            <tab title="About" icon-on="icon ion-ios7-clock" icon-off="icon ion-ios7-clock-outline">
              <h1>About</h1>
            </tab>
            <tab title="Settings" icon-on="icon ion-ios7-gear" icon-off="icon ion-ios7-gear-outline">
              <h1>Settings</h1>
            </tab>
          </tabs>
        </content>
      </pane>
      <side-menu side="left">
        <header class="bar bar-header bar-dark" fade-header>
          <h1 class="title">Left</h1>
        </header>
        <content has-header="true">
          <list>
            <item ng-repeat="item in items" item="item">
              [[item.text]]
            </item>
          </list>
        </content>
      </side-menu>
    </side-menus>
  </div>
</body>
```

JS file:
```sh
ngMeteor

.controller('MenuCtrl', function($scope) {
  $scope.openLeft = function(){
    $scope.sideMenuController.toggleLeft();
  }
  $scope.items = [
    {text:'Blue'},
    {text:'Yellow'},
    {text:'Pink'}
  ]
})

// the fadeBar directive
.directive('fadeBar', function($timeout) {
  return {
    restrict: 'E',
    template: '<div class="fade-bar"></div>',
    replace: true,
    link: function($scope, $element, $attr) {
      // Run in the next scope digest
      $timeout(function() {
        // Watch for changes to the openRatio which is a value between 0 and 1 that says how "open" the side menu is
        $scope.$watch('sideMenuController.getOpenRatio()', function(ratio) {
          // Set the transparency of the fade bar
          $element[0].style.opacity = Math.abs(ratio);
        });
      });
    }
  }
});
```

> *I want to make a special gratitude to Andrew Lee, the owner of ngMeteor, for helping me on creating this amazing smart package. Thank you guy!*
