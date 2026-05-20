# Deploy ke Render (Bukan Railway)

Railway error terus? Gak masalah. **Render lebih simple.**

## Backend Deploy (Render)

1. **Go to:** https://render.com
2. **New Web Service**
3. **Connect GitHub** → Select `crypto-web3-toolkit-v2`
4. **Configure:**
   - Name: `crypto-web3-toolkit-v2`
   - Root directory: `backend`
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - Environment: `Python 3.11`
5. **Deploy**

**Result:** `https://crypto-web3-toolkit-v2.onrender.com`

---

## Frontend Deploy (Netlify)

1. **Go to:** https://netlify.com
2. **Import project** → `crypto-web3-toolkit-v2`
3. **Configure:**
   - Base directory: `frontend` (jika ada)
   - Build: `npm run build`
   - Publish: `.next`
4. **Environment:**
   ```
   NEXT_PUBLIC_API_URL=https://crypto-web3-toolkit-v2.onrender.com
   ```
5. **Deploy**

---

## Test

```bash
curl https://crypto-web3-toolkit-v2.onrender.com/health
```

---

## Why Render?

✅ No dependency conflicts  
✅ Auto-deploy from GitHub  
✅ Free tier generous  
✅ Simple UI  
✅ Works with minimal backend  

---

**Status:** Ready for Render deployment  
**Time:** ~5 minutes
