import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // gets all visited trails
  getVisitedTrails: function(id) {
    return axios.get("/api/trails/" + id);
  },
  // gets all saved trails
  getSavedTrails: function(id) {
    return axios.get("/api/trails/" + id);
  },
  // deletes visited trail
  deleteVisitedTrails: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // deletes saved trail
  deleteSavedTrails: function(id) {
    return axios.delete("/api/trails/" + id);
  },
  // saves visited trail
  saveVisitedTrails: function(trailData) {
    return axios.post("/api/trails", trailData);
  },
  // saves saved trails
  saveSavedTrails: function(trailData) {
    return axios.post("/api/trails", trailData); 
  },
  getUser: function(userData) {
    return axios.post("/auth/user", userData);
  },
  loginUser: function(userData) {
    return axios.post("/auth/login", userData)
  },
  logoutUser: function(userData) {
    return axios.post("/auth/logout", userData)
  },
  signUpUser: function(userData) {
    return axios.post("/auth/register", userData)
  }
};
