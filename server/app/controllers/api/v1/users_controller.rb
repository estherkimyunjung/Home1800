class Api::V1::UsersController < ApplicationController
  skip_before_action :logged_in?, only: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users.to_json(:include => {:agent => {:include => :user }, :client => {:include => :user }}) 
  end

  def show
    # @user = User.find(params[:id])
    render json: @user.to_json(:include => {:agent => {:include => :user }, :client => {:include => :user }}) 
  end

  #Sign Up
  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      render json: { user: UserSerializer.new(@user) }, status: :created, location: @user
    else 
      render json: @user.errors, status: :unprocessable_entity
      
    end
  end

  def update
    # @user = User.find(params[:id])
    if @user.update(user_params)
    render json: @user
    else
    render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    # @user = User.find(params[:id])
    @user.destroy
  end


  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.permit(:username, :password, :password_confirmation, :firstname, :lastname, :email, :role, :avatar, :zipcode)
  end

end
