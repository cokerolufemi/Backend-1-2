const express = require("express");
const server = express();

const handlePostAboutRequests = (req, res) => {
  res.send("Server posted About page");
};
//server that handles requests for get
const handleGetHomeRequests = (req, res) => {
  res.send("Server request Home page");
};
//server that handles requests for put
const handleProfilePutRequests = (req, res) => {
  res.send("Server request Profile page");
};
//server that handles requests for delete
const handleLoginDeleteRequests = (req, res) => {
  res.send("Server request Login page");
};
//server request handle method
const handleAllTypeRequests = (req, res) => {
  res.send("Response Server is now started");
};
server.put("/profile", handleProfilePutRequests);
server.delete("/login", handleLoginDeleteRequests);
server.post("/about", handlePostAboutRequests);
server.get("/home", handleGetHomeRequests);
server.use("/", handleAllTypeRequests);
server.listen(3000, () => console.log("Server is started!"));
