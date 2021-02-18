# == Schema Information
#
# Table name: battles
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  participant_ids :integer          default([]), is an Array
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  mode            :string           not null
#  score_board     :text
#
class Battle < ApplicationRecord
    validates :name, :mode, presence: true
    serialize :score_board

    has_many :tasks,
        primary_key: :id,
        foreign_key: :battle_id,
        class_name: :Task

    has_many :posts,
        primary_key: :id,
        foreign_key: :battle_id,
        class_name: :Post
end
