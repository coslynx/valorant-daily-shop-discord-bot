import { Client } from 'discord.js';
import logger from '../utils/logger';
import { registerCommands } from '../utils/commands';

export default (client: Client): void => {
  client.on('ready', async () => {
    try {
      logger.info(`Bot is ready! Logged in as ${client.user?.tag}`);

      // Register slash commands
      await registerCommands(client);

      // Start background tasks (e.g., refreshing shop data periodically)
      // ...

    } catch (error: any) {
      logger.error('Error in ready event:', error);
    }
  });
};