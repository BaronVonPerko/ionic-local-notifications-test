angular.module('localNotifications')
.controller('DemoCtrl', function(DemoService) {

  this.showNotification = function() {
    DemoService.showNotification('Notify!', 'This is a test!');
  };

  this.setScheduledNotification = function() {
    DemoService.setScheduledNotification('Schedule Test', 'This is a test of a scheduled notification');
  };

  this.setRepeatingNotification = function() {
    DemoService.setRepeatingNotification('Repeating Test', 'This is a test of a repeating notification');
  };

});
