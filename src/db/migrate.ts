import fs from 'fs';
import path from 'path';
import * as dotenv from 'dotenv';
import { query, close } from '@/config/db';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

async function runMigrations() {
  try {
    const migrationsDir = path.join(__dirname, 'migrations');
    console.log('Migrations directory:', migrationsDir);
    
    const migrationFiles = fs.readdirSync(migrationsDir).sort();
    console.log('Found migration files:', migrationFiles);

    for (const file of migrationFiles) {
      if (file.endsWith('.sql')) {
        console.log(`Running migration: ${file}`);
        const migration = fs.readFileSync(path.join(migrationsDir, file), 'utf-8');
        console.log('Migration SQL:', migration);
        
        try {
          await query(migration);
          console.log(`Completed migration: ${file}`);
        } catch (err) {
          console.error(`Error running migration ${file}:`, err);
          throw err;
        }
      }
    }

    console.log('All migrations completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    if (error instanceof Error) {
      console.error('Error details:', {
        name: error.name,
        message: error.message,
        stack: error.stack
      });
    }
    process.exit(1);
  } finally {
    await close();
  }
}


console.log('Current working directory:', process.cwd());
console.log('Environment variables loaded:', {
  POSTGRES_USER: process.env.POSTGRES_USER,
  POSTGRES_HOST: process.env.POSTGRES_HOST,
  POSTGRES_DB: process.env.POSTGRES_DB,
  POSTGRES_PORT: process.env.POSTGRES_PORT,
});

runMigrations();
