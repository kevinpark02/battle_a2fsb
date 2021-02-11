json.task do
    json.set! @task.id do
        json.partial! 'task', task: @task
    end
end
