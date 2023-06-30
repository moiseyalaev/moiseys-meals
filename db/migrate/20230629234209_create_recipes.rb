class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :description
      t.references :user, foreign_key: true

      t.timestamps null: false
    end
  end
end