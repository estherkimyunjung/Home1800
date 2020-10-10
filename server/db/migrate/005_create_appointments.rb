class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.datetime :date_time
      t.string :message
      t.references :client, foreign_key: true
      t.references :agent, foreign_key: true
      
      t.timestamps
    end
  end
end
