/**
 * DevicesDataService
 * Uses embedded, hard-coded data model; acts asynchronously to simulate
 * remote data service call(s).
 *
 * @returns {{loadAll: Function}}
 * @constructor
 */
 function DevicesDataService($q) {
    var devices = [
      {
        timestamp: "04-27-2021 12:01 AM",
        devicename: "Pill Dispenser",
        patientname: "John Doe",
        priority: "Low",
        message: "Medicine was taken. ",
    },
    {
        timestamp: " 04-27-2021 11:03 AM",
        devicename: "Smart Pantry",
        patientname: "John Doe",
        priority: "High",
        message: "Flour is expired as of today April 27 2021.",
    },
    {
        timestamp: "04-27-2021 04:43 PM",
        devicename: "Home Security",
        patientname: "John Doe",
        priority: "Low",
        message: "Doors have been locked.",
    },
    {
        timestamp: "04-27-2021 03:53 PM",
        devicename: "Thing Finder",
        patientname: "John Doe",
        priority: "Low",
        message: "Keys found. ",
    },
    {
        timestamp: "04-27-2021 06:01 PM",
        devicename: "Medicine Dispenser",
        patientname: "John Doe",
        priority: "Low",
        message: "Medicine needs taken.",
    },
    {
        timestamp: "04-27-2021 05:37 AM",
        devicename: "Medicine Dispenser",
        patientname: "John Doe",
        priority: "Medium",
        message: "Medine was not taken on time.",
    },
    {
        timestamp: "04-27-2021 12:01 PM",
        devicename: "Medicine Dispenser",
        patientname: "John Doe",
        priority: "Low",
        message: "Time to take medicine.",
    }];
  
    // Promise-based API
    return {
      loadAllDevices: function() {
        // Simulate async nature of real remote calls
        return $q.when(devices);
      }
    };
  }
  
  export default ['$q', DevicesDataService];
  
  