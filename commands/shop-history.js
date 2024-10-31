import { SlashCommandBuilder } from 'discord.js';
import { getShopHistory } from '../services/valorant';
import { createShopHistoryEmbed } from '../utils/embed';
import logger from '../utils/logger';

export const shopHistoryCommand = new SlashCommandBuilder()
  .setName('shop-history')
  .setDescription('View the history of the daily shop for the past few days.');

export async function handleShopHistoryCommand(interaction: any) {
  try {
    const { user: { id: userId } } = interaction;

    // Fetch the shop history from the Valorant API
    const shopHistory = await getShopHistory(userId);

    // Create a Discord embed with the shop history information
    const embed = createShopHistoryEmbed(shopHistory);

    // Send the embed to the user
    await interaction.reply({ embeds: [embed] });
  } catch (error: any) {
    logger.error('Error during shop history command handling:', error);
    await interaction.reply({ content: 'An error occurred while fetching the shop history. Please try again later.', ephemeral: true });
  }
}