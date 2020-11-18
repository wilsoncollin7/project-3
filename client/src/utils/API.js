import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // gets all visited trails
  getVisitedTrails: function() {
    return axios.get("/api/visitedTrails");
  },
  // gets all saved trails
  getSavedTrails: function() {
    return axios.get("/api/savedTrails");
  },
  // deletes visited trail
  deleteVisitedTrails: function(id) {
    return axios.get("/api/visitedTrails/" + id);
  },
  // deletes saved trail
  deleteSavedTrails: function(id) {
    return axios.get("/api/visitedTrails/" + id);
  },
  // saves visited trail
  saveVisitedTrails: function(trailData) {
    return axios.post("/api/visitedTrails/" + trailData);
  },
  // saves saved trails
  saveSavedTrails: function(trailData) {
    return axios.post("/api/savedTrails" + trailData);
  },
  getUser: function() {
    return axios.get("/api/user");
  },
  saveUser: function(userData) {
    return axios.post("/api/user" + userData)
  }
};
