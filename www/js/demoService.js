angular.module('localNotifications')
.service('DemoService', function($cordovaLocalNotification) {

  this.showNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 1,
      title: title,
      text: text
    });
  };

});
