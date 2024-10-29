const ronin     = require( 'ronin-server' )
const mocks     = require( 'ronin-mocks' )
 
const server = ronin.server()
 
console.log('hello 2')
server.use( '/', mocks.server( server.Router(), false, true ) )
server.start()