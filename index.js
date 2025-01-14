require('dotenv').config()
const path = require('path')
const routes = require('./src/routes')

const lti = require('ltijs').Provider

// Setup
lti.setup(process.env.LTI_KEY,
  {
    url: 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME + '?authSource=admin',
    connection: { user: process.env.DB_USER, pass: process.env.DB_PASS }
  }, {
    staticPath: path.join(__dirname, './public'), // Path to static files
    cookies: {
      secure: false, // Set secure to true if the testing platform is in a different domain and https is being used
      sameSite: '' // Set sameSite to 'None' if the testing platform is in a different domain and https is being used
    },
    devMode: true // Set DevMode to true if the testing platform is in a different domain and https is not being used
  })

// When receiving successful LTI launch redirects to app
lti.onConnect(async (token, req, res) => {
  return res.sendFile(path.join(__dirname, './public/index.html'))
})

// When receiving deep linking request redirects to deep screen
lti.onDeepLinking(async (token, req, res) => {
  return lti.redirect(res, '/deeplink', { newResource: true })
})

// Setting up routes
lti.app.use(routes)

// Setup function
const setup = async () => {
  await lti.deploy({ port: process.env.PORT })

  /**
   * Register platform
   */
  // Canvas
  //you may need to change the root uri from including test to whichever environment you are uploading to
  await lti.registerPlatform({
      url: 'https://fhict.test.instructure.com',
      name: 'Platform',
      clientId: 'fhict.test.instructure.com',
      authenticationEndpoint: 'https://fhict.test.instructure.com/api/lti/authorize_redirect',
      accesstokenEndpoint: 'https://fhict.test.instructure.com/login/oauth2/token',
      authConfig: { method: 'JWK_SET', key: 'https://fhict.test.instructure.com/api/lti/security/jwks' }
  })
    await lti.registerPlatform({
        url: 'https://saltire.lti.app/platform',
        name: 'Platform',
        clientId: 'saltire.lti.app',
        authenticationEndpoint: 'https://saltire.lti.app/platform/auth',
        accesstokenEndpoint: 'https://saltire.lti.app/platform/token/e46e1c540738606c6e090cf4ff184383',
        authConfig: { method: 'JWK_SET', key: 'https://saltire.lti.app/platform/jwks' }
    })
}

setup()
