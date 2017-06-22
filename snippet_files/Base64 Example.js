//How to generate/encrypt username and password in Base64 format?

var auth = "Basic "+ new Buffer(username+ ":"+password).toString("base64");
