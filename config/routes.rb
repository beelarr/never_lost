Rails.application.routes.draw do
  root 'trips#new'

  get 'trips/new'

  get 'trips/create'

  get 'trips/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
