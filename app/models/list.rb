class List < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  
  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :list_items, dependent: :destroy,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :ListItem

  has_many :list_likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :ListLike
end