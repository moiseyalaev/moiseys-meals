class EditJwtDenylist < ActiveRecord::Migration[7.0]
  def change
    change_table :jwt_denylist do |t|
        t.change :jti, :string, null: true
        t.change :exp, :datetime, null: true
    end
  end
end
