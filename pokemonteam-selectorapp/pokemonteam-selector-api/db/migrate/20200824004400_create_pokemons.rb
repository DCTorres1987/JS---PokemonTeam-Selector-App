class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :image
      t.integer :category_id

      t.timestamps
    end
  end
end
