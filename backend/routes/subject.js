var http = require('http');

http.createServer(function (req, res) {
  res.setHeader('Acess-Control-Allow-Origins', ' * ')
  res.setHeader('Acess-Control-Allow-Methods', 'GET , POST')
  res.setHeader('Acess-Control-Allow-Headers', 'Content-type')
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end('{"contactSubject": ["General Enquery","Classes","Schedules","Instructors","Prices","Other","Phattadon"]}');
}).listen(5000);