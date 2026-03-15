# Academy of Martial Arts & Sports Zone

Futuristic cyberpunk karate dojo built with React (Vite) + Node/Express + MongoDB, featuring admissions, courses, events, shop, Razorpay payments, and protected dashboards.

## Tech Stack
- Frontend: Vite + React 18, React Router v6, Framer Motion, Swiper, React Hot Toast, React Icons.
- Backend: Node.js, Express, MongoDB/Mongoose, JWT auth, Helmet, CORS, Rate limiting.
- Payments: Razorpay.

## Prerequisites
- Node.js 18+
- MongoDB running locally or Atlas
- Razorpay account with API keys

## Setup
```bash
git clone <repo>
cd academy-of-martial-arts

# backend
cd server
npm install

# frontend
cd ../client
npm install
```

## Environment (server/.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/academy_martial_arts
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=7d
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
FRONTEND_URL=http://localhost:5173
```

## Running
Open two terminals:
- Backend: `cd server && npm run dev`
- Frontend: `cd client && npm run dev`

## API Highlights
- Auth: register, login, profile (GET/PUT), logout
- Students: admission register, CRUD, attendance
- Courses: public list/get, admin CRUD, enroll
- Events: public list/get, admin CRUD, register
- Products/Orders: shop listing, admin CRUD, create order, update status
- Payments: Razorpay create/verify, history
- Contact: POST /api/contact

## Payment Flow
1. Frontend calls `/api/payments/razorpay/create-order` to get order id.
2. Open Razorpay checkout with academy branding.
3. On success, call `/api/payments/razorpay/verify`.

## Deployment
- Frontend: Vercel/Netlify (`npm run build` in client).
- Backend: Railway/Render. Set env vars, connect MongoDB, set `FRONTEND_URL` for CORS.
- Serve over HTTPS via proxy; keep uploads/ static.

