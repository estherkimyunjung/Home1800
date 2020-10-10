class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :role
      t.string :avatar
      t.integer :zipcode

      t.timestamps
    end
  end
end
