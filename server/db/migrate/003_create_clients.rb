class CreateClients < ActiveRecord::Migration[6.0]
  def change
    create_table :clients do |t|
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
