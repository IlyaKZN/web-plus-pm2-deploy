require('dotenv').config({ path: './.env.deploy' });

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REP = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'frontend',
    script: './dist/app.js',
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REP,
      path: DEPLOY_PATH,
      'post-deploy': 'cd ./frontend && npm i && npm run build',
    },
  },
};