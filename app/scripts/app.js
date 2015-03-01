'use strict';

/**
 * @ngdoc overview
 * @name politeiaApp
 * @description
 * # politeiaApp
 *
 * Main module of the application.
 */
angular
  .module('politeiaApp', [
    'ngAnimate',
    'ui.router',
    'angularUtils.directives.dirDisqus',
    'angulartics',
    'angulartics.google.analytics'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('appLayout', {
        abstract: true,
        templateUrl: 'views/app-layout.html'
      })
      .state('events', {
        parent: 'appLayout',
        url: '/events',
        templateUrl: 'views/event-index.html',
        controller: 'EventIndexCtrl'
      })
      .state('event', {
        parent: 'appLayout',
        url: '/events/:eventId',
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'
      })
      .state('officials', {
        parent: 'appLayout',
        url: '/officials',
        templateUrl: 'views/official-index.html',
        controller: 'OfficialIndexCtrl'
      })
      .state('official', {
        parent: 'appLayout',
        url: '/officials/:officialId',
        templateUrl: 'views/official.html',
        controller: 'OfficialCtrl'
      });
  });
