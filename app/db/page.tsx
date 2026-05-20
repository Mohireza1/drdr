import { Suspense } from "react";
import { getComments } from "../home/lib/queries";

// Separate component that fetches data
async function CommentsList() {
  const data = await getComments(); // Await happens inside Suspense boundary

  return (
    <>
      {data.map((d) => (
        <p key={d.id}>
          {d.name} | {d.comment}
        </p>
      ))}
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<p>LOADING!</p>}>
      <CommentsList />
    </Suspense>
  );
}
