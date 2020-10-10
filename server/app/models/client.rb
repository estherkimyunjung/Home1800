class Client < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :company
  has_many :appointments
  has_many :agents, through: :appointments
end
