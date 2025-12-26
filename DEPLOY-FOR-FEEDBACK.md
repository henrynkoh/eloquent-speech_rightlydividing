# Quick Deployment Guide for Partner Feedback

## Option 1: Deploy to Vercel (Recommended - 2 minutes)

This is the easiest way to share a live URL with your partners.

### Steps:

1. **Install Vercel CLI** (if not already installed):
```bash
npm i -g vercel
```

2. **Deploy from project directory**:
```bash
cd eloquent-speech
vercel
```

3. **Follow prompts:**
   - Press Enter to confirm project settings
   - Press Enter to confirm directory (./)
   - Press Enter to confirm build settings (Next.js auto-detected)
   - Press Enter to confirm output directory (.next)

4. **Get your URL:**
   - Vercel will give you a URL like: `https://eloquent-speech-xxx.vercel.app`
   - Share this URL with your partners!

5. **Update your message:**
   - Replace `http://localhost:3000` with your Vercel URL

### Update Message:
```
Hi! I built a new web app - "Leadership Communication Mastery" for startup founders. Would love your quick feedback on design/UX.

🔗 Check it out: https://your-vercel-url.vercel.app

What to test:
- Sidebar navigation (try mobile menu)
- Case studies section  
- All 5 lesson pages
- Mobile responsiveness

Any thoughts on improvements? Thanks!
```

---

## Option 2: Use ngrok (For Localhost Sharing)

If you want to share your localhost without deploying:

1. **Install ngrok:**
   - Visit: https://ngrok.com/download
   - Or: `brew install ngrok` (Mac)

2. **Start your dev server** (if not running):
```bash
cd eloquent-speech
npm run dev
```

3. **In a new terminal, start ngrok:**
```bash
ngrok http 3000
```

4. **Copy the ngrok URL:**
   - You'll see: `Forwarding https://abc123.ngrok.io -> http://localhost:3000`
   - Share the ngrok URL (https://abc123.ngrok.io)

5. **Note:** Free ngrok URLs expire after 2 hours. For longer access, use Vercel.

---

## Option 3: Deploy to Netlify

1. **Install Netlify CLI:**
```bash
npm i -g netlify-cli
```

2. **Build the project:**
```bash
cd eloquent-speech
npm run build
```

3. **Deploy:**
```bash
netlify deploy --prod
```

4. **Follow prompts and get your URL**

---

## Current Status

✅ **Dev server is running** at: http://localhost:3000

You can view it locally in your browser right now!

**To share with partners, use Option 1 (Vercel) - it's the fastest and most reliable.**

---

## Quick Copy-Paste Messages

### For iPhone Messages / Text:
```
Hi! I built a new web app - "Leadership Communication Mastery" for startup founders. Would love your quick feedback on design/UX.

🔗 Check it out: [YOUR-VERCEL-URL]

What to test:
- Sidebar navigation (try mobile menu)
- Case studies section  
- All 5 lesson pages
- Mobile responsiveness

Any thoughts on improvements? Thanks!
```

### For Email:
```
Subject: Feedback Request: Leadership Communication Mastery Web App

Hi [Name],

I've built a new web application called "Leadership Communication Mastery" - a 5-day intensive program for startup founders.

I'd love your feedback on the design, features, and functionality. You can view it here:

🔗 [YOUR-VERCEL-URL]

What I'd appreciate feedback on:
- Overall design and user experience
- Navigation and sidebar functionality
- Content clarity and presentation
- Mobile responsiveness
- Any bugs or issues you notice
- Suggestions for improvement

Key Features to Test:
- Sidebar navigation (mobile menu on small screens)
- Hero section with animations
- Case studies section
- Curriculum showcase
- Testimonials
- All 5 lesson pages

Take your time exploring and let me know your thoughts! Thanks in advance.

Best,
[Your Name]
```

---

## After Deployment

1. Test the live URL yourself first
2. Update the message with the correct URL
3. Send to partners
4. Collect feedback
5. Make improvements
6. Re-deploy if needed

---

**Need help?** Check the PARTNER-FEEDBACK-MESSAGE.md file for more detailed message templates.

