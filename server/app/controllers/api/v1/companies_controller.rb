class Api::V1::CompaniesController < ApplicationController
  before_action :current_company, only: [:show, :update, :destroy]

  # GET /companies
  def index
    @companies = Company.all
    render json: @companies
  end

  # GET /companies/1
  def show
    render json: @company
  end

  # POST /companies
  def create
    @company = Company.new(company_params)

    if @company.save
      render json: @company, status: :created, location: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /companies/1
  def update
    if @company.update(company_params)
      render json: @company
    else
      render json: @company.errors, status: :unprocessable_entity
    end
  end

  # DELETE /companies/1
  def destroy
    @company.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def current_company
      @company = Company.find(params[:id])
    end

    def company_params
      params.require(:company).permit(:logo, :name, :address, :zipcode, :latitude, :longitude, :phone, :email, :description)
    end

end
