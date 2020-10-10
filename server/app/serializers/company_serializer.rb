class CompanySerializer < ActiveModel::Serializer
  attributes :id, :logo, :name, :address, :zipcode, :latitude, :longitude, :phone, :email, :description
end
