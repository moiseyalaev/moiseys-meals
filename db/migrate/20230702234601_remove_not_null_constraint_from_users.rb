class RemoveNotNullConstraintFromUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :first_name, true
    change_column_null :users, :last_name, true
  end
end

