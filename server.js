const http = require("http");

const fs = require("fs");

// const localhost = "127.0.0.1";

const PORT = process.env.PORT;

const home = fs.readFileSync("./index.html", "utf8");
const about = fs.readFileSync("./about.html", "utf8");
const gallery = fs.readFileSync("./gallery.html", "utf8");
const project = fs.readFileSync("./project.html", "utf8");
const contact = fs.readFileSync("./contact.html", "utf8");
const error = fs.readFileSync("./error.html", "utf8");

const server = http.createServer((req, res) => {
  //   res.end("Hello");
  //   console.log(req.url);
  if (req.url === "/") {
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end(about);
  }
  if (req.url === "/contact") {
    return res.end(contact);
  }
  if (req.url === "/project") {
    return res.end(project);
  }
  if (req.url === "/gallery") {
    return res.end(gallery);
  } else {
    return res.end(error);
  }
});

server.listen(PORT, () => {
  //   console.log(`Server running on http://${localhost}:${PORT}`);
  console.log(`Server running`);
});
