class ListItemComment < ApplicationRecord
  validates :user_id, :list_item_id, :body, presence: true

  belongs_to :list_item,
    primary_key: :id,
    foreign_key: :list_item_id,
    class_name: :ListItem

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
