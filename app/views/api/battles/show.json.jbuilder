json.battle do
    json.set! @battle.id do
        json.partial! 'battle', battle: @battle
    end
end