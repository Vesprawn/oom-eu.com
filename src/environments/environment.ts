// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  restAPI: 'http://localhost:1337',
  ClassIcon: {
    Druid: 'classicon_druid.jpg',
    DeathKnight: 'classicon_deathknight.jpg',
    DemonHunter: 'classicon_demonhunter.jpg',
    Hunter: 'classicon_hunter.jpg',
    Mage: 'classicon_mage.jpg',
    Monk: 'classicon_monk.jpg',
    Paladin: 'classicon_paladin.jpg',
    Priest: 'classicon_priest.jpg',
    Rogue: 'classicon_rogue.jpg',
    Shaman: 'classicon_shaman.jpg',
    Warlock: 'classicon_warlock.jpg',
    Warrior: 'classicon_warrior.jpg'
  },
  Ranks: [
    {
      id: 0,
      name: 'Guild Master'
    },
    {
      id: 1,
      name: 'Officer'
    },
    {
      id: 2,
      name: 'Main Tank'
    },
    {
      id: 3,
      name: 'Raider'
    },
    {
      id: 4,
      name: 'Trial Raider'
    },
    {
      id: 5,
      name: 'Member'
    },
    {
      id: 6,
      name: 'Friend'
    },
    {
      id: 7,
      name: 'Trialist'
    },
    {
      id: 8,
      name: 'Inactive'
    },
    {
      id: 9,
      name: 'Slacker'
    }
  ]
};
