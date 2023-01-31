# CTF - D-XIII  

Challenge created for Pole Sup Delasalle by D-XIII  

## Prerequisites
You will need those tools installed on the host machine:  
- docker + docker-compose

## Start the challenge  

In order to start the challege juste go to the root directory and use the following command  
`./start_challenge.sh`  

This will create 2 containers:  
- the app container running on port `3000`  
- the database container running on port `5432`


## Other commands 
there is 2 others commands at the root directory of the project : 

- `./stop_challenge.sh`  
  used to stop all the containers and clean the stack

- `./restart_challenge.sh`  
  used to stop and start the containers  
  