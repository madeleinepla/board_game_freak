# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Game.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('games')

g1 = Game.create!(
  title: 'CATAN',
  tagline: 'Collect and trade resources to build up the island of Catan in this modern classic.',
  year: 1995,
  designer: 'Klaus Teuber',
  artist: 'Volkan Baga, Tanja Donner, Pete Fenlon, Jason Hawkins',
  publisher: 'KOSMOS',
  min_players: 3,
  max_players: 4,
  min_playtime: 60,
  max_playtime: 120,
  age: 10,
  header_img: 'https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg',
  description: 'In CATAN (formerly The Settlers of Catan), players try to be the dominant force 
  on the island of Catan by building settlements, cities, and roads. On each turn 
  dice are rolled to determine what resources the island produces. Players build 
  by spending resources (sheep, wheat, wood, brick and ore) that are depicted by 
  these resource cards; each land type, with the exception of the unproductive 
  desert, produces a specific resource: hills produce brick, forests produce wood, 
  mountains produce ore, fields produce wheat, and pastures produce sheep.

  Setup includes randomly placing large hexagonal tiles (each showing a resource 
  or the desert) in a honeycomb shape and surrounding them with water tiles, some 
  of which contain ports of exchange. Number disks, which will correspond to die 
  rolls (two 6-sided dice are used), are placed on each resource tile. Each player 
  is given two settlements (think: houses) and roads (sticks) which are, in turn, 
  placed on intersections and borders of the resource tiles. Players collect a 
  hand of resource cards based on which hex tiles their last-placed house is 
  adjacent to. A robber pawn is placed on the desert tile.

  A turn consists of possibly playing a development card, rolling the dice, 
  everyone (perhaps) collecting resource cards based on the roll and position of 
  houses (or upgraded cities—think: hotels) unless a 7 is rolled, turning in 
  resource cards (if possible and desired) for improvements, trading cards at a 
  port, and trading resource cards with other players. If a 7 is rolled, the 
  active player moves the robber to a new hex tile and steals resource cards from 
  other players who have built structures adjacent to that tile.

  Points are accumulated by building settlements and cities, having the longest 
  road and the largest army (from some of the development cards), and gathering 
  certain development cards that simply award victory points. When a player has 
  gathered 10 points (some of which may be held in secret), he announces his total 
  and claims the win.

  CATAN has won multiple awards and is one of the most popular games in recent 
  history due to its amazing ability to appeal to experienced gamers as well as 
  those new to the hobby.

  Die Siedler von Catan was originally published by KOSMOS and has gone through 
  multiple editions. It was licensed by Mayfair and has undergone four editions as 
  The Settlers of Catan. In 2015, it was formally renamed CATAN to better 
  represent itself as the core and base game of the CATAN series. It has been 
  re-published in two travel editions, portable edition and compact edition, as a 
  special gallery edition (replaced in 2009 with a family edition), as an 
  anniversary wooden edition, as a deluxe 3D collector\'s edition, in the basic 
  Simply Catan, as a beginner version, and with an entirely new theme in Japan and 
  Asia as Settlers of Catan: Rockman Edition. Numerous spin-offs and expansions 
  have also been made for the game.'
)



