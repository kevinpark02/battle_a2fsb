# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  points     :integer          not null
#  battle_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Task < ApplicationRecord
    validates :name, :points, presence: true

    belongs_to :battle,
        primary_key: :id,
        foreign_key: :battle_id,
        class_name: :Battle
end
