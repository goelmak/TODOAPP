import { model, Schema } from "mongoose";

interface ITodo {
  id: string;
  text: string;
  isComplete: boolean;
}
const schema = new Schema<ITodo>({
  id: { type: String, required: true },
  text: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
});
const Todo = model<ITodo>("todo", schema);

export { Todo, ITodo };
