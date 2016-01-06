angular.module('localNotifications')
.service('DemoService', function($cordovaLocalNotification) {

  this.showNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 1,
      title: title,
      text: text
    });
  };

  this.setScheduledNotification = function(title, text) {
    var currentDate = new Date();
    var schedule = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 20, 52);

    $cordovaLocalNotification.schedule({
      id: 2,
      title: title,
      text: text,
      at: schedule
    });
  };

  this.setRepeatingNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 3,
      title: title,
      text: text,
      every: 'day',
      at: schedule
    });
  };

});
