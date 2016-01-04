angular.module('localNotifications')
.controller('DemoCtrl', function($cordovaLocalNotification, $ionicPlatform, DemoService) {

  this.showNotification = function() {
    DemoService.showNotification('Notify!', 'This is a test!');
  };

});