g2 = Game.create!(
  title: 'Gloomhaven',
  tagline: 'Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy! ',
  year: 2017,
  designer: 'Isaac Childres',
  artist: 'Alexandr Elichev, Josh T. McDowell, Alvaro Nebot',
  publisher: 'Cephalofair Games',
  min_players: 1,
  max_players: 4,
  min_playtime: 60,
  max_playtime: 120,
  age: 14,
  header_img: 'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__itemrep/img/0IdBRA_G-ZdrNaxI4Z1LPQMZD0I=/fit-in/246x300/filters:strip_icc()/pic2437871.jpg',
  description: 'Gloomhaven is a game of Euro-inspired tactical combat in a 
  persistent world of shifting motives. Players will take on the role of a 
  wandering adventurer with their own special set of skills and their own 
  reasons for traveling to this dark corner of the world. Players must work 
  together out of necessity to clear out menacing dungeons and forgotten ruins. 
  In the process, they will enhance their abilities with experience and loot, 
  discover new locations to explore and plunder, and expand an ever-branching 
  story fueled by the decisions they make.

  This is a game with a persistent and changing world that is ideally played 
  over many game sessions. After a scenario, players will make decisions on what 
  to do, which will determine how the story continues, kind of like a “Choose 
  Your Own Adventure” book. Playing through a scenario is a cooperative affair 
  where players will fight against automated monsters using an innovative card 
  system to determine the order of play and what a player does on their turn.

  Each turn, a player chooses two cards to play out of their hand. The number on 
  the top card determines their initiative for the round. Each card also has a 
  top and bottom power, and when it is a player\'s turn in the initiative order, 
  they determine whether to use the top power of one card and the bottom power 
  of the other, or vice-versa. Players must be careful, though, because over 
  time they will permanently lose cards from their hands. If they take too long 
  to clear a dungeon, they may end up exhausted and be forced to retreat.',
)

g3 = Game.create!(
  title: 'Nemesis',
  tagline: 'Survive an alien-infested spaceship but beware of other players and their agendas.',
  year: 2018,
  designer: 'Adam Kwapiński',
  artist: 'Piotr Foksowicz, Patryk Jędraszek, Ewa Labak, Andrzej Półtoranos',
  publisher: 'Awaken Realms',
  min_players: 1,
  max_players: 5,
  min_playtime: 90,
  max_playtime: 180,
  age: 12,
  header_img: 'https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__itemrep/img/GcRdGHHeKlE4W4TLwcvW3tloDT0=/fit-in/246x300/filters:strip_icc()/pic5073276.jpg',
  description: 'Playing Nemesis will take you into the heart of sci-fi survival 
  horror in all its terror. A soldier fires blindly down a corridor, trying to 
  stop the alien advance. A scientist races to find a solution in his makeshift 
  lab. A traitor steals the last escape pod in the very last moment. Intruders 
  you meet on the ship are not only reacting to the noise you make but also 
  evolve as the time goes by. The longer the game takes, the stronger they 
  become. During the game, you control one of the crew members with a unique set 
  of skills, personal deck of cards, and individual starting equipment. These 
  heroes cover all your basic SF horror needs. For example, the scientist is 
  great with computers and research, but will have a hard time in combat. The 
  soldier, on the other hand...

  Nemesis is a semi-cooperative game in which you and your crewmates must 
  survive on a ship infested with hostile organisms. To win the game, you have 
  to complete one of the two objectives dealt to you at the start of the game 
  and get back to Earth in one piece. You will find many obstacles on your way: 
  swarms of Intruders (the name given to the alien organisms by the ship AI), 
  the poor physical condition of the ship, agendas held by your fellow players, 
  and sometimes just cruel fate.

  The gameplay of Nemesis is designed to be full of climactic moments which, 
  hopefully, you will find rewarding even when your best plans are ruined and 
  your character meets a terrible fate.',
)

g4 = Game.create!(
  title: 'Clue',
  tagline: 'Catch the culprit of a crime by identifying who did it, with what, and where.',
  year: 1949,
  designer: 'Anthony E. Pratt',
  artist: 'Peter Dobbin, René Goscinny, Matt Groening, Rune Johansson',
  publisher: 'Hasbro, John Waddington Ltd.',
  min_players: 2,
  max_players: 6,
  min_playtime: 45,
  max_playtime: 60,
  age: 8,
  header_img: 'https://cf.geekdo-images.com/owlmDA10KegcwPaapY5auw__itemrep/img/l389R4AqZbn89WSROMFpvBb11fo=/fit-in/246x300/filters:strip_icc()/pic5146918.png',
  description: 'The classic detective game! In Clue, players move from room to 
  room in a mansion to solve the mystery of: who done it, with what, and where? 
  Players are dealt character, weapon, and location cards after the top card 
  from each card type is secretly placed in the confidential file in the middle 
  of the board. Players must move to a room and then make a suggestion against 
  a character saying they did it in that room with a specific weapon. The player 
  to the left must show one of any cards mentioned if in that player\'s hand. 
  Through deductive reasoning each player must figure out which character, 
  weapon, and location are in the secret file. To do this, each player must 
  uncover what cards are in other players hands by making more and more 
  suggestions. Once a player knows what cards the other players are holding, 
  they will know what cards are in the secret file, and then make an 
  accusation. If correct, the player wins, but if incorrect, the player must 
  return the cards to the file without revealing them and may no longer make 
  suggestions or accusations. A great game for those who enjoy reasoning and 
  thinking things out.
  Note: There are some early versions of Clue which are labeled as 2-6 players. 
  Recent and current issues of the game state 3-6 players.',
)

