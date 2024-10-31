import { SlashCommandBuilder } from 'discord.js';
import { authenticateRiot } from './riot';
import logger from '../utils/logger';

export const loginCommand = new SlashCommandBuilder()
  .setName('login')
  .setDescription('Login to your Riot Games account to access the daily shop.');

export async function handleLoginCommand(interaction: any) {
  try {
    const { user: { id: userId } } = interaction;

    const authUrl = await authenticateRiot(userId);

    await interaction.reply({
      content: `Please click this link to login and grant access to your Valorant account: ${authUrl}`,
      ephemeral: true,
    });

    // Listen for the user's response (redirected URL with token)
    const filter = (message: any) => message.author.id === userId;
    const collector = interaction.channel.createMessageCollector({ filter, time: 60000 });

    collector.on('collect', async (message) => {
      const { content: url } = message;
      // Extract token from the redirected URL
      const token = url.split('?')[1].split('=')[1];
      // Store the token securely (e.g., in a database)
      // ...
      // Inform the user about successful login
      await interaction.editReply({ content: 'You have successfully logged in!', ephemeral: true });
    });

    collector.on('end', (collected) => {
      if (collected.size === 0) {
        interaction.editReply({ content: 'Login timed out. Please try again.', ephemeral: true });
      }
    });
  } catch (error: any) {
    logger.error('Error during login command handling:', error);
    await interaction.reply({ content: 'An error occurred during login. Please try again later.', ephemeral: true });
  }
}