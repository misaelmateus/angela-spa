# Database Setup Guide

## Railway PostgreSQL Setup

### 1. Create Railway Account & Project

1. Go to [Railway.app](https://railway.app)
2. Sign up or log in with GitHub
3. Click "New Project"
4. Select "Provision PostgreSQL"

### 2. Get Database Connection String

1. Click on your PostgreSQL service in Railway
2. Go to the "Connect" tab
3. Copy the "DATABASE_URL" connection string
   - Format: `postgresql://user:password@host:port/database`

### 3. Configure Environment Variables

#### For Local Development (apps/api/.env)

```bash
DATABASE_URL="postgresql://user:password@your-railway-host:port/database"
JWT_SECRET="your-random-secret-here"
CORS_ORIGIN="http://localhost:3000"
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100
NODE_ENV="development"
PORT=3001
```

#### For Railway Production (Set in Railway Dashboard)

1. Go to your backend service in Railway
2. Click "Variables" tab
3. Add these variables:
   - `DATABASE_URL` - Automatically provided by Railway when you link the database
   - `JWT_SECRET` - Generate with: `openssl rand -base64 32`
   - `CORS_ORIGIN` - Your Vercel frontend URL (e.g., `https://angela-spa.vercel.app`)
   - `RATE_LIMIT_WINDOW_MS` - `60000`
   - `RATE_LIMIT_MAX_REQUESTS` - `100`
   - `NODE_ENV` - `production`
   - `PORT` - `3001`

### 4. Run Database Migrations

#### Option A: Using Railway CLI (Recommended for Production)

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Login to Railway:
   ```bash
   railway login
   ```

3. Link your project:
   ```bash
   cd apps/api
   railway link
   ```

4. Run migrations:
   ```bash
   railway run npm run db:migrate
   ```

#### Option B: Using Local Environment (For Testing)

1. Update `apps/api/.env` with your Railway DATABASE_URL

2. Run migration:
   ```bash
   cd apps/api
   npm run db:migrate
   ```

### 5. Verify Database Setup

Connect to your Railway PostgreSQL database and verify tables were created:

```sql
-- Check all tables
\dt

-- Should show:
-- sessions
-- events
-- conversions
-- ab_tests
-- ab_variants
-- ab_results
-- page_content
-- services
-- admin_users
```

### 6. Create Initial Admin User (Optional)

Create a script or use Prisma Studio to create your first admin user:

```bash
cd apps/api
npx prisma studio
```

Or create via SQL:

```sql
INSERT INTO admin_users (
  id,
  email,
  password_hash,
  name,
  role,
  created_at
) VALUES (
  gen_random_uuid(),
  'admin@angelaspa.com',
  '$2b$10$...',  -- Generate with bcrypt
  'Admin',
  'admin',
  NOW()
);
```

## Migration Commands Reference

```bash
# Generate Prisma Client
npm run db:generate

# Create a new migration (development only)
npm run db:migrate

# Deploy migrations (production)
npx prisma migrate deploy

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset

# View migration status
npx prisma migrate status

# Open Prisma Studio (Database GUI)
npx prisma studio
```

## Troubleshooting

### Connection Issues

If you can't connect to Railway database:

1. Check if Railway service is running
2. Verify DATABASE_URL format is correct
3. Ensure your IP is not blocked (Railway has no IP restrictions by default)
4. Check Railway service logs for errors

### Migration Errors

If migrations fail:

1. Check DATABASE_URL is correctly set
2. Ensure PostgreSQL version compatibility (Railway uses PostgreSQL 14+)
3. Verify no conflicting migrations exist
4. Check Railway logs for specific errors

### Schema Changes

If you modify `prisma/schema.prisma`:

1. Create a new migration:
   ```bash
   npx prisma migrate dev --name description_of_change
   ```

2. Deploy to production:
   ```bash
   railway run npx prisma migrate deploy
   ```

## Next Steps

After database setup is complete:

1. ✅ Database tables created
2. ⬜ Deploy backend to Railway
3. ⬜ Deploy frontend to Vercel
4. ⬜ Configure production environment variables
5. ⬜ Test analytics tracking
6. ⬜ Create first A/B test
