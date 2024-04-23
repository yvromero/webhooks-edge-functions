# github-webhooks
A Node.js app for practicing the use of GitHub and Discord webhooks. It also creates a Discord channel to receive server messages and enables image sending to Discord.

# Steps to execute
1. Clone the repository
2. Clone .env.template to .env
3. Configure the environment variable by copying the Webhook URL. From the Discord app: Server Settings > Overview > Integrations > Webhooks

# Get started with Netlify CLI
4. Run `npm install netlify-cli -g`

# Obtain a token with the command line
5. `netlify login`
6. Configure environment variables on Netlify

7. Run on dev enviroment `npm run netlify:dev`
8. Example: Discord messages>edge functions: http://localhost:8888/.netlify/functions/github-discord - /hello - /variables

9. Copy the generated URL from netlify with ` netlify deploy --prod` and update the Payload URL of the assigned repository on GitHub. Add the route. Example: url/api/github
10. Check it out the link: Github>Netlify>Discord

