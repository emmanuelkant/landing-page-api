module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('PROVIDER_API_KEY'),
      secretAccessKey: env('PROVIDER_API_SECRET'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('BUCKET'),
      },
    },
  },
});
