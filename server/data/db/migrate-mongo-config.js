// In this file you can configure migrate-mongo
import dotenv from 'dotenv';
dotenv.config({path: '../../.env'});

const dbUri = process.env.MONGODB_URI
    .replace('${DB_USERNAME}', process.env.DB_USERNAME)
    .replace('${DB_PASSWORD}', process.env.DB_PASSWORD);

const config = {
  mongodb: {
    // TODO Change (or review) the url to your MongoDB:
    url: dbUri,

    // TODO Change this to your database name:
    databaseName: 'ephemo-board',
  },

  // The migrations dir, can be an relative or absolute path.
  // Only edit this when really necessary.
  migrationsDir: 'migrations',

  // The mongodb collection where the applied changes are stored.
  // Only edit this when really necessary.
  changelogCollectionName: 'changelog',

  // The file extension to create migrations and search for in migration dir
  migrationFileExtension: '.js',

  // Enable the algorithm to create a checksum of the file contents
  // and use that in the comparison to determin
  // if the file should be run.
  // Requires that scripts are coded to be run multiple times.
  useFileHash: false,

  // Don't change this, unless you know what you're doing
  moduleSystem: 'esm',
};

export default config;
