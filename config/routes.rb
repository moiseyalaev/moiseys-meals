# config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

Rails.application.routes.draw do
  devise_for :users,
             controllers: {
               sessions: 'users/sessions',
               registrations: 'users/registrations'
             }
  get '/member-data', to: 'members#show'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
  root to: "home#index"

  namespace :api do
    get '/home', to: 'home#index'
    # Additional API routes
  end
end
