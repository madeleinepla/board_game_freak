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
  description: 'add description',
  year: 1995,
  designer: 'Klaus Teuber',
  artist: 'Volkan Baga, Tanja Donner, Pete Fenlon, Jason Hawkins',
  publisher: 'KOSMOS',
  min_players: 3,
  max_players: 4,
  min_playtime: 60,
  max_playtime: 120,
  age: 10,
  header_img: 'https://cf.geekdo-images.com/W3Bsga_uLP9kO91gZ7H8yw__itemrep/img/IzYEUm_gWFuRFOL8gQYqGm5gU6A=/fit-in/246x300/filters:strip_icc()/pic2419375.jpg'
)

g2 = Game.create!(
  title: 'Gloomhaven',
  tagline: 'Vanquish monsters with strategic cardplay. Fulfill your quest to leave your legacy! ',
  description: 'add description',
  year: 2017,
  designer: 'Isaac Childres',
  artist: 'Alexandr Elichev, Josh T. McDowell, Alvaro Nebot',
  publisher: 'Cephalofair Games',
  min_players: 1,
  max_players: 4,
  min_playtime: 60,
  max_playtime: 120,
  age: 14,
  header_img: 'https://cf.geekdo-images.com/sZYp_3BTDGjh2unaZfZmuA__itemrep/img/0IdBRA_G-ZdrNaxI4Z1LPQMZD0I=/fit-in/246x300/filters:strip_icc()/pic2437871.jpg'
)

g3 = Game.create!(
  title: 'Nemesis',
  tagline: 'Survive an alien-infested spaceship but beware of other players and their agendas.',
  description: 'add description',
  year: 2018,
  designer: 'Adam Kwapiński',
  artist: 'Piotr Foksowicz, Patryk Jędraszek, Ewa Labak, Andrzej Półtoranos',
  publisher: 'Awaken Realms',
  min_players: 1,
  max_players: 5,
  min_playtime: 90,
  max_playtime: 180,
  age: 12,
  header_img: 'https://cf.geekdo-images.com/tAqLpWxQ0Oo3GaPP3MER1g__itemrep/img/GcRdGHHeKlE4W4TLwcvW3tloDT0=/fit-in/246x300/filters:strip_icc()/pic5073276.jpg'
)

# g4 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g5 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g6 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g7 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g8 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g9 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )

# g10 = Game.create!(
#   title: ,
#   tagline: ,
#   description: ,
#   year: ,
#   designer: ,
#   artist: ,
#   publisher: ,
#   min_players: ,
#   max_players: ,
#   min_playtime: ,
#   max_playtime: ,
#   age: 
# )