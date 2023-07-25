Rails.application.routes.draw do
  get 'private/test'
  # get '/user_home', to: 'user_home#index', as: 'user_home'
  get '/user_home', to: 'user_home#index'

  devise_for :users, 
    path: '', 
    path_names: {
      sign_in: 'login',
      sign_out: 'logout',
      registration: 'signup',
    },
    controllers: {
      sessions: 'users/sessions',
      registrations: 'users/registrations',
    }
end

# Rails.application.routes.draw do
  # get 'user_home/index'
#   devise_for :users,
#              controllers: {
#                sessions: 'users/sessions',
#                registrations: 'users/registrations'
#              }

#   devise_scope :user do
#     post '/users', to: 'users/registrations#create'
#   end

#   get '/member-data', to: 'members#show'
#   get '/home', to: 'home#index'
  
#   # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
#   # Defines the root path route ("/")
#   # root "articles#index"
#   root to: "home#index"

#   namespace :api do
#     # post '/login', to: 'users/sessions#create'
#     # Additional API routes
#   end
# end
