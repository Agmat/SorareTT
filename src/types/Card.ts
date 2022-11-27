import { Player } from './Player';
import { Rarity } from '@/typesRarity';
import { Season } from '@/typesSeason';

export interface Card {
  player: Player;
  rarity: Rarity;
  season: Season;
}
