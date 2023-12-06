import { Model, Schema, model } from 'mongoose';
import collections from '../collections';
import { IOrder } from '../../data';

interface IOrderMethods {
  sampleMethod(): void;
}

interface IOrderModel extends Model<IOrder, {}, IOrderMethods> {
  sampleStaticMethod(): void;
}

const orderSchema = new Schema<IOrder, IOrderModel, IOrderMethods>({
  sender: {
    type: Schema.ObjectId,
    required: true,
  },
  receiver: {
    type: Schema.ObjectId,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  teller: {
    type: Schema.ObjectId,
    required: true,
  },
  currentLocation: {
    type: Schema.ObjectId,
    required: true,
  }
});

// Statics
orderSchema.static('sampleMethod', function () {
  console.log("sampleMethod");
});

// Methods
orderSchema.method('sampleStaticMethod', function () {
  console.log("sampleStaticMethod");
});

export const Order = model<IOrder,IOrderModel>('Order', orderSchema, collections.orders);

export default Order;
