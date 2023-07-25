class UserHomeController < ApplicationController
  before_action :authenticate_user!

  def index

    name = "#{current_user['first_name']} #{current_user['last_name']}"
    render json: { message: "Say hello to my little friend" }
  end
end
