@cars.each do |car|
  json.set! car.vin do
    json.extract! car, :vin, :views
  end
end