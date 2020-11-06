# URL_HASHING

Contains API for Convertion od long into its hash.


## Usage

To get hashed url for a long url 

API - 
POST Request : 
url : http://http://165.22.208.118:6000/short_url
param : { "url":"long_link"} 

response : shortened url on click  redirects to the original url : 

Architecture :

- Includes 3 web servers :
1 . Writing Operation
2 . Reading Operation
3 . Reading Operation

- 3 Database Servers 
1  . For Writing Specific
2  . Reading Specific - replica set
3  . Reading Specific - replica set

- node js is used for application server:
1 . Very useful in handling traffice to IO specific operation 
2 . Easy horizontal scaling is possible .
3 . Asynchronous by nature prevents any blocking in the API . 
4 . Built in cluster module helps in various tasks such scaling and different OS operation . 

- Nginx Reverse Proxy is used as Load Balancer to divide traffic between two read data servers and one server is used for data writing operation . 

- 3 Database servers are used , mongodb is used for this purpose as it is no sql database , scaling  it is much easier , have faster read and write than RDBMS ,  but eventual consistancy helps in data sanity with help of replica sets which has been created.


- all application have been containerized using docker and docker compose for the orchestration . 
- all the app have their own specfic container making , shipping  much easy .  





```bash
 npm run dev
```

To run the test


