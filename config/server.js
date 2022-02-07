// const cronTasks = require("./cron-tasks");

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('NODE_PORT', 1337),
  // cron: {
  //   enabled: true,
  //   tasks: cronTasks,
  // },
});
