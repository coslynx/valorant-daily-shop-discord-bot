require('dotenv').config();

module.exports = {
  discord: {
    token: process.env.DISCORD_TOKEN,
  },
  riot: {
    clientId: process.env.RIOT_CLIENT_ID,
    clientSecret: process.env.RIOT_CLIENT_SECRET,
    redirectUri: process.env.REDIRECT_URI, // Replace with your actual redirect URI
  },
  valorant: {
    apiKey: process.env.VALORANT_API_KEY,
  },
  database: {
    // Configure your database here, for example:
    // uri: process.env.MONGO_URI,
  },
  // Add other environment variables as needed
};