class Api::V1::PropertiesController < ApplicationController
  before_action :current_property, only: [:show, :update, :destroy]

  # GET /properties
  def index
    @properties = Property.all
    render json: @properties.to_json(:include => {:agent => {:include => :user }}) 
    #nested user object add in serializers
  end

  # GET /properties/1
  def show
    render json: @property.to_json(:include => {:agent => {:include => :user }})
  end

  # POST /properties
  def create
    @property = Property.new(property_params)

    if @property.save
      render json: @property, status: :created, location: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /properties/1
  def update
    if @property.update(property_params)
      render json: @property
    else
      render json: @property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /properties/1
  def destroy
    @property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def current_property
      @property = Property.find(params[:id])
    end

    def property_params
      params.require(:property).permit(:image, :status, :category, :schooldist, :address, :zipcode, :latitude, :longitude, :prices, :beds, :baths, :sqft, :built)
    end

end
