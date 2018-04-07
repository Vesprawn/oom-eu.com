import { Character } from './character';

export class GuildApplication {
  id: number
  username: string
  type: string
  birthDate: string
  location: string
  referalCode: string
  joinReason: string
  valueToOOM: string
  howFound: string
  guildHistory: string
  questionsOOM: string
  about: string
  character: Character
  status: string
  applied: string
  updated: string
  updatedBy: string
}