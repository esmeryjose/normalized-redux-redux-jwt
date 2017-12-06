class User < ApplicationRecord
  has_secure_password
  has_many :posts
  has_many :comments
  validates :username, presence: true
  validates :username, uniqueness: { case_sensitive: false }

end