g5 = Game.create!(
  title: 'Scythe',
  tagline: 'Five factions vie for dominance in a war-torn, mech-filled, dieselpunk 1920s Europe.',
  year: 2016,
  designer: 'Jamey Stegmaier',
  artist: 'Jakub Rozalski',
  publisher: 'Stonemaier Games',
  min_players: 1,
  max_players: 5,
  min_playtime: 90,
  max_playtime: 115,
  age: 14,
  header_img: 'https://cf.geekdo-images.com/7k_nOxpO9OGIjhLq2BUZdA__itemrep/img/RVh5N-_HcMziJ3M6Q1eLTlj8XIQ=/fit-in/246x300/filters:strip_icc()/pic3163924.jpg',
  description: 'It is a time of unrest in 1920s Europa. The ashes from the first 
  great war still darken the snow. The capitalistic city-state known simply as 
  “The Factory”, which fueled the war with heavily armored mechs, has closed its 
  doors, drawing the attention of several nearby countries. Scythe is an 
  engine-building game set in an alternate-history 1920s period. It is a time of 
  farming and war, broken hearts and rusted gears, innovation and valor. In 
  Scythe, each player represents a character from one of five factions of 
  Eastern Europe who are attempting to earn their fortune and claim their 
  faction\'s stake in the land around the mysterious Factory. Players conquer 
  territory, enlist new recruits, reap resources, gain villagers, build 
  structures, and activate monstrous mechs.
  Each player begins the game with different resources (power, coins, combat 
  acumen, and popularity), a different starting location, and a hidden goal. 
  Starting positions are specially calibrated to contribute to each faction\'s 
  uniqueness and the asymmetrical nature of the game (each faction always starts 
  in the same place). Scythe gives players almost complete control over their 
  fate. Other than each player\'s individual hidden objective card, the only 
  elements of luck or variability are “encounter” cards that players will draw 
  as they interact with the citizens of newly explored lands. Each encounter 
  card provides the player with several options, allowing them to mitigate the 
  luck of the draw through their selection. Combat is also driven by choices, 
  not luck or randomness. Scythe uses a streamlined action-selection mechanism 
  (no rounds or phases) to keep gameplay moving at a brisk pace and reduce 
  downtime between turns. While there is plenty of direct conflict for players 
  who seek it, there is no player elimination. Every part of Scythe has an 
  aspect of engine-building to it. Players can upgrade actions to become more 
  efficient, build structures that improve their position on the map, enlist new 
  recruits to enhance character abilities, activate mechs to deter opponents 
  from invading, and expand their borders to reap greater types and quantities 
  of resources. These engine-building aspects create a sense of momentum and 
  progress throughout the game. The order in which players improve their engine 
  adds to the unique feel of each game, even when playing one faction multiple 
  times.',
)



