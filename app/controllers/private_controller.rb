class PrivateController < ApplicationController
  before_action :authenticate_user!

  def test
    render json: {
      message: "This is a secret message. You are seeing it because you have successfully logged in." 
    }

    # Redirect to the user homepage
    # byebug

    # render file: Rails.root.join('react_frontend/src/components/UserHome.js'), layout: false
    
  end
end