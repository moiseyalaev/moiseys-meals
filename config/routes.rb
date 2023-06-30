# config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Rails.application.routes.draw do
  get 'private/test'
  get '/current_user', to: 'current_user#index'

  devise_for :users, path: '', path_names: {
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'signup'
  },
  controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root to: "home#index"

  namespace :api do
    get '/home', to: 'home#index'
    # Additional API routes
  end
end
