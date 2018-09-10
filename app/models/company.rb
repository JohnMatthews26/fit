class Company < ApplicationRecord
  validates :company_name, presence: true, uniqueness: true
  validates :payment_status, presence: true
  validates :primary_email, presence: true
  validates :primary_contact_name, presence: true
  validates :primary_phone_number, presence: true
end
