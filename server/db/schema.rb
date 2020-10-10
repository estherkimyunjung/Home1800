# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 6) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agents", force: :cascade do |t|
    t.string "license"
    t.integer "experienceyears"
    t.bigint "user_id"
    t.bigint "company_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_agents_on_company_id"
    t.index ["user_id"], name: "index_agents_on_user_id"
  end

  create_table "appointments", force: :cascade do |t|
    t.datetime "date_time"
    t.string "message"
    t.bigint "client_id"
    t.bigint "agent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["agent_id"], name: "index_appointments_on_agent_id"
    t.index ["client_id"], name: "index_appointments_on_client_id"
  end

  create_table "clients", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "company_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_clients_on_company_id"
    t.index ["user_id"], name: "index_clients_on_user_id"
  end

  create_table "companies", force: :cascade do |t|
    t.string "logo"
    t.string "name"
    t.string "address"
    t.integer "zipcode"
    t.float "latitude"
    t.float "longitude"
    t.string "phone"
    t.string "email"
    t.string "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "properties", force: :cascade do |t|
    t.string "image"
    t.string "status"
    t.string "category"
    t.string "schooldist"
    t.string "address"
    t.integer "zipcode"
    t.float "latitude"
    t.float "longitude"
    t.string "prices"
    t.integer "beds"
    t.integer "baths"
    t.string "sqft"
    t.integer "built"
    t.bigint "agent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["agent_id"], name: "index_properties_on_agent_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "role"
    t.string "avatar"
    t.integer "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "agents", "companies"
  add_foreign_key "agents", "users"
  add_foreign_key "appointments", "agents"
  add_foreign_key "appointments", "clients"
  add_foreign_key "clients", "companies"
  add_foreign_key "clients", "users"
  add_foreign_key "properties", "agents"
end
