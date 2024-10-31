import logger from './logger';

export default function errorHandler(error: Error, req: any, res: any, next: any) {
  logger.error(`Error encountered: ${error.message}`, error);

  // Determine the appropriate response based on the environment
  if (process.env.NODE_ENV === 'development') {
    res.status(500).json({ error: error.message, stack: error.stack });
  } else {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}