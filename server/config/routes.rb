Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      # resources :users
      # resources :clients
      with_options(except: [:new, :edit]) do |opt|
        opt.resources :users
        opt.resources :companies
        opt.resources :clients
        opt.resources :agents
        opt.resources :properties
        opt.resources :appointments
      end
      post '/login', to: 'auth#create'
    end
  end
end
