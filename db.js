const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bookmarks_db');

const data = [
  {
    name: 'LinkedIn',
    URL: 'http://www.linkedin.com',
    category: 'jobs'
  },
  {
    name: 'Indeed',
    URL: 'http://www.indeed.com',
    category: 'jobs'
  },
  {
    name: 'Amazon',
    URL: 'http://www.amazon.com',
    category: 'shopping'
  },
  {
    name: 'W3C Shools - Javascript',
    URL: 'https://www.w3schools.com/jsref/default.asp',
    category: 'coding'
  },
  {
    name: 'Target',
    URL: 'http://www.shopping.com',
    category: 'shopping'
  },
  {
    name: 'The Weeknd',
    URL: 'https://www.theweeknd.com/',
    category: 'music'
  },
  {
    name: 'Stack Overflow',
    URL: 'https://stackoverflow.com/',
    category: 'coding'
  },
];


const Bookmark = conn.define('bookmark', {
  name: Sequelize.STRING, 
  URL: Sequelize.STRING, 
  category: Sequelize.STRING
})

const syncAndSeed = async() => {
  try { 
    await conn.sync({force: true}) // Model will drop table if it exists
    await data.map(obj => Bookmark.create(obj)) // obj is a perfect fit 
                                                //     OR should have been
                                                // Bookmark.create({ name: obj.name,
                                                //                   URL: obj.URL,
                                                //                   category: obj.category 
                                                //})
  }
  catch(err){ 
    console.log(err)
  }
}

//modules need to be exported and imported in the same order
module.exports = {
  syncAndSeed,
  conn,
  models: { Bookmark }
}