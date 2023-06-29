const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3014);
const server = http.createServer(app);

server.listen(process.env.PORT || 3014, () => {
  console.log(`Server is running on port ${app.get('port')}`);
});




// run server with :  node .\src\server.js