const http = require("http");

const fs = require("fs");

const localhost = "127.0.0.1";

const PORT = 5000;

const home = fs.readFileSync("index.html", "utf8");
const about = fs.readFileSync("about.html", "utf8");
const gallery = fs.readFileSync("gallery.html", "utf8");
const project = fs.readFileSync("project.html", "utf8");
const contact = fs.readFileSync("contact.html", "utf8");
const error = fs.readFileSync("error.html", "utf8");

const server = http.createServer((req, res) => {
  //   res.end("Hello");
  //   console.log(req.url);
  if (req.url === "/") {
    return res.end(home);
  } else if (req.url === "/about") {
    return res.end(about);
  } else if (req.url === "/contact") {
    return res.end(contact);
  } else if (req.url === "/project") {
    return res.end(project);
  } else if (req.url === "/gallery") {
    return res.end(gallery);
  } else {
    return res.end(error);
  }
});

server.listen(PORT, localhost, () => {
  console.log(`Server running on http://${localhost}:${PORT}`);
});
