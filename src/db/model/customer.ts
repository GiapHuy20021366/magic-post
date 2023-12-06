import { Model, Schema, model } from 'mongoose';
import collections from '../collections';
import { ICustomer } from '../../data';

interface ICustomerMethods {
  sampleMethod(): void;
}

interface ICustomerModel extends Model<ICustomer, {}, ICustomerMethods> {
  sampleStaticMethod(): void;
}

const customerSchema = new Schema<ICustomer, ICustomerModel, ICustomerMethods>({
  name: {
    type: String,
    required: true,
  },
  birth: String,
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
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
  }
});

// Statics
customerSchema.static('sampleMethod', function () {
  console.log("sampleMethod");
});

// Methods
customerSchema.method('sampleStaticMethod', function () {
  console.log("sampleStaticMethod");
});

export const Customer = model<ICustomer,ICustomerModel>('Customer', customerSchema, collections.customers);

export default Customer;
