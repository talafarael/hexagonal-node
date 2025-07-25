/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
export const shorthands = undefined;


export const up = (pgm) => {
  pgm.createTable('users', {
    id: 'id',
    name: { type: 'varchar(1000)', notNull: true, unique: true },
    password: { type: 'varchar(1000)', notNull: true },
    "createdAt": {
      type: 'timestamp',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });

  //  pgm.createTable('posts', {
  //    id: 'id',
  //    userId: {
  //      type: 'integer',
  //      notNull: true,
  //      references: '"users"',
  //      onDelete: 'CASCADE',
  //    },
  //    body: { type: 'text', notNull: true },
  //    createdAt: {
  //      type: 'timestamp',
  //      notNull: true,
  //      default: pgm.func('current_timestamp'),
  //    },
  //  });
  //  pgm.createIndex('posts', 'userId');
};

export const down = (pgm) => { }
