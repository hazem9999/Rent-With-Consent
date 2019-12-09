# Rent-With-Consent
# PROJECT DESCRIPTION:
This web application is to help users find cars to rent around their area

# CONFIG:
        To use google maps api enter your api key in keys_dev
        To use database enter your database cluster link in keys_dev in MONGO_URI(replace service.env.MONGO_URI with your cluster key)

# DEPENDENCIES:
            All dependencies are located in package.json to remove or add any dependencies please refer to it

# DOCKER:  
        docker build -t <your username>/node-web-app .
        docker run -p 3001:3001 -d <your username>/node-web-app


# DOCKER COMPOSE:  
                docker-compose up      to run
                docker-compose down    to stop

