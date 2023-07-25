# frozen_string_literal: true

# app/controllers/users/registrations_controller.rb
class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)
    resource.save
    sign_in(resource_name, resource)
    render json: resource
  end

  # private

  # def user_params
  #   params.require(:registration).permit(:email, :password, :first_name, :last_name)
  # end

  # def respond_with(resource, _opts = {})
  #   register_success && return if resource.persisted?

  #   register_failed
  # end

  # def register_success
  #   render json: {
  #     message: 'Signed up sucessfully.',
  #     user: current_user
  #   }, status: :ok
  # end

  # def register_failed
  #   render json: { message: 'Something went wrong.' }, status: :unprocessable_entity
  # end
end
