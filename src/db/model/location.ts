import { Model, Schema, model } from 'mongoose';
import collections from '../collections';
import { ILocation } from '../../data';

interface ILocationMethods {
  sampleMethod(): void;
}

interface ILocationModel extends Model<ILocation, {}, ILocationMethods> {
  sampleStaticMethod(): void;
}

const locationSchema = new Schema<ILocation, ILocationModel, ILocationMethods>({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  }
});

// Statics
locationSchema.static('sampleMethod', function () {
  console.log("sampleMethod");
});

// Methods
locationSchema.method('sampleStaticMethod', function () {
  console.log("sampleStaticMethod");
});

export const Location = model<ILocation,ILocationModel>('Location', locationSchema, collections.locations);

export default Location;
