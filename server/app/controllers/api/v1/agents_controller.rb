class Api::V1::AgentsController < ApplicationController
  before_action :current_agent, only: [:show, :update, :destroy]

  # GET /agents
  def index
    @agents = Agent.all
    render json: @agents
  end

  # GET /agents/1
  def show
    render json: @agent
  end

  # POST /agents
  def create
    @agent = Agent.new(agent_params)

    if @agent.save
      render json: @agent, status: :created, location: @agent
    else
      render json: @agent.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /agents/1
  def update
    if @agent.update(agent_params)
      render json: @agent
    else
      render json: @agent.errors, status: :unprocessable_entity
    end
  end

  # DELETE /agents/1
  def destroy
    @agent.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def current_agent
      @agent = Agent.find(params[:id])
    end

    def agent_params
      params.require(:agent).permit(:license, :experienceyears, :user, :company)
    end

end
