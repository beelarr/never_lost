Rails.application.routes.draw do
  get 'trips/new'

  get 'trips/create'

  get 'trips/show'

  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
