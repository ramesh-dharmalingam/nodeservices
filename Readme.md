 
 # how to build docker image
 ```
 docker build -t nodeservices .
 docker run -p 8081:8081 nodeservices
```

 # Test
```
http://localhost:8081/gmcservices/geocode/-33.8688/151.2195
http://localhost:8081/gmcservices/vehicle/template/103
```