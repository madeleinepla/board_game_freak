class ListLike < ApplicationRecord
  validates :user_id, :list_id, presence: true
  validates :user_id, uniqueness: { scope: :list_id }

  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
