import mongoose from 'mongoose';

interface IUserSchema {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  onboarding: boolean;
}
const UserSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    onBoarding: { type: Boolean, default: false, required: true },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IUserSchema>('User', UserSchema, 'users');
