class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.references :recipe, foreign_key: true

      t.timestamps null: false
    end
  end
end
