// npm install json-server
// npm install jsonwebtoken --save-dev

const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')

const server = jsonServer.create()
const router = jsonServer.router('./backend/players.json')
const userdb = JSON.parse(fs.readFileSync('./backend/users.json', 'UTF-8'))

server.use(jsonServer.bodyParser);
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'

const expiresIn = '1h'

// Create a token from a payload 
function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

// Verify the token 
function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err)
}

// Check if the user exists in database
function isAuthenticated({username, password}){
  return userdb.users.findIndex(user => user.username === username && user.password === password) !== -1
}

function hasAccess(token){
  var decoded = jwt.decode(token, {complete: true});
  return userdb.users.findIndex(user => user.scope === decoded.payload["scope"]) !== -1
}

function getScope(username){
  const user = userdb.users.find(user => user.username === username);
  return user["scope"];
}

server.post('/api/v1/api-auth-token/', (req, res, next) => {
  const {username, password} = req.body
  if (isAuthenticated({username, password}) === false) {
    const status = 401
    const message = 'Incorrect username or password'
    res.status(status).json({status, message})
    return
  }
  //urn:examplecompany:product_price:update
  const scope = getScope(username);
  const access_token = createToken({username, password, scope: scope})
  res.status(200).json({access_token})
})

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (req.headers.authorization === undefined || req.headers.authorization.split(' ')[0] !== 'Bearer') {
    const status = 401
    const message = 'Error in authorization format'
    res.status(status).json({status, message})
    return
  }

  try {
  const token = req.headers.authorization.split(' ')[1];
     if (hasAccess(token) === false) {
       const status = 401
       const message = 'User no have permission';
       res.status(status).json({status, message})
       return
     }
     verifyToken(token);
     next()
  } catch (err) {
    const status = 401
    const message = 'Error access_token is revoked'
    res.status(status).json({status, message})
  }
})

server.use(router)

server.listen(3000, () => {
  console.log('Run Auth API Server')
})

// Scope passed in as list to get token
//https://slack.com/oauth/authorize?client_id=...&scope=team%3Aread+users%3Aread
