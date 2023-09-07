module Integrations
  class AiClient
    OPENAI_API_ENDPOINT = 'https://api.openai.com/v1/chat/completions'
    OPENAI_API_KEY = ENV['OPENAI_API_KEY']

    def self.send_message(conversation)
      headers = {
        'Authorization': "Bearer #{OPENAI_API_KEY}",
        'Content-Type': 'application/json'
      }

      payload = {
        messages: conversation,
        model: "gpt-3.5-turbo",
        max_tokens: 256,
      }

      
      begin
        response = RestClient.post(OPENAI_API_ENDPOINT, payload.to_json, headers)
      rescue RestClient::ExceptionWithResponse => e
        puts "API Error: #{e.response}"
      end

      data = JSON.parse(response.body)
      # byebug
      # Extract the assistant's response from the API response
      assistant_response = data['choices'][0]['message']['content']

      { assistant_response: assistant_response, conversation: conversation }
    end
  end
end
