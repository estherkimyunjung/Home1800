class CreateAgents < ActiveRecord::Migration[6.0]
  def change
    create_table :agents do |t|
      t.string :license
      t.integer :experienceyears
      t.references :user, foreign_key: true
      t.references :company, foreign_key: true

      t.timestamps
    end
  end
end
