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
      content: "General commands to interact with RANIA.",
      buttons: [{
        buttonTitle: "Hello RANIA",
        alertTitle: "Hello!",
        alertDescription: "I am RANIA. Your personal assistant to interact with all your smart devices."
      },
      {
        buttonTitle: "Briefly Leaving Home",
        alertTitle: "Leaving",
        alertDescription: "Okay. Leaving home status activated."
      },],
    },
    {
      name: 'Medicine Dispenser',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "Have I taken my medicine",
        alertTitle: "Yes.",
        alertDescription: "Your <medicine name> was taken at <time>"
      }],
    },
    {
      name: 'Home Security',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "Lock Doors",
        alertTitle: "Okay!",
        alertDescription: "Your doors have been locked."
      },
      {
        buttonTitle: "Unlock Doors",
        alertTitle: "Okay!",
        alertDescription: "Your doors hace been unlocked."
      },],
    
    },
    {
      name: 'Robot Companion ',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "Locate Robot Companion",
        alertTitle: "",
        alertDescription: "Your robot companion is <> in your home."
      },
      {
        buttonTitle: "Summon Robot Companion",
        alertTitle: "",
        alertDescription: "Your robot companion is on their way to you."
      },],
    
    },
    {
      name: 'Memory Games',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "Launch Memory Game <>",
        alertTitle: "Launching Game.",
        alertDescription: "<>."
      },],
    },
  
    {
      name: 'Thing Finder',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "Find thing finder",
        alertTitle: "",
        alertDescription: "The thing finder is <> in your home."
      },],
    },
    {
      name: 'Smart Pantry',
      avatar: 'svg-1',
      content: "Avaliable commands for this device",
      buttons: [{
        buttonTitle: "What's in my pantry.",
        alertTitle: "",
        alertDescription: "Contents of pantry: <>, <>, etc."
      },],
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

