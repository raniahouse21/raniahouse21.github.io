/**
 * Main App Controller for the AngularJS Material Starter App
 * @param UsersDataService
 * @param DevicesDataService

 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, DevicesDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.users        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;
  self.devices = [ ];

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( users ) {
          self.users    = [].concat(users);
          self.selected = users[0];
        });


  DevicesDataService
      .loadAllDevices()
      .then( function( devices ) {
        self.devices    = [].concat(devices);
      });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( user ) {
    self.selected = angular.isNumber(user) ? $scope.users[user] : user;
  }
}






export default [ 'UsersDataService', 'DevicesDataService',  '$mdSidenav', AppController ];

