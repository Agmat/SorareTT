import Head from 'next/head';
import Image from 'next/image';
import { gql, useQuery } from '@apollo/client';
import client from '../../src/app/apollo-client';
import { Card } from '@/types/Card';
import { PlayerCard } from '@/componentsPlayerCard/PlayerCard';
import { useState } from 'react';

type PropsType = {
  cards: Card[];
};

const testString =
  'marco-verratti-2021-unique-1,lionel-andres-messi-cuccittini-2022-limited-44,hugo-lloris-2022-common-1437d069-595c-4378-a423-4b4af2aee2bb,aurelien-tchouameni-2022-rare-18';

export default function Cards({ cards }: PropsType) {
  const [cardsRevealed, setCardsRevealed] = useState(false);

  return (
    <div className="relative flex justify-center items-center w-screen h-screen overflow-x-hidden p-6">
      <span className="max-h-full flex flex-col gap-12">
        <span className="text-center">
          <button
            onClick={() => setCardsRevealed(true)}
            className="shadow-lg py-3 px-4 bg-test text-grey rounded-xl hover:text-indigo-500 hover:opacity-75 transition-all"
          >{`Reveal${cards.length > 1 ? ' my cards' : ''}`}</button>
        </span>
        <div className="flex justify-center gap-6 flex-wrap">
          {cards.map((card, index) => (
            <PlayerCard {...card} key={index} revealed={cardsRevealed} />
          ))}
        </div>
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
