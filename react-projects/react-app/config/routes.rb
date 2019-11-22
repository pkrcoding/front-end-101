class JsonConstraint
  def matches?(request)
   request.format.json? && request.xhr?
  end
end

Rails.application.routes.draw do
  root to: "home#index"
  namespace :api do
    jsonapi_resources :posts
  end
  get "*path", to: "home#index", constraints: { format: "html" }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
