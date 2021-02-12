# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Battle.delete_all
Task.delete_all

# User seed
    u1 = User.create(email: 'test@gmail.com', first_name: "Test", last_name: "Tester", username: "mctest", gender: "Bro", class_of: "1991", password: "battlesb1")
    u2 = User.create(email: 'carol.h.yang@gmail.com', first_name: "Carol", last_name: "Park", username: "cp629", gender: "Sis", class_of: "2013", password: "battlesb2")

# Battle seed
    b1 = Battle.create(name: "Fresh Start")
    b2 = Battle.create(name: "Fresh Wind")
    b3 = Battle.create(name: "Fresh Fire")
    b4 = Battle.create(name: "Fresh Water")

# Task seed
    t1 = Task.create(name: "Run a mile", points: 200, battle_id: b1.id)
    t2 = Task.create(name: "Crunchy Frog", points: 1, battle_id: b1.id)
    t1 = Task.create(name: "Burpee", points: 10, battle_id: b1.id)