# Ayush Nathani - Personal Portfolio

A modern, high-performance portfolio website built with the latest web technologies. This project showcases my skills, featured projects, and professional background with a premium, motion-rich aesthetic.

[![Portfolio Live](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://your-portfolio-link.vercel.app)
[![Tech Stack](https://img.shields.io/badge/Next.js%2016-React%2019-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Aesthetics](https://img.shields.io/badge/Tailwind%204-Framer%20Motion-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)

## 🚀 Key Features

- **Standard-Setting Tech Stack**: Built with **Next.js 16 (App Router)**, **React 19**, and **Tailwind CSS 4** for cutting-edge performance and developer experience.
- **Dynamic Theming**: Seamless switching between premium Light and Dark modes using `next-themes`.
- **Advanced Animations**: motion-driven UI using **Framer Motion**, including:
  - Custom scroll progress tracking.
  - Interactive magnetic effects for buttons and links.
  - Staggered entrance animations for refined reveal effects.
- **Responsive & Liquid Layout**: Optimized for every screen size, from mobile devices to ultra-wide displays.
- **Clean Console Technology**: Custom console noise suppression to filter out browser extension warnings for a distraction-free development experience.
- **Interactive Elements**: Real-time typewriter effects, scroll-native navigation, and high-performance image optimization.
- **Automated Inquiry System**: Fully integrated contact form using **Resend** for instant email notifications and **@libsql/client** for cloud-ready data persistence.
- **Secure Admin Dashboard**: A private repository of all messages with magnetic UI actions (Reply/Delete) and secure password protection.

## 🛠️ Performance Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **UI Logic**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Deployment**: [Vercel](https://vercel.com)

## 📁 Featured Projects

### 1. EcoShift – Carbon Footprint Tracker
*A web-based application designed to help individuals track sustainable habits and measure real-time CO2 savings.*
- **Tech Stack**: Node.js, Express.js, SQLite, Chart.js, Bootstrap, REST API.
- **Key Features**: Habit logging, profile management, interactive CO2 analytics, and CSV/PDF export.

### 2. EV Vehicle Prediction and Forecasting
*A machine learning pipeline forecasting electric vehicle (EV) adoption trends.*
- **Tech Stack**: Python, Random Forest, Streamlit, Pandas, NumPy, Scikit-learn.
- **Key Features**: Predictive modeling for market trends and an interactive forecasting dashboard.

### 3. E-DALL-E: Image Generation System
*Combines DALL-E Mini with VQGAN+CLIP for advanced image generation and expansion.*
- **Tech Stack**: Python, DALL-E Mini, VQGAN+CLIP, PyTorch, Deep Learning.
- **Key Features**: Text-to-image synthesis with novel aspect-ratio expansion techniques.

## 🎓 About & Background

I am a Computer Science student currently pursuing my **MCA at IIT Patna & IIIT Ranchi**. I am passionate about building innovative solutions at the intersection of web development and intelligence.

### 📜 Certifications
- **Microsoft Azure AI Essentials**: Workloads and Machine Learning on Azure.
- **Gemini for Google Workspace**: Leveraging generative AI for productivity.

## 🏁 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root and add the following variables:

```env
# Cloud SQLite (Turso)
TURSO_DATABASE_URL=libsql://your-db-url.turso.io
TURSO_AUTH_TOKEN=your_auth_token_here

# Admin Dashboard
ADMIN_PASSWORD=your_secure_password

# Email (Resend)
NOTIFICATION_EMAIL=your_email@gmail.com
RESEND_API_KEY=re_your_api_key
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in development mode.

## 📦 Deployment

Optimized for deployment on **Vercel**. 

### Important Steps for Production:
1. **Database**: Create a free account at [Turso](https://turso.tech) and create a new database.
2. **Environment Variables**: Add the 5 keys mentioned in the `.env` section to your Vercel Project Settings.
3. **Build**: Ensure you have `@react-email/render` installed (already included in `package.json`).
4. **Deploy**: Simply push your code to GitHub and Vercel will handle the rest.

---
Built with 💙 by [Ayush Nathani](https://github.com/ayus1234)