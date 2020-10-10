class Api::V1::AppointmentsController < ApplicationController
  before_action :current_appointment, only: [:show, :update, :destroy]

  # GET /appointments
  def index
    @appointments = Appointment.all
      render json: @appointments.to_json(:include => {:agent => {:include => :user }, :client => {:include => :user }}) 
  end

  # GET /appointments/1
  def show
    render json: @appointment.to_json(:include => {:agent => {:include => :user }, :client => {:include => :user }}) 
  end

  # POST /appointments
  def create
    # byebug()
    @appointment = Appointment.new(appointment_params)

    if @appointment.save
      render json: @appointment, status: :created
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /appointments/1
  def update
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: @appointment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /appointments/1
  def destroy
    @appointment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def current_appointment
      @appointment = Appointment.find(params[:id])
    end

    def appointment_params
      params.require(:appointment).permit(:date_time, :message, :client_id, :agent_id)
    end

end
