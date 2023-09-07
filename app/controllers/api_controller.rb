class ApiController < ApplicationController
  def chat
    user_message = params[:message]

    # Get the existing conversation or start a new one
    conversation = params[:conversation] || []

    # Add the user's message to the conversation history
    conversation << { role: 'user', content: user_message }

    # Call the OpenAI API using AiClient
    api_response = Integrations::AiClient.send_message(conversation)

    # You can customize the response format as needed
    render json: { response: api_response[:assistant_response], conversation: conversation }
  end

end
