import { Model, Schema, model } from 'mongoose';
import collections from '../collections';
import { ITransaction } from '../../data';

interface ITransactionMethods {
  sampleMethod(): void;
}

interface ITransactionModel extends Model<ITransaction, {}, ITransactionMethods> {
  sampleStaticMethod(): void;
}

const transactionSchema = new Schema<ITransaction, ITransactionModel, ITransactionMethods>({
    order: {
        type: Schema.ObjectId,
        required: true,
    }, 
    transactionType: {
        type: String,
        required: true,
    }, 
    postLocation: {
        type: Schema.ObjectId,
    },
    getLocation: {
        type:Schema.ObjectId,
    },
    postStaff: {
        type: Schema.ObjectId,
    },
    getStaff: {
        type:Schema.ObjectId,
    },
    shipper: {
        type:Schema.ObjectId,
    },
    status: {
        type: String,
        required: true,
    },
    note: String,
    refuseStatus: {
        type: Boolean,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

// Statics
transactionSchema.static('sampleMethod', function () {
  console.log("sampleMethod");
});

// Methods
transactionSchema.method('sampleStaticMethod', function () {
  console.log("sampleStaticMethod");
});

export const Transaction = model<ITransaction,ITransactionModel>('Transaction', transactionSchema, collections.transactions);

export default Transaction;
