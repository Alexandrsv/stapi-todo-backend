module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1d7234ac16e9656d1e8df1fae3b55b5c'),
  },
});
