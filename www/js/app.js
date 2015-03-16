angular.module('app',
  [
    'ionic',
    'ngCordova',
    'app.home',
    'app.settings'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('main', {
    abstract: true,
    templateUrl: 'views/layout.html'
  })
  .state('main.home', {
    url: '/',
    views: {
      'menuContent': {
        controller: 'HomeCtrl',
        templateUrl: 'modules/home/home.index.html'
      }
    }
  })
  .state('main.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        controller: 'SettingsCtrl',
        templateUrl: 'modules/settings/settings.index.html'
      }
    }
  });

  $urlRouterProvider.otherwise('/');

});