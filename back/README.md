# Portfolio Contact Form Backend

This is a simple Node.js backend server for handling contact form submissions from your portfolio website and sending them directly to your Gmail account.

## Setup Instructions

### 1. Clone this repository to your server or local machine

```bash
git clone [your-repository-url]
cd portfolio-contact-backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the root directory with the following variables:

```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 4. Set up Gmail app password

Since May 2022, Google no longer allows less secure apps to access Gmail accounts with just your password. You need to create an App Password instead:

1. Go to your Google Account settings: [https://myaccount.google.com/](https://myaccount.google.com/)
2. Select "Security" from the left sidebar
3. Under "Signing in to Google," select "2-Step Verification" (you need to have this enabled)
4. At the bottom of the page, select "App passwords"
5. Select "Mail" as the app and "Other" as the device
6. Enter a name (e.g., "Portfolio Contact Form")
7. Google will generate a 16-character password - copy this
8. Paste this password as the `EMAIL_PASS` value in your `.env` file

### 5. Start the server

For development:
```bash
npm run dev
```

For production:
```bash
npm start
```

## API Endpoint

### POST /api/send-email

Sends an email with the contact form data to your Gmail account.

#### Request Body

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss a potential job opportunity with you."
}
```

#### Response

Success (200):
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

Error (400 or 500):
```json
{
  "error": "Error message",
  "details": "Detailed error information"
}
```

## Deployment

This server can be deployed to various platforms:

- **Heroku**: Follow [Heroku's Node.js deployment guide](https://devcenter.heroku.com/articles/deploying-nodejs)
- **Vercel**: Convert this to a serverless function following [Vercel's API routes documentation](https://vercel.com/docs/concepts/functions/serverless-functions)
- **Netlify**: Create a serverless function following [Netlify's Functions documentation](https://docs.netlify.com/functions/overview/)

## CORS Configuration

The server is configured to accept requests from any origin. For production, you should modify the CORS settings in `server.js` to only accept requests from your portfolio website domain:

```javascript
app.use(cors({
  origin: 'https://your-portfolio-website.com'
}));
```