# URL_HASHING

Contains API for Convertion of long url into its hash.


## Usage

To get hashed url for a long url 

API - 
POST Request : 
url : http://165.22.208.118:6000/short_url
body  -> { "url":"long_link"} 

response : shortened url  --> on click  redirects to the original url : 

POSTMAN collection is attached in the mail thread

Architecture :

- 3 application web servers :
1. Writing Operation
2. Reading Operation
3. Reading Operation

- 3 Database Servers 
1. For Writing Specific - Primary Database
2. Reading Specific - replica set -Secondary Database
3. Reading Specific - replica set -Secondary Database

- Nginx Reverse Proxy is used as Load Balancer to divide traffic between two read data servers and the last server is used for data writing operation . 


- node js is used for application server:
1. Very useful in handling traffice for IO specific operation 
2. Easy horizontal scaling is possible .
3. Asynchronous by nature prevents any blocking in the API . 
4. Built in cluster module helps in various tasks such scaling and different OS operation . 


- 3 Database servers are used , mongodb is used for this purpose as it is no sql database , scaling  is much easier , have fast read and write ,  also  eventual consistancy helps in data sanity with help of replica sets which has been created.
Primary database is used for writing and other two secondary used for reading operation .

- all application have been containerized using docker and docker compose for the orchestration . 
- all the app have their own specfic container making the  shipping of the apps  much easy .  

- all the containers are deployed in the digital ocean server .





