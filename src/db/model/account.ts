import { Model, Schema, model } from 'mongoose';
import collections from '../collections';
import { IAccount } from '../../data';

interface IAccountMethods {
  sampleMethod(): void;
}

interface IAccountModel extends Model<IAccount, {}, IAccountMethods> {
  sampleStaticMethod(): void;
}

const accountSchema = new Schema<IAccount, IAccountModel, IAccountMethods>({
  username: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  location: Schema.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
  },
  sex: String,
  phone: {
    type: String,
    required: true,
    index: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: String
});

// Statics
accountSchema.static('sampleMethod', function () {
  console.log("sampleMethod");
});

// Methods
accountSchema.method('sampleStaticMethod', function () {
  console.log("sampleStaticMethod");
});

export const Account = model<IAccount, IAccountModel>('Account', accountSchema, collections.accounts);

export default Account;
