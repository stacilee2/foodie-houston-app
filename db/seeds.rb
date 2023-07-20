# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([{name: 'Xin Chào', cuisine: 'Vietnamese', description: '2022 James Beard Award for Best Chef, Texas, finalist'}, {name: 'Tatemó', cuisine: 'Mexican', description: 'Voted for James Beard Awards Best New Restaurant 2023
and Esquire for Best New Restaurants in America 2022'}, {name: 'Cochinita & Co', cuisine: 'Mexican', description: 'James Beard finalist for emerging chef'}, {name: 'Theodore Rex', cuisine: 'New American', description: 'James Beard award for hospitality, 2023'}, {name: "March", cuisine: "Mediterranean", description: "Bon Appétit's 50 Best New Restaurants 2022"}])

User.create({name: 'Chad', username: 'cstewart2'})