# Crypto Web3 Toolkit V2

Ultra-minimal backend for Railway deployment.

## Backend

**Dependencies:** 2 only
- fastapi==0.115.0
- uvicorn==0.32.0

**Endpoints:**
- `GET /health` - Health check
- `POST /api/wallet/analyze` - Wallet analysis
- `POST /api/contract/audit` - Contract audit
- `POST /api/sentiment/analyze` - Sentiment analysis

## Deploy to Railway

1. Create new Railway project
2. Deploy from GitHub
3. Root directory: `backend`
4. Auto-detect build
5. Done!

## Test

```bash
curl https://your-app.railway.app/health
```

## Frontend

Deploy to Netlify with:
```
NEXT_PUBLIC_API_URL=https://your-app.railway.app
```
