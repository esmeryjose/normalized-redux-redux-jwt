# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

1000.times do |i|
  User.create({ name: Faker::Name.name_with_middle,
                username: Faker::Internet.email,
                password: "1",
                img_url: Faker::Avatar.image("#{i}"),
                sm_img_url: Faker::Avatar.image("#{i}", "50x50"),
                latitude: Faker::Address.latitude,
                longitude: Faker::Address.latitude
                 })
end

1000.times do
  Post.create(title: Faker::Company.catch_phrase, content: Faker::Hipster.paragraph(6, true, 4), user: User.all[rand(1000)+1])
end

2000.times do
  Comment.create(content: Faker::Dune.quote, post: Post.all[rand(1000)+1], user: User.all[rand(1000)+1])
end
