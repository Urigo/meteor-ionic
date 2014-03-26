meteor-ionic
============

> [Ionic framework](http://ionicframework.com "Ionic framework") packaged for Meteor.

> Use [ngMeteor](https://github.com/loneleeandroo/ngMeteor "ngMeteor") as underlying meteor-angular bridge, and [meteor-angular-ui-router](https://github.com/ccll/meteor-angular-ui-router "meteor-angular-ui-router") as a requirement of the Ionic framework.

## Quick start
<pre><code>mrt add ionic</code></pre>

## Usage
Build your app as a normal Ionic app just taking care of changes made on ngMeteor in order to use AngularJS on Meteor without conflict. Please visit the [ngMeteor](https://github.com/loneleeandroo/ngMeteor "ngMeteor") page to get more details.

## Example
Here is the *Todo* example code made for Ionic consisting of an HTML and a JS file. Simply put the files in the root folder of your project.

### HTML file
```sh
<head>
  <title>ionic todo example</title>
</head>

<body>
  <div ng-controller="TodoCtrl">
    <ion-side-menus>
      
      <!-- Center content -->
      <ion-pane ion-side-menu-content>
        <ion-header-bar class="bar bar-header bar-dark">
          <button class="button button-icon" ng-click="toggleProjects()">
            <i class="icon ion-navicon"></i>
          </button>
          <h1 class="title">[[activeProject().title]]</h1>
          <!-- New Task button-->
          <button class="button button-icon" ng-click="newTask()">
            <i class="icon ion-compose"></i>
          </button>
        </ion-header-bar>
        <ion-content has-header="true" scroll="true">
          <ion-list>
            <ion-item ng-repeat="task in Tasks | filter:{project: activeProject()._id}">
              [[task.title]]
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-pane>
      
      <!-- Left menu -->
      <ion-side-menu side="left">
        <ion-header-bar class="bar bar-header bar-dark">
          <h1 class="title">Projects</h1>
          <button class="button button-icon" ng-click="newProject()">
            <i class="icon ion-plus"></i>
          </button>
        </ion-header-bar>
        <ion-content has-header="true" scroll="true">
          <ion-list>
            <ion-item ng-repeat="project in Projects" ng-click="selectProject(project, $index)" ng-class="{active: project.active}">
              [[project.title]]
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-side-menu>
      
    </ion-side-menus>
  </div>
</body>

<template name="new-task">
  <div class="modal">
    
    <!-- Modal header bar -->
    <ion-header-bar class="bar bar-header bar-secondary">
      <h1 class="title">New Task</h1>
      <button class="button button-clear button-positive" ng-click="closeNewTask()">Cancel</button>
    </ion-header-bar>
    
    <!-- Modal content area --> 
    <ion-content has-header="true" scroll="false">
      <form ng-submit="createTask(task)">
        <div class="list">
          <label class="item item-input">
            <input type="text" placeholder="What do you need to do?" ng-model="task.title">
          </label>
        </div>
        <div class="padding">
          <button type="submit" class="button button-block button-positive">Create Task</button>
        </div>
      </form>
    </ion-content> 
  </div>
</template>
```

### JS file
```sh
Projects = new Meteor.Collection("Projects");
Tasks = new Meteor.Collection("Tasks");

if (Meteor.isClient) {
  
  ngMeteor.controller('TodoCtrl', ['$scope', '$collection', '$ionicModal', '$rootScope', '$ionicSideMenuDelegate', '$ionicPopup',
    function ($scope, $collection, $ionicModal, $rootScope, $ionicSideMenuDelegate, $ionicPopup) {
                                     
      // Load or initialize projects
      $collection("Projects", $scope);
      $collection("Tasks", $scope);
      
      // A utility function for creating a new project
      // with the given projectTitle
      var createProject = function (projectTitle) {
        var newProject = {
          title: projectTitle,
          active: false
        };
        $scope.Projects.add(newProject);
        $scope.selectProject(newProject, $scope.Projects.length - 1);
      }
      
      // Called to create a new project
      $scope.newProject = function () {        
        $ionicPopup.prompt({
          title: 'New Project',
          subTitle: 'Name'
        }).then(function(res) {
          if (res) {
            createProject(res);
          }          
        });
      };
      
      // Grab the last active, or the first project
      $scope.activeProject = function () {
        var activeProject = $scope.Projects[0];
        angular.forEach($scope.Projects, function (v, k) {
          if (v.active) {
            activeProject = v;
          }
        });
        return activeProject;
      }
      
      // Called to select the given project
      $scope.selectProject = function (project, index) {
        var selectedProject = $scope.Projects[index];
        angular.forEach($scope.Projects, function (v, k) {
          v.active = false;
        });
        selectedProject.active = true;
        $scope.Projects.add($scope.Projects);
        $ionicSideMenuDelegate.toggleLeft();
      };
      
      // Create our modal
      $ionicModal.fromTemplateUrl('new-task', function (modal) {
        $scope.taskModal = modal;
      }, {
        scope: $scope,
        animation: 'slide-in-up'
      });
      
      $scope.openModal = function() {
        $scope.modal.show();
      };
      $scope.closeModal = function() {
        $scope.modal.hide();
      };
      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.taskModal.remove();
      });
      
      $scope.createTask = function (task) {
        var activeProject = $scope.activeProject();
        if (!activeProject || !task) {
          return;
        }
        
        $scope.Tasks.add({
          project: activeProject._id,
          title: task.title
        });
        
        $scope.taskModal.hide();
        
        task.title = "";
      };
      
      $scope.deleteTask = function (task) {
        $scope.Tasks.delete(task);
      }
      
      $scope.newTask = function () {
        $scope.taskModal.show();
      };
      
      $scope.closeNewTask = function () {
        $scope.taskModal.hide();
      }
      
      $scope.toggleProjects = function () {
        $ionicSideMenuDelegate.toggleLeft();
      };
      
      // Try to create the first project, make sure to defer
      // this by using $timeout so everything is initialized
      // properly   
      $scope.Projects.ready(function () {
        if ($scope.Projects.length == 0) {
          while (true) {
            var projectTitle = prompt('Your first project title:');
            if (projectTitle) {
              createProject(projectTitle);
              break;
            }
          }
        }
      }); 
    }                              
  ]);
}

if (Meteor.isServer) {
  
  Meteor.publish('Projects', function () {
    return Projects.find({});
  });
  
  Meteor.publish('Tasks', function () {
    return Tasks.find({});
  });
  
  Projects.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });
  
  Tasks.allow({
    insert: function () {
      return true;
    },
    update: function () {
      return true;
    },
    remove: function () {
      return true;
    }
  });
  
}
```

> *Special thanks to [Andrew Lee](https://github.com/loneleeandroo "Andrew Leek") for helping me on creating this smart package.*
