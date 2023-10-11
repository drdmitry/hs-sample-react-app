import { useState } from "react";
import Head from "next/head";

import type { MatchType } from "~/interfaces";
import { matchDataMock } from "~/constants/match";
import { MatchCard } from "~/components";

export default function Home() {
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (match: MatchType) => {
    setActive(match.id);
  };

  return (
    <>
      <Head>
        <title>HoneySales App</title>
        <meta name="description" content="honeysales app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-start bg-[#FBFBFB]">
        <div className="container flex flex-col gap-1 px-4 py-4">
          {[
            matchDataMock,
            matchDataMock,
            matchDataMock,
            matchDataMock,
            matchDataMock,
          ].map((match, index) => (
            <MatchCard
              key={`${match.id}-${index}`}
              item={{...match, id: `${index}`, status: index === 0 ? 'processed' : 'pending'}}
              active={active === `${index}`}
              onClick={handleClick}
            />
          ))}
        </div>
      </main>
    </>
  );
}
