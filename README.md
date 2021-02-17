# CoinFinder

## Project Outline:
##  - Scope/Minimum Viable Product:
        - Build a web app that provides the user a list of businesses that accept popular cryptocurrenciecs
        - How I determined the MVP:
            - Audience:
                - The average consumer who is looking to invest and spend at a certain point in the future
            - Problem:
                - A major hindrance to cyptocurrency is that people don't understand it conceptually by providing a list of vendors this app is built to persuade the average person to consider cryptocurrency as a solid investment.
            - Problem...Solved!
                - By easily providing the user with a tangible list of vendors, atms, operators, etc. who have bitcoin transactions the user can more quickly determine that cryptocurrency is a worthwhile investment
##  - User story:
        - AS A average consumer...
        - I want TO SEE A LIST of vendors who transact with cryptocurrenciecs...
        - SO THAT I can see if cryptocurrenciecs are viable in my immediate area.
##  - Acceptance Criteria:
        - GIVEN that I am an average consumer...
        - WHEN I submit a search with my zipcode...
        - THEN I see a list of vendors by a set parameter...
##  - The benefits to the project team:
        - This basic project allows us to build off of this simple concept.
            - Future features may include:
                - Basic routing options
                - Online vendors
                - Business profiles
                - Market insights
                    - Value increases, trade volumes...anything that the average consumer may not see
                        - This would help build consumer confidence
                - Online marketplace 
                - Etc.
        - By starting small, following an industry standard API, we will have a real world related project
            - This will show entrepreanurial foresight
            - Will show a willingness to work on "less fun ideas" (we aren't busy worrying about what recipe will look up)
            - That we know how to build an agile project that has a small scope?MVP but is readily improved and expanded
                - Or taken in different directions
# Resources:
    - Foundation for CSS
        https://get.foundation/sites/docs/
        - Youtube tutorial
            https://www.youtube.com/watch?v=DEu5xYEZx18
    - Google slides for basic layout design (optional)
        https://cloud.google.com/maps-platform/retail/getting-started
        - Earthquake Markers
            https://developers.google.com/maps/documentation/javascript/earthquakes#maps_earthquake_markers-javascript
        - Geocoding Requests
            https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingRequests
    - Coinmap
        https://coinmap.org/api/v1/venues/
            - Needs this infront of it to work:
                https://cors-anywhere.herokuapp.com/
    - GetLocation API
        https://w3c.github.io/geolocation-api/
        - GL tutorial (node specific)
        https://rapidapi.com/blog/geolocation-backend-node-express/
    
# Work Flow:

##  - Teams work on JS collab or as individuals and communicate
        - Once someone has it done we then build off of that
            - Getting google maps to work with coinmap will prove to be the most challenging
                - Need to use GMaps data to plug into Coinmap to pull vendor list
            - 2 people on each section:
                - James and Jelani - Googlemaps
                - Dave and Mike - Coinmap
            - Once both are working individually we will need to connect them
##  - We then transition to using Foundation API for styling
        - Must be mobile responsive
        - Overall styling is least important

## Screen Shots

![project-1-CC](basicoutline.png)

## Workflow

    - Dave: working on coinmap api
    - James: working on google.maps api
    - Jelani: working on UI
    - Michael: floating to wherever needed

- User inputs location
    - Location queries a search into coinmap api
    - Coinmap api pulls lattitude and longitude of vendor/atm
    - Lat/Long is inputed into google maps
    - Google maps generates the location


    <script defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&region=JP"></script> 