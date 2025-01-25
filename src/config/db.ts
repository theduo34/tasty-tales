import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const config = {
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: parseInt(process.env.POSTGRES_PORT || '5432', 10)
};

const pool = new Pool(config);

//eslint-disable-next-line
export const query = (text: string, params?: any[]) => pool.query(text, params);

export const close = () => pool.end();
