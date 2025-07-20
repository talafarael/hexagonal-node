import { Pool } from 'pg';

export interface IDatabasePort {
  connect(): Promise<void>
  db(): Promise<Pool>
  disconnect(): Promise<void>

}

