import { ratingEnum } from '~/src/utils/constant'

export const games = [
  {
    id: 1,
    title: 'Dork Souls',
    genre: 'die and retry',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    date: new Date(Date.now()).toUTCString()
  },
  {
    id: 2,
    title: 'Blou de Bhorne',
    genre: 'furry land',
    description: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.',
    date: new Date(Date.now()).toUTCString()
  }
]

export const reviews = [
  {
    id: 1,
    gameId: 1,
    comment: '10/10 would die again',
    rating: ratingEnum.bad,
    author: 'bla',
    date: new Date(Date.now()).toUTCString()
  },
  {
    id: 2,
    gameId: 1,
    comment: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique s',
    rating: ratingEnum.awesome,
    author: 'bli',
    date: new Date(Date.now()).toUTCString()
  },
  {
    id: 3,
    gameId: 1,
    comment: 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. ',
    rating: ratingEnum.good,
    author: 'blu',
    date: new Date(Date.now()).toUTCString()
  },
  {
    id: 4,
    gameId: 2,
    comment: 'Came for the werewolf and stayed for the eldritch truth',
    rating: ratingEnum.awesome,
    author: 'blo',
    date: new Date(Date.now()).toUTCString()
  },
  {
    id: 5,
    gameId: 2,
    comment: 'These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided.',
    rating: ratingEnum.isOkay,
    author: 'ble',
    date: new Date(Date.now()).toUTCString()
  }
]
