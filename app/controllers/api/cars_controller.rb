class Api::CarsController < ApplicationController
  def create
    @car = Car.new(car_params)
    if @car.save
      render :show
    else
      render json: @car.errors.full_mesages, status: 422
    end
  end

  def update
    @car = Car.find_by(vin: params[:id])
    if @car
      @car.add
      render :show
    else
      render json: ["Car not found"], status: 422
    end
  end

  def index
    @cars = Car.all
  end

  private 
  def car_params
    params.require(:car).permit(:vin)
  end
end