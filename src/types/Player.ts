import { Club } from '@/types/Club';

export type Player = {
  position: string;
  lastName: string;
  firstName: string;
  pictureUrl: string;
  activeClub: Club;
};
