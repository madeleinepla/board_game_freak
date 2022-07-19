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

ActiveRecord::Schema.define(version: 2022_07_19_185353) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "classifications", force: :cascade do |t|
    t.integer "game_id"
    t.string "main_class"
    t.string "sub_class"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_classifications_on_game_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "title", null: false
    t.text "tagline", null: false
    t.text "description", null: false
    t.integer "year", null: false
    t.string "designer", null: false
    t.string "artist", null: false
    t.string "publisher", null: false
    t.integer "min_players", null: false
    t.integer "max_players", null: false
    t.integer "min_playtime", null: false
    t.integer "max_playtime", null: false
    t.integer "age", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "header_img", null: false
    t.string "bg_img"
  end

  create_table "list_comments", force: :cascade do |t|
    t.text "body", null: false
    t.integer "user_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_list_comments_on_list_id"
    t.index ["user_id"], name: "index_list_comments_on_user_id"
  end

  create_table "list_item_comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "list_item_id", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_item_id"], name: "index_list_item_comments_on_list_item_id"
    t.index ["user_id"], name: "index_list_item_comments_on_user_id"
  end

  create_table "list_item_likes", force: :cascade do |t|
    t.integer "user_id"
    t.integer "list_item_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_item_id"], name: "index_list_item_likes_on_list_item_id"
    t.index ["user_id", "list_item_id"], name: "index_list_item_likes_on_user_id_and_list_item_id", unique: true
    t.index ["user_id"], name: "index_list_item_likes_on_user_id"
  end

  create_table "list_items", force: :cascade do |t|
    t.string "title", null: false
    t.string "body", null: false
    t.integer "list_id", null: false
    t.integer "game_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_list_items_on_game_id"
    t.index ["list_id"], name: "index_list_items_on_list_id"
  end

  create_table "list_likes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "list_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id"], name: "index_list_likes_on_list_id"
    t.index ["user_id", "list_id"], name: "index_list_likes_on_user_id_and_list_id", unique: true
    t.index ["user_id"], name: "index_list_likes_on_user_id"
  end

  create_table "lists", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.integer "author_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["author_id"], name: "index_lists_on_author_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
