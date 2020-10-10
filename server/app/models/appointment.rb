class Appointment < ApplicationRecord
  belongs_to :client
  belongs_to :agent

  validates :date_time, presence: true

end
