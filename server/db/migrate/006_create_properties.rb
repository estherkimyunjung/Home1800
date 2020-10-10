class CreateProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :properties do |t|
      t.string :image
      t.string :status
      t.string :category
      t.string :schooldist
      t.string :address
      t.integer :zipcode
      t.float :latitude
      t.float :longitude
      t.string :prices
      t.integer :beds
      t.integer :baths
      t.string :sqft
      t.integer :built
      t.references :agent, foreign_key: true

      t.timestamps
    end
  end
end
