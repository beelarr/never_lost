class TripChannel < ApplicationCable::Channel

  # subscribing and to and streaming messages that are broadcast to this channel
  def subscribed
    stream_from "trip_#{params[:room]}"
  end

  def receive(data)
    # find trip using owner_uuid
    trip = Trip.find_by!(owner_uuid: data['owner_uuid'])

    # add additional checkin
    # not active in demo to keep DB small
    # checkin = trip.checkins.create!({
    #   lat: data['lat'],
    #   lon: data['lon'],
    #   captured_at: Time.zone.at(data['captured_at'] / 1000)
    # })

    # broadcast checkin to subscribers
    ActionCable.server.broadcast("trip_#{params[:room]}", {
      lat: data['lat'],
      lon: data['lon'],
      captured_at: data['captured_at']
    })
  end
end
