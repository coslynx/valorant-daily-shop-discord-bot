import { Client, Interaction } from 'discord.js';
import logger from '../utils/logger';
import { handleLoginCommand } from '../authentication/discord';
import { handleShopCommand } from '../commands/shop';
import { handleShopHistoryCommand } from '../commands/shop-history';
import { handleSettingsCommand } from '../commands/settings';

export default (client: Client): void => {
  client.on('interactionCreate', async (interaction: Interaction) => {
    try {
      if (!interaction.isChatInputCommand()) return;

      const { commandName } = interaction;

      switch (commandName) {
        case 'login':
          await handleLoginCommand(interaction);
          break;
        case 'shop':
          await handleShopCommand(interaction);
          break;
        case 'shop-history':
          await handleShopHistoryCommand(interaction);
          break;
        case 'settings':
          await handleSettingsCommand(interaction);
          break;
        default:
          break;
      }
    } catch (error: any) {
      logger.error(`Error in interactionCreate event: ${error.message}`, error);
      await interaction.reply({ content: 'An error occurred. Please try again later.', ephemeral: true });
    }
  });
};