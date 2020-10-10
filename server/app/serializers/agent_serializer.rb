class AgentSerializer < ActiveModel::Serializer
  attributes :id, :license, :experienceyears, :user, :company
end
