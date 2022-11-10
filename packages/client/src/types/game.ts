import { Team } from './leaders';

export type Dictionary = {
  name: string;
  words: number;
  level: 'easy' | 'medium' | 'hard',
    url: JSON
}

export type GameSettings = {
  activeTeams: Team[],
  playedTeams: Team[],
  roundDuration: number,
  wordsToWin: number,
  lastWordForAll: boolean,
  dictionary?: Dictionary | null
}
