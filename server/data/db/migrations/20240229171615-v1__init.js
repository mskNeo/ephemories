export const up = async (db) => {
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
            bsonType: 'string',
            description: 'timestamp of ephemo expiration',
          },
        },
      },
    },
  });
};

export const down = async (db) => {
  await db.collection('ephemos').drop();
};
