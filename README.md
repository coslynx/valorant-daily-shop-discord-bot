<h1 align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
  <br>valorant-daily-shop-discord-bot
</h1>
<h4 align="center">A Node.js Discord bot that fetches and displays the Valorant daily shop for users.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<p align="center">
  <img src="https://img.shields.io/badge/Framework-Discord.js-blue" alt="Framework: Discord.js" />
  <img src="https://img.shields.io/badge/Language-TypeScript-red" alt="Language: TypeScript" />
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend: Node.js" />
  <img src="https://img.shields.io/badge/Database-MongoDB-black" alt="Database: MongoDB" />
</p>
<p align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/valorant-daily-shop-discord-bot?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/valorant-daily-shop-discord-bot?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/valorant-daily-shop-discord-bot?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</p>

## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
This repository contains the code for a Discord bot that fetches and displays the Valorant daily shop for users. This bot utilizes Discord.js v14 for interacting with Discord's API, TypeScript for code organization and strong typing, Node.js for the backend, and MongoDB for storing user tokens and preferences.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | Secure Login   | The bot implements a secure authentication system that allows users to log in with their Riot Games accounts, using the new captcha flow for enhanced security. |
| 📄 | Shop Display    | Users can use a command (/shop) to see the current daily shop items, including descriptions and prices, directly within their Discord server.         |
| 🔗 | Shop History   | The bot offers a command (/shop-history) to view previous daily shop offerings, allowing users to track past items and plan for future purchases.  |
| 🧩 | User Settings   | Users can customize their experience by managing preferences like notification frequency and shop update reminders.                              |
| 🧪 | Error Handling  | Robust error handling ensures the bot can gracefully deal with issues during login, token extraction, or API communication, providing informative messages to users.|
| ⚡️  | API Rate Limiting  | To prevent exceeding Valorant API limits, the bot uses a rate limiter to manage API requests efficiently.                                      |
| 🔐 | Data Privacy      | The bot prioritizes user privacy by securely storing access tokens only for the duration of the session and adhering to Riot's privacy policies.           |
| 🔀 | Modular Design   | The codebase is structured into modules, making it easier to maintain, scale, and add new features in the future.                             |
| 🔌 | API Integration | The bot seamlessly integrates with Discord's API and Riot Games' API for authentication and data fetching.                          |

## 📂 Structure
```
valorant-daily-shop-discord-bot/
├── authentication
│   ├── discord.js
│   └── riot.js
├── commands
│   ├── login.js
│   ├── shop.js
│   ├── shop-history.js
│   └── settings.js
├── events
│   ├── ready.js
│   ├── interactionCreate.js
│   └── messageCreate.js
├── services
│   ├── valorant.js
│   └── discord.js
├── models
│   ├── user.js
│   └── shop.js
├── utils
│   ├── embed.js
│   ├── logger.js
│   └── errorHandler.js
├── config
│   └── env.config.js
├── .env
├── package.json
└── README.md
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- MongoDB (Optional for storing user tokens and preferences)

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/valorant-daily-shop-discord-bot.git`
2. Navigate to the project directory:
   - `cd valorant-daily-shop-discord-bot`
3. Install dependencies:
   - `npm install`
4. Create a `.env` file with the following environment variables:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   ```
5. (Optional) Set up a MongoDB database and update the `.env` file with the connection string.

## 🏗️ Usage
### 🏃‍♂️ Running the Project
1. Start the development server:
   - `npm start`
2. The bot will connect to your Discord server and be ready to receive commands.

### ⚙️ Configuration
- Discord Token: Set your Discord bot token in the `.env` file.
- MongoDB Connection String (Optional): If using MongoDB, add the connection string to the `.env` file.

### 📚 Examples
- `/login`: Initiates the authentication process, prompting the user to log in with their Riot Games account.
- `/shop`: Fetches and displays the current Valorant daily shop items.
- `/shop-history`: Retrieves and shows previous daily shop offerings.
- `/settings`: Allows users to manage their preferences, including notification settings.

## 🌐 Hosting
### 🚀 Deployment Instructions
1. Create a new application on your preferred hosting service (e.g., Heroku, AWS).
2. Add the project to your application.
3. Set up environment variables in the hosting service configuration (DISCORD_TOKEN, MongoDB connection string).
4. Deploy the application.

## 📄 License
This project is licensed under the MIT License.

## 👏 Authors
- Author Name - [Spectra.codes](https://spectra.codes)
- Creator Name - [DRIX10](https://github.com/Drix10)

<p align="center">
    <h1 align="center">🌐 Spectra.Codes</h1>
  </p>
  <p align="center">
    <em>Why only generate Code? When you can generate the whole Repository!</em>
  </p>
  <p align="center">
	<img src="https://img.shields.io/badge/Developer-Drix10-red" alt="">
	<img src="https://img.shields.io/badge/Website-Spectra.codes-blue" alt="">
	<img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
	<img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
  <p>