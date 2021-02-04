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
require 'test_helper'

class BattleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
