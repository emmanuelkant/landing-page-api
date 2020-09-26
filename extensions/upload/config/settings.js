if (process.env.NODE_ENV === 'production') {
  module.exports = {
    provider: 'aws-s3',
    providerOptions: {
      api_key: process.env.PROVIDER_API_KEY,
      api_secret: process.env.PROVIDER_API_SECRET,
      region: process.env.AWS_REGION,
      params: {
        Bucket: process.env.BUCKET
      }
    },
  };
} else {
  // to use the default local provider you can return an empty configuration
  module.exports = {};
}
