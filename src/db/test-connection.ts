import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function testConnection() {
  const config = {
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: parseInt(process.env.POSTGRES_PORT || '5432', 10)
  };

  console.log('Environment variables:', {
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
  });

  console.log('Attempting to connect with config:', {
    ...config,
    password: '[HIDDEN]'
  });

  const pool = new Pool(config);

  try {
    const client = await pool.connect();
    console.log('Successfully connected to database!');
    const result = await client.query('SELECT version()');
    console.log('PostgreSQL version:', result.rows[0].version);
    client.release();
  } catch (err) {
    console.error('Error connecting to the database:', err);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

testConnection();
