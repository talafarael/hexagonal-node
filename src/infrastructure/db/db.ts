//connect db

import { Pool } from 'pg';
import { IDatabasePort } from '../../application/common/db/secondary/DatabasePort';

export class RepoConncet implements IDatabasePort {
  private pool: Pool

  constructor() {
    this.pool = new Pool({
      user: 'farael',
      host: 'localhost',
      database: 'hexagonal_db',
      port: 5432,
    });
  }

  async connect(): Promise<void> {
    await this.pool.connect();
    console.log('Connected to Postgres');
  }

  async db(): Promise<Pool> {
    return this.pool
  }

  async disconnect(): Promise<void> {
    await this.pool.end();
    console.log('Disconnected from Postgres');
  }
}
