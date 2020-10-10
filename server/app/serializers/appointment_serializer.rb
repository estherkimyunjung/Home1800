class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :date_time, :message, :client, :agent
end
