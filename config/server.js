// const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  url: env('PUBLIC_URL', 'https://todo.zbc.su'),
  proxy: env.bool('IS_PROXIED', true),

  // cron: {
  //   enabled: true,
  //   tasks: cronTasks,
  // },
});
