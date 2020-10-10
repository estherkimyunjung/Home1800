class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :firstname, :lastname, :email, :role, :avatar, :zipcode
end
