class Checkin < ApplicationRecord
  validates :trip_id, :lat, :lon, :captured_at, presence: true
end
