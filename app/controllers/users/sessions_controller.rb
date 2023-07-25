# frozen_string_literal: true

# class Users::SessionsController < Devise::SessionsController
#   respond_to :json

#   def create
#     sign_up(resource_name, resource)
#     self.resource = warden.authenticate!(auth_options)
#     render json: {
#       message: 'Registration and login successful.',
#       user: resource
#     }, status: :ok
#   end

#   private

#   def respond_with(_resource, _opts = {})
#     render json: {
#       message: 'You are logged in.',
#       user: current_user
#     }, status: :ok
#   end

#   def respond_to_on_destroy
#     log_out_success && return if current_user

#     log_out_failure
#   end

#   def log_out_success
#     render json: { message: 'You are logged out.' }, status: :ok
#   end

#   def log_out_failure
#     render json: { message: 'log out faild, nothing happened.' }, status: :unauthorized
#   end
# end

class Users::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    render json: resource
  end
  
  def respond_to_on_destroy
    render json: { message: "Logged out." }
  end
end