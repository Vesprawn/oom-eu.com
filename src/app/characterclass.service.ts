import { Injectable } from '@angular/core';

@Injectable()
export class CharacterclassService {

  constructor() { }
  

    getClasses () {
      return [
        {
          name: 'Druid',
          selected: false,
          specs: [
            {
              name: 'Balance',
              selected: false
            },
            {
              name: 'Feral',
              selected: false
            },
            {
              name: 'Gaurdian',
              selected: false
            },
            {
              name: 'Resto',
              selected: false
            }
          ]
        },
        {
          name: 'Death Knight',
          selected: false,
          specs: [
            {
              name: 'Blood',
              selected: false
            },
            {
              name: 'Frost',
              selected: false
            },
            {
              name: 'Unholy',
              selected: false
            }
          ]
        },
        {
          name: 'Demon Hunter',
          selected: false,
          specs: [
            {
              name: 'Havoc',
              selected: false
            },
            {
              name: 'Vengence',
              selected: false
            }
          ]
        },
        {
          name: 'Hunter',
          selected: false,
          specs: [
            {
              name: 'Beastmaster',
              selected: false
            },
            {
              name: 'Marksman',
              selected: false
            },
            {
              name: 'Survival',
              selected: false
            }
          ]
        },
        {
          name: 'Mage',
          selected: false,
          specs: [
            {
              name: 'Arcane',
              selected: false
            },
            {
              name: 'Fire',
              selected: false
            },
            {
              name: 'Frost',
              selected: false
            }
          ]
        },
        {
          name: 'Monk',
          selected: false,
          specs: [
            {
              name: 'Brewmaster',
              selected: false
            },
            {
              name: 'Mistweaver',
              selected: false
            },
            {
              name: 'Windwalker',
              selected: false
            }
          ]
        },
        {
          name: 'Palidin',
          selected: false,
          specs: [
            {
              name: 'Holy',
              selected: false
            },
            {
              name: 'Protection',
              selected: false
            },
            {
              name: 'Retribution',
              selected: false
            }
          ]
        },
        {
          name: 'Priest',
          selected: false,
          specs: [
            {
              name: 'Dicipline',
              selected: false
            },
            {
              name: 'Holy',
              selected: false
            },
            {
              name: 'Shadow',
              selected: false
            }
          ]
        },
        {
          name: 'Rogue',
          selected: false,
          specs: [
            {
              name: 'Assassination',
              selected: false
            },
            {
              name: 'Outlaw',
              selected: false
            },
            {
              name: 'Subtlety',
              selected: false
            }
          ]
        },
        {
          name: 'Shaman',
          selected: false,
          specs: [
            {
              name: 'Elemental',
              selected: false
            },
            {
              name: 'Enhancement',
              selected: false
            },
            {
              name: 'Resto',
              selected: false
            }
          ]
        },
        {
          name: 'Warlock',
          selected: false,
          specs: [
            {
              name: 'Affliction',
              selected: false
            },
            {
              name: 'Demonology',
              selected: false
            },
            {
              name: 'Destruction',
              selected: false
            }
          ]
        },
        {
          name: 'Warrior',
          selected: false,
          specs: [
            {
              name: 'Arms',
              selected: false
            },
            {
              name: 'Fury',
              selected: false
            },
            {
              name: 'Protection',
              selected: false
            }
          ]
        }
      ]
    }
  // getClasses () {
    // return [
    //   {
    //     name: 'Druid',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Balance',
    //         selected: false
    //       },
    //       {
    //         name: 'Feral',
    //         selected: false
    //       },
    //       {
    //         name: 'Gaurdian',
    //         selected: false
    //       },
    //       {
    //         name: 'Resto',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Death Knight',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Blood',
    //         selected: false
    //       },
    //       {
    //         name: 'Frost',
    //         selected: false
    //       },
    //       {
    //         name: 'Unholy',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Demon Hunter',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Havoc',
    //         selected: false
    //       },
    //       {
    //         name: 'Vengence',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Hunter',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Beastmaster',
    //         selected: false
    //       },
    //       {
    //         name: 'Marksman',
    //         selected: false
    //       },
    //       {
    //         name: 'Survival',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Mage',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Arcane',
    //         selected: false
    //       },
    //       {
    //         name: 'Fire',
    //         selected: false
    //       },
    //       {
    //         name: 'Frost',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Monk',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Brewmaster',
    //         selected: false
    //       },
    //       {
    //         name: 'Mistweaver',
    //         selected: false
    //       },
    //       {
    //         name: 'Windwalker',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Palidin',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Holy',
    //         selected: false
    //       },
    //       {
    //         name: 'Protection',
    //         selected: false
    //       },
    //       {
    //         name: 'Retribution',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Priest',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Dicipline',
    //         selected: false
    //       },
    //       {
    //         name: 'Holy',
    //         selected: false
    //       },
    //       {
    //         name: 'Shadow',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Rogue',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Assassination',
    //         selected: false
    //       },
    //       {
    //         name: 'Outlaw',
    //         selected: false
    //       },
    //       {
    //         name: 'Subtlety',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Shaman',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Elemental',
    //         selected: false
    //       },
    //       {
    //         name: 'Enhancement',
    //         selected: false
    //       },
    //       {
    //         name: 'Resto',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Warlock',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Affliction',
    //         selected: false
    //       },
    //       {
    //         name: 'Demonology',
    //         selected: false
    //       },
    //       {
    //         name: 'Destruction',
    //         selected: false
    //       }
    //     ]
    //   },
    //   {
    //     name: 'Warrior',
    //     selected: false,
    //     specs: [
    //       {
    //         name: 'Arms',
    //         selected: false
    //       },
    //       {
    //         name: 'Fury',
    //         selected: false
    //       },
    //       {
    //         name: 'Protection',
    //         selected: false
    //       }
    //     ]
    //   }
    // ]
  // }
}
