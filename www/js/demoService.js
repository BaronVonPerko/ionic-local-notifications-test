angular.module('localNotifications')
.service('DemoService', function($cordovaLocalNotification) {

  var icon = 'res://drawable-ldpi/icon';

  this.showNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 1,
      title: title,
      text: text,
      icon: icon,
      smallIcon: icon
    });
  };

  this.setScheduledNotification = function(title, text) {
    var currentDate = new Date();
    var schedule = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 20, 52);

    $cordovaLocalNotification.schedule({
      id: 2,
      title: title,
      text: text,
      at: schedule,
      icon: icon,
      smallIcon: icon
    });
  };

  this.setRepeatingNotification = function(title, text) {
    $cordovaLocalNotification.schedule({
      id: 3,
      title: title,
      text: text,
      every: 'day',
      icon: icon,
      smallIcon: icon
    });
  };

});
