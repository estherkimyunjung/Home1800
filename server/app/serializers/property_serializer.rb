class PropertySerializer < ActiveModel::Serializer
  attributes :id, :image, :status, :category, :schooldist, :address, :zipcode, :latitude, :longitude, :prices, :beds, :baths, :sqft, :built, :agent
end
