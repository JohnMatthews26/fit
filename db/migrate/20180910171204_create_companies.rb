class CreateCompanies < ActiveRecord::Migration[5.1]
  def change
    create_table :companies do |t|
      t.string :company_name, null: false
      t.string :payment_status, null: false
      t.string :primary_contact_name, null: false
      t.string :primary_email, null: false
      t.string :primary_phone_number, null: false
      t.timestamps
    end
  end
end
