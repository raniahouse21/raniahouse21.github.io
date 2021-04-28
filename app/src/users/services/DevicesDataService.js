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
        timestamp: "12",
        devicename: "pill",
        patientname: "Bob",
        priority: "high",
        message: "hi",
    },
    {
        timestamp: "11",
        devicename: "pantry",
        patientname: "",
        priority: "",
        message: "",
    },
    {
        timestamp: "",
        devicename: "smart",
        patientname: "",
        priority: "",
        message: "",
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
  
  