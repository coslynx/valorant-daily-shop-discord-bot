import { SlashCommandBuilder } from 'discord.js';
import { handleLoginCommand } from '../authentication/discord';

export const loginCommand = new SlashCommandBuilder()
  .setName('login')
  .setDescription('Login to your Riot Games account to access the daily shop.');

export async function handleLogin(interaction: any) {
  try {
    await handleLoginCommand(interaction);
  } catch (error: any) {
    console.error('Error during login command:', error);
    await interaction.reply({ content: 'An error occurred during login. Please try again later.', ephemeral: true });
  }
}