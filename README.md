This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Both the application form and contact form require email configuration to send submissions. Create a `.env.local` file in the root directory with the following variables:

### Using SMTP (Direct Email)

The forms use SMTP to send emails directly to your inbox. Configure your email provider settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
```

#### Gmail Setup:

1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password (select "Mail" and "Other" device)
5. Use this app password as your `SMTP_PASSWORD` (not your regular Gmail password)

#### Other Email Providers:

- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587`
- **Custom domain**: Check with your email provider for SMTP settings

### Testing Locally

1. Copy `.env.example` to `.env.local` (or create `.env.local` manually)
2. Add your email service credentials
3. Restart the development server: `npm run dev`
4. Navigate to `/apply` or `/contact` and submit a test form
5. Check that the email is received at `Darultahawiyyah@gmail.com`

**Note:** Never commit `.env.local` to version control. It's already in `.gitignore`.

## Deploy to Vercel

### Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Step 3: Configure Environment Variables

1. In your Vercel project dashboard, go to **Settings** > **Environment Variables**
2. Add the following variables for each environment (Production, Preview, Development):

   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   SMTP_FROM_EMAIL=your-email@gmail.com
   ```

3. Click "Save" for each variable
4. Redeploy your application for changes to take effect

### Step 4: Test Email Functionality

1. After deployment, navigate to `https://your-domain.vercel.app/apply` or `https://your-domain.vercel.app/contact`
2. Fill out and submit a test form
3. Check that the email is received at `Darultahawiyyah@gmail.com`
4. Verify the email subject and body format are correct

### Step 5: Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 24 hours)

### Troubleshooting

- **Email not sending?** Check that environment variables are set correctly and SMTP credentials are valid. For Gmail, make sure you're using an App Password, not your regular password
- **Build errors?** Ensure all dependencies are in `package.json` and run `npm install` locally to verify
- **Environment variables not working?** Make sure to redeploy after adding variables

For more details, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
