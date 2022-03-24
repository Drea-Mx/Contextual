module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5cb43152346078a793ffb93b0c315a26'),
  },
});
