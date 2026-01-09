# Deployment Guide - Angela Spa & Estética

## Railway Backend Deployment

### Prerequisites
✅ Railway account created
✅ PostgreSQL database provisioned
✅ Database migrations applied
✅ GitHub repository connected

### Step 1: Add Backend Service to Railway

**Via Railway Dashboard (Recommended):**

1. Go to your Railway project: https://railway.app/project/7a0a154f-0684-4725-9320-9bc2c302f0b9

2. Click **"+ New"** → **"GitHub Repo"**

3. Select your **`angela-spa`** repository

4. Configure the service:
   - **Service Name**: `angela-api`
   - **Root Directory**: `apps/api`
   - Railway will auto-detect the configuration from `railway.toml`

### Step 2: Configure Environment Variables

In Railway, go to your new `angela-api` service → **Variables** tab → Add these:

```bash
# Database (automatically available from Postgres service)
DATABASE_URL=${{Postgres.DATABASE_URL}}

# JWT Secret (generate a random secret)
JWT_SECRET=your-generated-secret-here

# CORS (your Vercel frontend URL)
CORS_ORIGIN=https://angela-spa.vercel.app

# Rate Limiting
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX_REQUESTS=100

# Node Environment
NODE_ENV=production

# Port (Railway provides this automatically)
PORT=${{PORT}}
```

**To generate JWT_SECRET**, run in terminal:
```bash
openssl rand -base64 32
```

### Step 3: Connect Database

1. In Railway, click on your `angela-api` service
2. Go to **Settings** → **Service Variables**
3. Click **"+ New Variable"** → **"Add Reference"**
4. Select `Postgres` → `DATABASE_URL`
5. This creates the `${{Postgres.DATABASE_URL}}` reference

### Step 4: Deploy

Railway will automatically deploy when you:
- Push to GitHub `main` branch
- Or click **"Deploy"** in Railway dashboard

**Build Process:**
1. Install dependencies (`npm install`)
2. Generate Prisma client (`npx prisma generate`)
3. Build TypeScript (`npm run build`)
4. Run migrations (`npx prisma migrate deploy`)
5. Start server (`npm run start`)

### Step 5: Verify Deployment

Once deployed, you'll get a URL like:
`https://angela-api-production.up.railway.app`

Test the health endpoint:
```bash
curl https://your-railway-url.railway.app/api/health
```

Should return:
```json
{
  "status": "ok",
  "timestamp": "2026-01-09T...",
  "uptime": 123.456
}
```

### Step 6: Enable Public Networking

1. Go to your `angela-api` service in Railway
2. Click **Settings** tab
3. Scroll to **Networking**
4. Click **"Generate Domain"**
5. Copy the domain (you'll need this for frontend deployment)

---

## Vercel Frontend Deployment

### Step 1: Install Vercel CLI (Optional)

```bash
npm i -g vercel
```

### Step 2: Deploy via Vercel Dashboard

1. Go to https://vercel.com/new

2. Import your **`angela-spa`** repository from GitHub

3. Configure the project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `apps/web`
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`

### Step 3: Configure Environment Variables

In Vercel → Project Settings → Environment Variables:

```bash
# Backend API URL (from Railway)
NEXT_PUBLIC_BACKEND_API=https://your-railway-url.railway.app

# WhatsApp Number
NEXT_PUBLIC_WHATSAPP_NUMBER=5562981260247
```

### Step 4: Deploy

Click **"Deploy"** and Vercel will:
1. Install dependencies
2. Build Next.js app
3. Deploy to CDN

You'll get a URL like: `https://angela-spa.vercel.app`

### Step 5: Update CORS in Railway

1. Go back to Railway → `angela-api` service → Variables
2. Update `CORS_ORIGIN` to your Vercel URL:
   ```
   CORS_ORIGIN=https://angela-spa.vercel.app
   ```
3. Redeploy the backend

### Step 6: Configure Custom Domain (Optional)

**In Vercel:**
1. Project Settings → Domains
2. Add your custom domain (e.g., `angelaspa.com.br`)
3. Configure DNS records as instructed

**Update Backend CORS:**
```
CORS_ORIGIN=https://angelaspa.com.br
```

---

## Post-Deployment Checklist

### Backend (Railway)
- [ ] Service is running and healthy
- [ ] Database connection working
- [ ] `/api/health` endpoint responding
- [ ] All environment variables configured
- [ ] Migrations applied successfully
- [ ] Public domain generated

### Frontend (Vercel)
- [ ] Site is live and loading
- [ ] All pages rendering correctly
- [ ] Images loading (add them to public/images/)
- [ ] WhatsApp links working
- [ ] Analytics tracking initialized
- [ ] Custom domain configured (if applicable)

### Integration Testing
- [ ] Frontend can connect to backend API
- [ ] Session tracking working
- [ ] Event tracking working
- [ ] WhatsApp conversion tracking working
- [ ] No CORS errors in browser console

---

## Monitoring & Maintenance

### Railway Logs
View backend logs:
```bash
railway logs
```

Or in Railway Dashboard → Service → Deployments → View Logs

### Vercel Logs
View frontend logs in Vercel Dashboard → Project → Deployments → View Logs

### Database Backups
Railway automatically backs up your PostgreSQL database.

To create a manual backup:
1. Railway Dashboard → Postgres service
2. Settings → Backups
3. Create Backup

---

## Troubleshooting

### Backend won't start
- Check Railway logs for errors
- Verify DATABASE_URL is correct
- Ensure migrations ran successfully
- Check that all dependencies are in `dependencies` (not `devDependencies`)

### CORS Errors
- Verify CORS_ORIGIN matches your frontend URL exactly
- No trailing slash in URL
- Include protocol (https://)

### Database Connection Issues
- Ensure Postgres service is running
- Check DATABASE_URL reference is correct: `${{Postgres.DATABASE_URL}}`
- Verify migrations were applied

### Frontend can't connect to backend
- Check NEXT_PUBLIC_BACKEND_API is correct
- Ensure Railway service has public domain
- Test backend health endpoint directly

---

## Rolling Back

### Railway
1. Go to Service → Deployments
2. Find the working deployment
3. Click "..." → Rollback

### Vercel
1. Go to Project → Deployments
2. Find the working deployment
3. Click "..." → Promote to Production

---

## Environment URLs

### Development
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### Production
- Frontend: https://angela-spa.vercel.app (or custom domain)
- Backend: https://angela-api-production.up.railway.app
- Database: Railway PostgreSQL (private)

---

## Next Steps After Deployment

1. **Add Images**: Upload optimized images to Vercel
2. **Test Analytics**: Verify tracking in Railway database
3. **Create First A/B Test**: Test variant selection
4. **Monitor Performance**: Check Vercel Analytics
5. **Set up Google Ads**: Start driving traffic
6. **Monitor Conversions**: Track WhatsApp clicks in database
