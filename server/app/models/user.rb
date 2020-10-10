class User < ApplicationRecord
  has_one :client, dependent: :destroy
  has_one :agent, dependent: :destroy
  
  has_secure_password
  validates :email, uniqueness: { case_sensitive: false }
  validates :username, :role, :email, presence: true
end  
