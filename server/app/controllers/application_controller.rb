class ApplicationController < ActionController::API
  before_action :logged_in?
  # skip_before_action :check_authentication, only: [:logged_in?]

  # before_action :check_authentication
    
  # def encode_token(payload) # for token generation
  #     JWT.encode(payload, "RealEstate1800", "HS256") #algo is optional as a default HS256
  # end

  # def auth_header
  #   # { 'Authorization': 'Bearer <token>' }
  #   request.headers['Authorization']
  #   # byebug
  # end

  # def current_user
  #   if decoded_token
  #     user_id = decoded_token["user_id"]
  #     @user = User.find(user_id)
  #   end
  # end
  
  # def decoded_token
  #     # token => "eyJhbGciOiJIUzI1NiJ9.eyJiZWVmIjoic3RlYWsifQ._IBTHTLGX35ZJWTCcY30tLmwU9arwdpNVxtVU0NpAuI" 
  #   if !auth_header
  #     return nil
  #   end

  #   begin
  #     token = auth_header.split(' ')[1]
  #     JWT.decode(token,"RealEstate1800")[0] #pass the same key
  #     # JWT.decode => [{ "user_id"=>"18" }, { "alg"=>"HS256" }]
  #     # [0] gives us the payload { "user_id"=>"18" }
  #   rescue JWT::DecodeError
  #     nil
  #   end
  # end
  
  # def check_authentication
  #   render json: { error: 'Please log in' }, status: 401 if !logged_in?
  # end
  
  # def logged_in?
  #   # byebug
  #   !!current_user
  # end

  def encode_token(payload)
    JWT.encode(payload, "RealEstate1800", "HS256") #algo is optional as a default HS256
  end

  def logged_in?
    headers = request.headers["Authorization"]

    if !headers
      return nil
    end

    token = headers.split(" ")[1]

    begin
      user_id = JWT.decode(token, "RealEstate1800")[0]["user_id"]
      user = User.find(user_id)
    rescue
      user = nil
    # ensure
      #always runs with an error or without
    end
      render json: {error: "Please Login"} unless user
  end

end
