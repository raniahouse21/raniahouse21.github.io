class UserDetailsController  {

  /**
   * Constructor
   *
   * @param $mdBottomSheet
   * @param $mdDialog
   * @param $log
   */
  constructor($mdBottomSheet, $mdDialog, $log) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.$mdDialog = $mdDialog;
    this.$log = $log;
  }

  /**
   * Show the bottom sheet
   */
  share() {
    var user = this.selected;
    var $mdBottomSheet = this.$mdBottomSheet;

    $mdBottomSheet.show({
      parent: angular.element(document. getElementById('content')),
      templateUrl: 'src/users/components/details/ContactSheet.html',
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "$ctrl",
      bindToController : true
    }).then((clickedItem) => {
      this.$log.debug( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet ) { 
      this.user = user;
      this.items = [
        { name: 'Call911'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'}
      ];
      this.performAction = (action) => {
        $mdBottomSheet.hide(action);
      };
    }
  }

    showAlert (button) {
      var user = this.selected;
      var $mdDialog = this.$mdDialog; 

      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title(button.alertTitle)
          .textContent(button.alertDescription)
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent()
      );
  }
}

export default UserDetailsController;
