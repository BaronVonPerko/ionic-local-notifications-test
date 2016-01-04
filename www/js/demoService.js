angular.module('localNotifications')
.service('DemoService', function($ionicPlatform, $cordovaLocalNotification) {

  this.showNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 1,
      title: title,
      text: text
    });
  };

});
