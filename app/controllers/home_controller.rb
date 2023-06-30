class HomeController < ApplicationController
  def index
    # Your code for the home page action
     render json: { message: 'Welcome to the API' }
  end
end