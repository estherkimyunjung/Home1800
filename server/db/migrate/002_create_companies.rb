class CreateCompanies < ActiveRecord::Migration[6.0]
  def change
    create_table :companies do |t|
      t.string :logo
      t.string :name
      t.string :address
      t.integer :zipcode
      t.float :latitude
      t.float :longitude
      t.string :phone
      t.string :email
      t.string :description

      t.timestamps
    end
  end
end
