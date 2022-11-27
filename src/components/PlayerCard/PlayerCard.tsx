import Image from 'next/image';
import { Player } from '@/typesPlayer';
import { Rarity } from '@/typesRarity';
import { Card } from '@/typesCard';
import { useEffect, useState } from 'react';
import { palette } from '@/styles/palette';

type PropsType = Card & { revealed?: boolean };

export function PlayerCard({ player, rarity, season, revealed = false }: PropsType) {
  const [isRevealed, setIsRevealed] = useState(revealed);
  const rarityColors: Record<string, Record<'bgColor' | 'text' | 'bgImg' | 'shadow', string>> = {
    unique: {
      bgColor: 'border-unique',
      text: 'text-unique',
      bgImg: 'bg-unique-card-svg',
      shadow: palette.unique,
    },
    super_rare: {
      bgColor: 'border-super_rare',
      text: 'text-super_rare',
      bgImg: 'bg-super_rare-card-svg',
      shadow: palette.super_rare,
    },
    rare: {
      bgColor: 'border-rare',
      text: 'text-rare',
      bgImg: 'bg-rare-card-svg',
      shadow: palette.rare,
    },
    limited: {
      bgColor: 'border-limited',
      text: 'text-limited',
      bgImg: 'bg-limited-card-svg',
      shadow: palette.limited,
    },
    common: {
      bgColor: 'border-common',
      text: 'text-common',
      bgImg: 'bg-common-card-svg',
      shadow: palette.common,
    },
  };

  useEffect(() => {
    if (!isRevealed && revealed !== isRevealed) setIsRevealed(revealed);
  }, [isRevealed, revealed]);

  return (
    <div
      className={`${
        !isRevealed ? `hover:shadow-3xl` : ''
      } w-[312px] h-[437px] rounded-3xl overflow-hidden group transition-shadow duration-300`}
      style={{ color: rarityColors[rarity].shadow }}
      onClick={() => setIsRevealed(true)}
    >
      <div
        className={`${
          isRevealed ? 'rotate-y-180' : 'cursor-pointer'
        } rounded-3xl perspective relative preserve-3d w-full h-full transition-transform duration-700`}
      >
        <div className="absolute inset-0 backface-hidden">
          <Image
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
            src="https://sorare.com/assets/common-reward.0dcbd382.png"
            alt={`${player.firstName} ${player.lastName}`}
            className="!relative object-cover object-top rounded-3xl"
          />
        </div>
        <div
          className={`absolute rounded-3xl w-full h-full ${rarityColors[rarity].bgImg} ${rarityColors[rarity].bgColor} border-4 before:bg-player-card before:w-full before:h-[100%] before:absolute before:rounded-3xl  before:inset-0 before:z-10 p-3 backface-hidden rotate-y-180`}
        >
          <Image
            width={40}
            height={40}
            alt={player.activeClub?.name}
            src={player.activeClub?.pictureUrl}
            className="absolute right-3 top-3"
          />
          <Image
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            src={player?.pictureUrl}
            alt={`${player.firstName} ${player.lastName}`}
            className="!relative object-cover object-top"
          />
          <div className="absolute bottom-3 z-20 left-[50%] translate-x-[-50%] w-[100%] px-3">
            <span className="text-center">
              <p className="text-white">{player.firstName}</p>
              <p className="text-4xl text-white">{player.lastName}</p>
              <p className="text-sm text-gray-400">{player.position}</p>
            </span>
            <span className="flex justify-between ">
              <p className="text-gray-400">{season.name}</p>
              <p className={rarityColors[rarity].text}>{rarity}</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
