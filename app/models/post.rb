# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  battle_id  :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
    validates :body, :battle_id, :user_id, presence: true

    belongs_to :battle,
        primary_key: :id,
        foreign_key: :battle_id,
        class_name: :Battle

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
