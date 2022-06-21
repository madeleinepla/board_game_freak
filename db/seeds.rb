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

# g4 = Game.create!(
#   title: ,
#   tagline: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: ,
#   header_img: ,
#   description: ,
# )
