# == Schema Information
#
# Table name: battles
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  participant_ids :integer          default([]), is an Array
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Battle < ApplicationRecord
    validates :name, presence: true

    has_many :tasks
        primary_key: :id,
        foreign_key: :battle_id,
        class_name: :Task
end