g6 = Game.create!(
  title: 'Grind House',
  tagline: 'A narrative horror game for 2-6 players where you would be considered lucky if survival only costs an arm and a leg.',
  year: 2020,
  designer: 'Jon Cohn',
  artist: 'Boris Polonsky, Ivan Shavrin',
  publisher: 'Everything Epic Games',
  min_players: 2,
  max_players: 6,
  min_playtime: 20,
  max_playtime: 30,
  age: 15,
  header_img: 'https://cf.geekdo-images.com/vAkfMGXl5TvN_0zpRv7FjA__itemrep/img/1WneuT7ZhqoPynnZwTsvxjEcmn4=/fit-in/246x300/filters:strip_icc()/pic4839345.png',
  description: 'You receive an invitation to take part in a mysterious contest at the “Grind House,” an old mansion that once stood as the largest slaughterhouse in the state. The invitation is signed simply by an individual known as “The Host.” The letter promises you the opportunity to play a game to win a reward greater than you could possibly imagine. You arrive at a decaying mansion on a hill along with five other strangers. A tall, narrow man in a tuxedo opens the huge ominous doors to usher you inside. “Thank you for attending this evening...” The Host says in a deep, ominous voice. “The entertainment will be… to die for!” The Host bursts into a sinister echoing laugh. Behind you, the door slams shut and the sound of a heavy deadbolt clicks into place. You and your fellow guests are trapped at the mercy and whims of The Host. “Shall we play a little game?”

Grind House is a narrative horror game for 2-6 players where you would be considered lucky if survival only costs an arm and a leg. While survival is the ultimate goal, each player has a classic archetype with a secret motive. Some characters like the Doctor may try to keep everyone alive, while the psychopath with surely attempt to split everyone apart. Others, like the Pianist, just want to keep their hands intact.

For those unfortunate souls who do perish in the house, the game is not over. Players may return as ghosts to haunt the remaining survivors as they try to make it through the Grind House unscathed. After exploring all 5 randomized rooms in the house, any survivors left total up their score to determine the winner.',
)

g7 = Game.create!(
  title: 'Paranormal Detectives',
  tagline: 'Deduce the circumstances of the recently-deceased ghost with various occult methods! ',
  year: 2019,
  designer: 'Szymon Maliński, Adrian Orzechowski, Marcin Łączyński',
  artist: 'JocArt, Mateusz Komada, Katarzyna Kosobucka',
  publisher: 'Lucky Duck Games',
  min_players: 2,
  max_players: 6,
  min_playtime: 30,
  max_playtime: 50,
  age: 12,
  header_img: 'https://cf.geekdo-images.com/2eV2FXx4DaSPpNJzG-eung__itemrep/img/8VA_oDjoqvJxpktdbcPbmsZrReA=/fit-in/246x300/filters:strip_icc()/pic4746947.png',
  description: 'You open your eyes to discover the most horrible truth of a lifetime... It has just come to an end and you are a ghost, floating in the air! Terrified, you look at your own body. A group of strange individuals have gathered around your mortal remains, watching it closely with sparks of fascination in their eyes. They want to communicate with you to discover how your life ended. You need to talk to them and reveal the truth so the culprit can be judged!

Paranormal Detectives is a deduction party game. One player takes the role of a Ghost. All other players work as Paranormal Detectives and need to discover how the victim died. Using paranormal abilities they will communicate with the Ghost, asking open questions about the details of the crime. The Ghost answers in a variety of ghostly ways - by arranging a hangman\'s knot, playing chosen tarot cards, creating a word puzzle on a talking board, drawing by holding the hand of a detective and many more!

At the beginning of the game, the Ghost player receives a story card with a full description of the murder. Each card depicts all the details of the case. Each Detective receives asymmetrical, pre-constructed set of interaction cards, player investigation sheet, and a player screen.

On their turn, each Detective asks the Ghost any open question they want and plays a single interaction card. The card implies the way the Ghost may answer the question. There are 9 different interactions total, most of them giving information to all Detectives. Since Detectives may ask any open questions and interaction cards vary, the game allows for lots of creativity for both the Ghost and Paranormal Detectives.

Detectives may try, twice during the game, to guess what has actually happened to the victim stating who was the killer, where did it happen, what was the motive, how was it done and what was the murder weapon. Then the Ghost writes down secretly on this Detective\'s investigation sheet how many of their answers are correct.

The game can end in two ways:
If a Detective gives all correct answers. In this case, they win, together with the Ghost player.
If all Detectives run out of interaction cards. In this case, if no one has guessed everything correctly then, whoever guessed correctly the most information is the sole winner of the game!',
)

