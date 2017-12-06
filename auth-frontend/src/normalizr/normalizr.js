import { schema, normalize } from "normalizr";

const comment = new schema.Entity("comments");
const post = new schema.Entity("posts");
const user = new schema.Entity("users", { posts: [post], comments: [comment] });
comment.define({ users: [user], posts: [post] });
post.define({ users: [user], comments: [comment] });
user.define({ comments: [comment], posts: [post] });
const mySchema = { users: [user], posts: [post], comments: [comment] };

export const dataNormalizr = payload => normalize(payload, mySchema);

export default { dataNormalizr };
