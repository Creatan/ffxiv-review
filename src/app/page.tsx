"use client";

import { trpc } from "@/trpc/trpc";

export default function Home() {
  const { data, isLoading, isFetching } = trpc.greeting.useQuery();
  if (isLoading || isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Data from TRPC: {data}</p>
    </main>
  );
}
