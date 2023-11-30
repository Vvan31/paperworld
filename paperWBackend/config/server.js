module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('URL', 'https://paperworld-production.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  settings: {
    cors: {
      origin: ['http://expo.apw.enterprises', 'https://expo.apw.enterprises', 'http://paperworld-production.up.railway.app/', 'https://paperworld-production.up.railway.app/'],
    },
  },
});
