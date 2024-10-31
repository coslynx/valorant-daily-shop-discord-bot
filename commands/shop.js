import { SlashCommandBuilder } from 'discord.js';
import { getDailyShop } from '../services/valorant';
import { createShopEmbed } from '../utils/embed';
import logger from '../utils/logger';

export const shopCommand = new SlashCommandBuilder()
  .setName('shop')
  .setDescription('View the current daily shop items.');

export async function handleShopCommand(interaction: any) {
  try {
    const { user: { id: userId } } = interaction;

    // Fetch the daily shop data from the Valorant API
    const shopData = await getDailyShop(userId);

    // Create a Discord embed with the shop information
    const embed = createShopEmbed(shopData);

    // Send the embed to the user
    await interaction.reply({ embeds: [embed] });
  } catch (error: any) {
    logger.error('Error during shop command handling:', error);
    await interaction.reply({ content: 'An error occurred while fetching the shop. Please try again later.', ephemeral: true });
  }
}