import axios from 'axios';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import logger from '../utils/logger';
import { ShopItem } from '../models/shop';

const VALORANT_API_KEY = process.env.VALORANT_API_KEY || ''; // Get the API key from the environment variable
const VALORANT_API_BASE_URL = 'https://valorant-api.com/v1'; // Base URL for the Valorant API

// Create a rate limiter instance with a memory store and limits
const rateLimiter = new RateLimiterMemory({
  points: 5, // Allow 5 requests per second
  duration: 1, // Per second
});

/
  Fetches the current daily shop items for a given user.
 
  @param userId - The Discord user ID.
  @returns A Promise containing the shop data or an error.
 /
export async function getDailyShop(userId: string): Promise<ShopItem[] | Error> {
  try {
    // Authenticate with the Valorant API using the user's access token
    // (Replace this with your actual authentication logic)
    const accessToken = await getAccessToken(userId);
    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    // Check for API rate limits
    const rateLimitResult = await rateLimiter.consume(userId);
    if (!rateLimitResult) {
      logger.warn(`Rate limit exceeded for user ${userId}.`);
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    // Construct the API request URL
    const url = `${VALORANT_API_BASE_URL}/content/v1/storefront/v2/storefront/`;

    // Make the API request using Axios
    const response = await axios.get(url, {
      headers: {
        'X-Riot-Token': accessToken,
      },
    });

    // Parse the API response and extract the daily shop items
    const shopData = response.data.Entitlements; // Adjust based on the actual API response structure

    // Map the data to a list of ShopItem objects
    return shopData.map((item: any) => ({
      name: item.DisplayName, // Adjust based on the API response structure
      price: item.Cost, // Adjust based on the API response structure
      imageUrl: item.Image, // Adjust based on the API response structure
      description: item.Description, // Adjust based on the API response structure
    }));
  } catch (error: any) {
    logger.error('Error fetching daily shop data:', error);
    throw new Error('An error occurred while fetching the daily shop. Please try again later.');
  }
}

/
  Fetches historical shop items for a given user.
 
  @param userId - The Discord user ID.
  @returns A Promise containing the historical shop data or an error.
 /
export async function getShopHistory(userId: string): Promise<ShopItem[] | Error> {
  try {
    // Authenticate with the Valorant API using the user's access token
    // (Replace this with your actual authentication logic)
    const accessToken = await getAccessToken(userId);
    if (!accessToken) {
      throw new Error('Access token not found.');
    }

    // Check for API rate limits
    const rateLimitResult = await rateLimiter.consume(userId);
    if (!rateLimitResult) {
      logger.warn(`Rate limit exceeded for user ${userId}.`);
      throw new Error('Rate limit exceeded. Please try again later.');
    }

    // Construct the API request URL
    const url = `${VALORANT_API_BASE_URL}/content/v1/storefront/v2/storefront/`;

    // Make the API request using Axios
    const response = await axios.get(url, {
      headers: {
        'X-Riot-Token': accessToken,
      },
    });

    // Parse the API response and extract the historical shop items
    const shopData = response.data.Entitlements; // Adjust based on the actual API response structure

    // Map the data to a list of ShopItem objects
    return shopData.map((item: any) => ({
      name: item.DisplayName, // Adjust based on the API response structure
      price: item.Cost, // Adjust based on the API response structure
      imageUrl: item.Image, // Adjust based on the API response structure
      description: item.Description, // Adjust based on the API response structure
    }));
  } catch (error: any) {
    logger.error('Error fetching shop history data:', error);
    throw new Error('An error occurred while fetching the shop history. Please try again later.');
  }
}

/
  Placeholder function to get the user's access token.
  Replace this with your actual authentication logic.
 
  @param userId - The Discord user ID.
  @returns A Promise containing the user's access token or null if not found.
 /
async function getAccessToken(userId: string): Promise<string | null> {
  // Implement your authentication logic here
  // This is just a placeholder. Replace with your actual logic
  return null;
}