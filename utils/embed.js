import { MessageEmbed } from 'discord.js';
import { ShopItem } from '../models/shop';

export function createShopEmbed(shopItems: ShopItem[]): MessageEmbed {
  const embed = new MessageEmbed()
    .setTitle('Valorant Daily Shop')
    .setColor('#0072ff')
    .setTimestamp();

  if (shopItems.length === 0) {
    embed.setDescription('The daily shop is currently empty.');
    return embed;
  }

  const shopItemFields = shopItems.map((item) => ({
    name: item.name,
    value: `Price: ${item.price}\nDescription: ${item.description}`,
    inline: true,
  }));

  embed.fields = shopItemFields;
  return embed;
}

export function createShopHistoryEmbed(shopHistory: ShopItem[][]): MessageEmbed {
  const embed = new MessageEmbed()
    .setTitle('Valorant Daily Shop History')
    .setColor('#0072ff')
    .setTimestamp();

  if (shopHistory.length === 0) {
    embed.setDescription('No shop history available.');
    return embed;
  }

  const historyFields = shopHistory.map((dayShopItems, index) => ({
    name: `Day ${index + 1}`,
    value: dayShopItems.length === 0
      ? 'No items available for this day.'
      : dayShopItems.map((item) => `- ${item.name}`).join('\n'),
    inline: true,
  }));

  embed.fields = historyFields;
  return embed;
}

export function createSettingsEmbed(userSettings: any): MessageEmbed {
  const embed = new MessageEmbed()
    .setTitle('Valorant Daily Shop Settings')
    .setColor('#0072ff')
    .setTimestamp();

  embed.addFields(
    { name: 'Notification Frequency', value: userSettings.notificationFrequency, inline: true },
    { name: 'Shop Update Reminders', value: userSettings.shopUpdateReminders ? 'Enabled' : 'Disabled', inline: true },
  );

  return embed;
}