# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

# User seed
    u1 = User.create(email: 'kevin.park02@gmail.com', first_name: "Kevin", last_name: "Park", username: "kpark02", gender: "Male", class_of: "2014", password: "battlesb1")
    u2 = User.create(email: 'carol.h.yang@gmail.com', first_name: "Carol", last_name: "Park", username: "cp629", gender: "Female", class_of: "2013", password: "battlesb2")