g8 = Game.create!(
  title: 'The Fox in the Forest',
  tagline: 'In this trick-taking game for 2, you must win more than your rival—but not too much! ',
  year: 2017,
  designer: 'Joshua Buergel',
  artist: 'Jennifer L. Meyer',
  publisher: 'Foxtrot Games, Renegade Game Studios',
  min_players: 2,
  max_players: 2,
  min_playtime: 30,
  max_playtime: 30,
  age: 10,
  header_img: "https://cf.geekdo-images.com/spcy6nvsfq-hxYgwEpmidQ__itemrep/img/U2Q0x4h3qcRzYSiNuj-HJl8mGLk=/fit-in/246x300/filters:strip_icc()/pic3496085.jpg",
  description: 'The Fox in the Forest is a trick-taking game for two players. Aside from the normal ranked- and suited-cards used to win tricks, fairy characters such as the Fox and the Witch have special abilities that let you change the trump suit, lead even after you lose a trick, and more.

You score points by winning more tricks than your opponent, but don\'t get greedy! Win too many tricks, and you will fall like the villain in so many fairy tales...

',
)

g9 = Game.create!(
  title: 'Gloom',
  tagline: 'Use transparent cards to tell tragic tales of misery and misfortune.',
  year: 2005,
  designer: 'Keith Baker',
  artist: 'Michelle Nephew, J. Scott Reeves, Todd Remick',
  publisher: 'Atlas Games',
  min_players: 2,
  max_players: 4,
  min_playtime: 60,
  max_playtime: 60,
  age: 13,
  header_img: "https://cf.geekdo-images.com/jD7_Ir8gL_9AXC-wjnqjHg__itemrep/img/TrY9FNVXHtplKsxn2pr4xvGCq0w=/fit-in/246x300/filters:strip_icc()/pic2080481.jpg",
  description: 'The world of Gloom is a sad and benighted place. The sky is gray, the tea is cold, and a new tragedy lies around every corner. Debt, disease, heartache, and packs of rabid flesh-eating mice—just when it seems like things can\'t get any worse, they do. But some say that one\'s reward in the afterlife is based on the misery endured in life. If so, there may yet be hope—if not in this world, then in the peace that lies beyond.

In the Gloom card game, you assume control of the fate of an eccentric family of misfits and misanthropes. The goal of the game is sad, but simple: you want your characters to suffer the greatest tragedies possible before passing on to the well-deserved respite of death. You\'ll play horrible mishaps like Pursued by Poodles or Mocked by Midgets on your own characters to lower their Self-Worth scores, while trying to cheer your opponents\' characters with marriages and other happy occasions that pile on positive points. The player with the lowest total Family Value wins.

Printed on transparent plastic cards, Gloom features an innovative design by noted RPG author Keith Baker. Multiple modifier cards can be played on top of the same character card; since the cards are transparent, elements from previously played modifier cards either show through or are obscured by those played above them. You\'ll immediately and easily know the worth of every character, no matter how many modifiers they have. You\'ve got to see (through) this game to believe it!

Each of the three expansions for Gloom adds one more player, thus with all three expansions, this should be playable with seven players.',
)

g10 = Game.create!(
  title: 'King of Tokyo: Dark Edition',
  tagline: 'Fight for dominance in this upgraded pulp edition of a dice-rolling monster battle.',
  year: 2020,
  designer: 'Richard Garfield',
  artist: 'Paul Mafayon',
  publisher: 'IELLO ',
  min_players: 2,
  max_players: 6,
  min_playtime: 30,
  max_playtime: 30,
  age: 8,
  header_img: "https://cf.geekdo-images.com/mTn-dbIPgdf-_l668UGi_g__itemrep/img/vXr_9xXKiAq8YPpnnQ2ehcbYBLk=/fit-in/246x300/filters:strip_icc()/pic5031257.jpg",
  description: 'King of Tokyo: Dark Edition is a collector\'s edition [limited edition: 100 000 copies in 12 languages] of King of Tokyo, with the fight taking place in an alternative and darker world in which the struggle for control of Tokyo has never been so fierce...and wicked!

This edition includes deluxe components (such as an embossed box and lightning-bolt-shaped energy) and all-new art by Paul Mafayon. The game is based on the classic KoT rules, with the addition of a new mechanism exclusive to this edition to offer a fresh gaming experience.',
)
