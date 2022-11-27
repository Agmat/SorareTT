import Head from 'next/head';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';
import client from '@/graphql/apollo-client';
import { Card } from '@/types/Card';
import { PlayerCard } from '@/componentsPlayerCard/PlayerCard';
import { useState } from 'react';
import Link from 'next/link';

type PropsType = {
  cards: Card[];
};

export default function Cards({ cards }: PropsType) {
  const [cardsRevealed, setCardsRevealed] = useState(false);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-x-hidden p-6">
      <span className="max-h-full flex flex-col gap-12 text-center">
        {cards.length === 0 ? (
          <span>
            <p className="text-grey-100 text-xl mb-2">
              No cards were found with the provided slug, try using this one:
            </p>
            <Link
              href={`/cards/${encodeURIComponent(
                'lionel-andres-messi-cuccittini-2022-limited-44'
              )}`}
              className="text-grey-100 text-xl font-bold hover:text-limited transition-colors"
            >
              lionel-andres-messi-cuccittini-2022-limited-44
            </Link>
          </span>
        ) : (
          <>
            <span>
              <button
                onClick={() => setCardsRevealed(true)}
                className="shadow-lg py-3 px-4 bg-grey-200 text-grey-100 rounded-xl hover:text-indigo-500 hover:opacity-75 transition-all"
              >{`Reveal${cards.length > 1 ? ' my cards' : ''}`}</button>
            </span>
            <div className="flex justify-center gap-6 flex-wrap">
              {cards.map((card, index) => (
                <PlayerCard {...card} key={index} revealed={cardsRevealed} />
              ))}
            </div>
          </>
        )}
      </span>
    </div>
  );
}

export const getServerSideProps = async ({ params: { slug } }: { params: { slug: string } }) => {
  const slugs = slug?.split(',');

  const { data } = await client.query({
    query: gql`
      query cards($slugs: [String!]) {
        cards(slugs: $slugs) {
          season {
            name
          }
          rarity
          player {
            position
            lastName
            firstName
            pictureUrl
            activeClub {
              name
              pictureUrl
            }
          }
        }
      }
    `,
    variables: { slugs },
  });

  return {
    props: {
      cards: data.cards,
    },
  };
};
