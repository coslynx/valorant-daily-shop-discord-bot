import { Client, Message } from 'discord.js';
import logger from '../utils/logger';

export default (client: Client): void => {
  client.on('messageCreate', async (message: Message) => {
    try {
      if (message.author.bot) return; // Ignore bot messages

      // Handle basic commands (replace with your actual command logic)
      if (message.content.startsWith('!ping')) {
        await message.reply('Pong!');
      }

      // ... Other command handling logic

    } catch (error: any) {
      logger.error(`Error in messageCreate event: ${error.message}`, error);
    }
  });
};