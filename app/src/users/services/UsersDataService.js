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
      name: 'Pill Dispenser',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Fall Detection Watch',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Smart Toaster',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Remote Family Visits',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Device 5',
      avatar: 'svg-1',
      content: "Avaliable commands for this device"
    },
    {
      name: 'Device 6',
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

