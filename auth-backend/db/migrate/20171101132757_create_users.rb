class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :img_url
      t.string :sm_img_url
      t.string :username
      t.string :password_digest
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
