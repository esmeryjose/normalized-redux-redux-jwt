import { schema, normalize } from "normalizr";

const comment = new schema.Entity("comments");
const post = new schema.Entity("posts");
const user = new schema.Entity("users", { posts: [post], comments: [comment] });

const mySchema = [user];

export const dataNormalizr = payload => normalize(payload, mySchema);
