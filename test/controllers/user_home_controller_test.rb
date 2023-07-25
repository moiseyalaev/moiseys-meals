require "test_helper"

class UserHomeControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get user_home_index_url
    assert_response :success
  end
end
