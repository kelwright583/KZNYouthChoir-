# Netlify Deployment Guide

## Quick Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended for first time)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/Login
   - Click "Add new site" → "Import an existing project"
   - Connect your Git provider and select this repository

3. **Configure Build Settings**
   
   The `netlify.toml` file is already configured at the root! Netlify should auto-detect it.
   
   If you need to set manually:
   - **Base directory**: Leave empty (uses root)
   - **Build command**: `pnpm install && pnpm build --filter=@kzn-youth-choir/public-site`
   - **Publish directory**: `apps/public-site/.next`
   - **Node version**: 18
   
   **Note**: Netlify should auto-detect PNPM from your `packageManager` field in `package.json`

4. **Environment Variables** (Optional for now - add later when connecting backend)
   - You can add `DATABASE_URL` later when ready to connect the database
   - For now, leave this empty - the site will work without it

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete
   - Your site will be live!

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI** (if not already installed)
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify** (from project root)
   ```bash
   cd apps/public-site
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Follow the prompts

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

## Important Notes

### What Works Without Backend:
✅ All static pages (Home, About, Auditions, Contact, etc.)
✅ Navigation and layout
✅ Hero carousel (shows default slides)
✅ Forms render (submissions will show errors but won't break the site)
✅ All styling and images

### What Won't Work (but won't break):
⚠️ Dynamic content sections will be empty:
  - Events list
  - News list  
  - Sponsors strip
⚠️ Form submissions will fail gracefully (show error messages)

### When Ready to Connect Backend:
1. Add `DATABASE_URL` environment variable in Netlify dashboard
2. Redeploy the site
3. All dynamic features will start working automatically

## Troubleshooting

### Build Fails
- Make sure Node version is set to 18 in Netlify
- Ensure PNPM is available (Netlify should auto-install)
- Check build logs for specific errors

### API Routes Return Errors
- This is expected without a database connection
- The site will still work - dynamic sections will just be empty
- Add `DATABASE_URL` when ready to connect backend

### Images Not Loading
- Make sure all images are in `apps/public-site/public/images/`
- Check image paths are correct

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Check mobile responsiveness
- [ ] Test forms (they'll show errors but should render)
- [ ] Verify images load
- [ ] Check carousel displays default slides
- [ ] Test on different browsers/devices

## Next Steps After Deployment

1. Share the Netlify URL with stakeholders for feedback
2. Collect feedback on design and user experience
3. When ready, connect the backend by adding `DATABASE_URL`
4. Set up admin site for content management

