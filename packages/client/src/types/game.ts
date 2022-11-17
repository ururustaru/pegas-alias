import { Team } from './leaders';
import { IDictionary } from '../dictionaries';

export type Dictionary = {
  name: string;
  words: number;
  level: 'easy' | 'medium' | 'hard',
  url: string
}

export type GameSettings = {
  activeTeams: {
    name?: string,
    score?: 0
  }[],
  playedTeams: Team[],
  roundDuration: number,
  wordsToWin: number,
  lastWordForAll: boolean,
  dictionary: IDictionary | null
}

export type GameProcess = {
  roundCount: number,
  activeTeamIndex: number,
  activeWordIndex: number,
  roundScore: 0,
  roundWords: {
    word: string,
    wordScore: -1 | 0 | 1
  }[] | null
}
