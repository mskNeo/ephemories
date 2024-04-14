import { Db } from 'mongodb';

export = {
  async up(db: Db) {
    await db.createCollection('ephemos', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Ephemos Schema Validation',
          required: ['content', 'expires'],
          properties: {
            content: {
              bsonType: 'string',
              minLength: 1,
              maxLength: 150,
              description: '\'content\' custom string',
            },
            expires: {
              bsonType: 'date',
              description: 'timestamp of ephemo expiration',
            },
          },
        },
      },
    })
  },

  async down(db: Db) {
    await db.dropCollection('ephemos');
  }
};
