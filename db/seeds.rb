# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.create([
{name: 'Xin Chào', cuisine: 'Vietnamese', description: '2022 James Beard Award for Best Chef, Texas, finalist', menu: "https://www.xinchaohtx.com/dinner-menu", image_url: 'https://lh3.googleusercontent.com/p/AF1QipNvQmsyDEWPRa1HU3LxiBjAQrkWk_y052cNg_wO=s1360-w1360-h1020'}, 
{name: 'Tatemó', cuisine: 'Mexican', description: 'Voted for James Beard Awards Best New Restaurant 2023
and Esquire for Best New Restaurants in America 2022', menu: "https://www.tatemohtx.com/reservations", image_url: 'https://lh3.googleusercontent.com/p/AF1QipMzKqdx-55xobosg4O4SHhSbewsPLM37rNJhI7a=s1360-w1360-h1020'}, 
{name: 'Cochinita & Co', cuisine: 'Mexican', description: 'James Beard finalist for emerging chef', menu: "https://www.cochinitaco.com/_files/ugd/f28f0a_40ece79d94a44d6c8eb3f1690613a911.pdf", image_url: 'https://lh3.googleusercontent.com/p/AF1QipMjRRe4rck5Z7NMN23Oz0H2k6B5eHP8Z2fvCoCQ=s1360-w1360-h1020'}, 
{name: 'Theodore Rex', cuisine: 'New American', description: 'James Beard award for hospitality, 2023', menu: "https://trexhouston.com/wp-content/uploads/2022/02/TREX-MENU-2.5-2.7.pdf", image_url: 'https://lh3.googleusercontent.com/p/AF1QipMoBEzTsnO5X8kpuJQrI9zQP8EVP7XlXuP38Zxb=s1360-w1360-h1020'}, 
{name: "March", cuisine: "Mediterranean", description: "Bon Appétit's 50 Best New Restaurants 2022", menu: "https://www.marchrestaurant.com/media/filer_public/47/89/47898ee1-c7f5-4796-9999-839ab98da5b5/6_course_tasting_current.pdf", image_url:'https://lh3.googleusercontent.com/p/AF1QipNz0SUlPI5pE6kn1qt-THSLJOoCS4koG8cJVil3=s1360-w1360-h1020'
}])

User.create({name: 'Chad', username: 'cstewart2'})