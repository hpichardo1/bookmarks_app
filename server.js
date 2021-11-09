const express = require('express')
const morgan = require('morgan')
const app = express();
const { syncAndSeed, conn, models: { Bookmark }} = require('./db')
const  PORT  = 3000

app.use(morgan('dev'))


app.get('/', async(req, res, next)=> {
  const bookmarks = await Bookmark.findAll()
  //console.log(response)
  res.send(
    `<html>
      <body>
        <ul>
          ${
            bookmarks.map( bookmark => `<li>${bookmark.category}</li>`)
            .filter( (category, idx, arr) => category !== arr[idx-1])
            .join('')
          }
        </ul>
      </body>
    </html>`
  )
});


app.get('/bookmarks', (req, res, next)=> {
  //make your database call and render html with res.send
});



const init = async() => {
  try {
    await conn.authenticate()
    await syncAndSeed();
    app.listen(PORT, ()=> {
      console.log(`Listening on port ${PORT}`)
    });
  } catch (err){
    console.log(err)
  }
}

init();
