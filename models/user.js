import { Document, Model, Schema, Types } from 'mongoose';

export interface UserSettings {
  notificationFrequency: string;
  shopUpdateReminders: boolean;
  // Add other settings here as needed
}

export interface UserDocument extends UserSettings, Document {
  userId: string;
  accessToken: string;
  // Add other properties here as needed
}

export interface UserInput {
  userId: string;
  accessToken: string;
  settings?: UserSettings;
}

export const userSchema = new Schema<UserDocument>({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  settings: {
    type: Object,
    default: {
      notificationFrequency: 'daily',
      shopUpdateReminders: false,
    },
  },
  // Add other properties here as needed
});

export const User: Model<UserDocument> =
  mongoose.model<UserDocument>('User', userSchema);