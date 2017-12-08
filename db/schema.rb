# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171208170015) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checkins", force: :cascade do |t|
    t.integer "trip_id", null: false
    t.decimal "lat", precision: 10, scale: 6, null: false
    t.decimal "lon", precision: 10, scale: 6, null: false
    t.datetime "captured_at", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["trip_id"], name: "index_checkins_on_trip_id"
  end

  create_table "trips", force: :cascade do |t|
    t.string "viewer_uuid", null: false
    t.string "owner_uuid", null: false
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["owner_uuid"], name: "index_trips_on_owner_uuid"
    t.index ["viewer_uuid"], name: "index_trips_on_viewer_uuid"
  end

end
