import postgres from "postgres";

console.log(process.env.DB_URL!);
const sql = postgres(process.env.DB_URL!);

interface Comment {
  id: string;
  name: string;
  comment: string;
  doc_name: string;
  score: number;
  created_at: Date;
}

export default async function db(): Promise<Comment[]> {
  await sql`
create extension if not exists "pgcrypto";
`;

  await sql`
DELETE from comments;
`;

  await sql`
create table if not exists comments (
    id UUID primary key default gen_random_uuid(),
    name text not null,
    comment text not null,
    doc_name text not null,
    score numeric not null check (score between 1 and 5),
    created_at date not null default current_date
);
`;

  await sql`
insert into comments(name, comment, doc_name, score) values (
    'محمدرضا حیدری', 'وای دکتر خیلی عالی بودن!!!', 'دکتر هلاکویی', '3.2'
);
`;

  await new Promise((res) => setTimeout(res, 2000));

  const comments = await sql<Comment[]>`select * from comments`;

  console.log(comments);

  return comments;
}
