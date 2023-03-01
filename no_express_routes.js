const fs = require("fs");

const handleRoutes = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message' ></input></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") { //Manually parsing the body
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) console.error(err);
        res.statusCode = 302;
        res.setHeader('Location', '/')
        return res.end();
      });
    });
  }
};

module.exports = handleRoutes;
