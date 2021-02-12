json.battle do
    json.set! @battle.id do
        json.partial! 'battle', battle: @battle
    end
end

json.tasks do
    @battle.tasks.each do |task|
        json.set! task.id do
            json.partial! 'task', task: @task
        end
    end
end
