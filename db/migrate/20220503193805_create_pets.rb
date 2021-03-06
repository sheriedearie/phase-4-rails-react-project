class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.string :name
      t.integer :age
      t.string :species
      t.string :breed
      t.text :bio
      t.string :image_url
      t.references :owner, null: false, foreign_key: {to_table: :users}


      t.timestamps
    end
  end
end
