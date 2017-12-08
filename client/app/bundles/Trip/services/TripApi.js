import ActionCable from 'actioncable';

export default class TripApi {
  constructor() {
      // sets up a connection to the server as a consumer of the websocket
      this.cable = ActionCable.createConsumer('/cable');
      this.subscription = false;
  }

  createTrip = name => {
    return fetch('/trips', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
        trip: {name}
      })
    }).
    then(response => response.json());
  }
    // callback is called once every time the server send realtime data to us
    // to consume
  subscribeTrip = (viewer_uuid, callback) => {
    this.subscription = this.cable.subscriptions.create({
      channel: "TripChannel",
      room: viewer_uuid
    }, {
      received: callback
    });
  }

  postCheckin = (owner_uuid, lat, lon, captured_at) => {
    this.subscription.send({
      owner_uuid,
      lat,
      lon,
      captured_at
    });
  }
}
