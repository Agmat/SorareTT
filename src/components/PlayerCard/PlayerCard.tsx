import Image from 'next/image';
import { Player } from '@/typesPlayer';
import { Rarity } from '@/typesRarity';
import { Card } from '@/typesCard';

export function PlayerCard({ player, rarity, season }: Card) {
  const rarityColors: Record<string, Record<'bgColor' | 'text' | 'bgImg', string>> = {
    unique: {
      bgColor: 'border-unique',
      text: 'text-unique',
      bgImg: 'bg-unique-card-svg',
    },
    super_rare: {
      bgColor: 'border-super_rare',
      text: 'text-super_rare',
      bgImg: 'bg-super_rare-card-svg',
    },
    rare: {
      bgColor: 'border-rare',
      text: 'text-rare',
      bgImg: 'bg-rare-card-svg',
    },
    limited: {
      bgColor: 'border-limited',
      text: 'text-limited',
      bgImg: 'bg-limited-card-svg',
    },
    common: {
      bgColor: 'border-common',
      text: 'text-common',
      bgImg: 'bg-common-card-svg',
    },
  };

  return (
    <div
      className={`w-[312px] h-[437px] relative rounded-2xl ${rarityColors[rarity].bgImg} ${rarityColors[rarity].bgColor} border-4 before:bg-player-card before:w-[100%] before:h-[100%] before:absolute before:rounded-2xl  before:inset-0 before:z-10 p-3 overflow-hidden`}
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
        src={player.pictureUrl}
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
  );
}
