module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8916bd96e3459debc6f9260dbbdd862d'),
  },
});
