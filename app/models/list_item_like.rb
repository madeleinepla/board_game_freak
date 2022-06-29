class ListItemLike < ApplicationRecord
  validates :user_id, :list_item_id, presence: true
  validates :user_id, uniqueness: { scope: :list_item_id }

  belongs_to :list_item,
    primary_key: :id,
    foreign_key: :list_item_id,
    class_name: :ListItem

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
