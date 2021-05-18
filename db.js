const Sequelize = require('sequelize');
const { noExtendLeft } = require('sequelize/types/lib/operators');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/bookmarks');

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


const Bookmark = conn.define('Bookmark', {
                  name: Sequelize.STRING, 
                  URL: Sequelize.STRING, 
                  category: Sequelize.STRING
                })

const syncAndseed = async() => {
  try { 
    await data.forEach(obj => Bookmark.create(obj))
  }
  catch(ex){
  
  }
}





module.exports = {
  syncAndseed,
  conn
}