const express = require('express')
const app = express();
const { conn, syncAndSeed } = require('./db.js')


app.get('/', (req, res, next)=> {
  const response = conn.query('SELECT * FROM bookmark')
  console.log(response)
  res.send(
  
    `
    <html>
      <body>
        <ul>
          ${
            response
          }
        </ul>
      </body>
    </html>
    
    `
  )



});





app.get('/bookmarks', (req, res, next)=> {
  //make your database call and render html with res.send
});





const  PORT  = 3000
app.listen(PORT, ()=> {console.log(`Listening on port ${PORT}`)});


