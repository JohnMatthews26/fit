class Api::CompaniesController < ApplicationController
  def create
    @company = Company.new(company_params)
    if @company.save
      render "api/companies/show"
    else
      render json: @company.errors.full_messages, status: 422
    end
  end
  private
  # 

  def company_params
    params.require(:company).permit(:company_name, :payment_status, :primary_email, :primary_contact_name, :primary_phone_number)
  end
end
