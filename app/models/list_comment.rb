class ListComment < ApplicationRecord
  validates :user_id, :list_id, :body, presence: true

  belongs_to :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: :List

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
