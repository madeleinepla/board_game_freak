class User < ApplicationRecord
  attr_reader :password

  validates :username, :email, presence: true, uniqueness: true
  validates :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :ratings, dependent: :destroy,
    primary_key: :id, 
    foreign_key: :user_id,
    class_name: :Rating

  has_many :rated_games, 
    :through => :ratings,
    :source => :game


  has_many :lists, dependent: :destroy,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :List

  has_many :list_likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ListLike

  has_many :list_comments,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ListComment

  has_many :list_item_likes, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ListItemLike

  has_many :list_item_comments, dependent: :destroy,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :ListItemComment

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end

