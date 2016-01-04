angular.module('localNotifications')
.controller('DemoCtrl', function(DemoService) {

  this.showNotification = function() {
    DemoService.showNotification('Notify!', 'This is a test!');
  }


});
