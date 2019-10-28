import { UserModel } from './user.model';

export class TransactionModel {
  id: number;
  timestamp: number;
  value: number;
  destination_user: UserModel;
  success: boolean;
  status: string;
}
