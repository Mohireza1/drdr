import sql from "@/db/client";
import type { Comment } from "@/types";

export async function getComments() {
  const comments = await sql<Comment[]>`
  select * from comments
  order by created_at desc
  limit 6;
  `;

  console.log(comments);
  return comments;
}
