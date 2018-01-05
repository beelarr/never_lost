# [Never Lost](http://never-lost.herokuapp.com/)
Hiker's can easily share their location with family and friends while exploring.
<p align="center">
  <img src="https://media.giphy.com/media/xT1R9S5TEPk8OpD9YY/giphy.gif"/>
</p>

### [Full Length Demo](https://youtu.be/eMFzc0qqyb8)

### Getting Started

Fork and/or clone this repo to your local machine.  Then create the following files:

    ├── client
        └── app
            └── Creds
                └──Creds.js
                
Creds.js - (contains mapbox api key)
                
                

    const mapBoxToken = '<Your Token Here>';
    
    module.exports = mapBoxToken; 
    
#### Run                   
```
yarn && bundle 
foreman start -f Procfile.dev

```
### Bugs 
Report bugs and issues [here](https://github.com/beelarr/never_lost/issues)


### Built With
* React 16.2
* React on Rails
* MobX
* Rails 5 using ActionCable
* MapBox
* React-Map-GL
* React-Bootstrap
* Deployment via Heroku
