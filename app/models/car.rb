class Car < ApplicationRecord
  validates :vin, :views, presence: true
  def add
    self.views += 1
    self.save
  end
end