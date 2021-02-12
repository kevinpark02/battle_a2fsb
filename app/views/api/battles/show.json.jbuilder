json.battle do
    json.set! @battle.id do
        json.partial! 'battle', battle: @battle
    end
end

json.tasks do
    @battle.tasks.each do |task|
        json.set! task.id do
            json.extract! task, :id, :name, :points, :battle_id
        end
    end
end