/**
 * Users DataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
function UsersDataService($q) {
  var users = [
    {
      name: 'General Commands',
      avatar: 'svg-2',
      content: "Avaliable commands RANIA CONTROL. These are multi device commands.",
      buttons: [{
        buttonTitle: "Say hi",
        alertTitle: "Alexa says hi",
        alertDescription: "Don't be shy! idk"
      },
      {
        buttonTitle: "2 title",
        alertTitle: "2 title",
        alertDescription: "2 description"
      },],
    },
    {
      name: 'Medicine Dispenser',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "1",
        alertTitle: "1 title",
        alertDescription: "2 description"
      }],
    },
    {
      name: 'Home Security',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Robot Companion ',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Memory Games',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Thing Finder',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Smart Cane',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    }
  ];

  // Promise-based API
  return {
    loadAllUsers: function() {
      // Simulate async nature of real remote calls
      return $q.when(users);
    }
  };
}

export default ['$q', UsersDataService];

