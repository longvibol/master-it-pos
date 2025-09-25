# Setup and Config
  1. create docker file `Dockerfile` in folder `bundle`
  2. past and config 
    1. Node version
    2. PORT 80
    3. ROOT_URL
    4. MONGO_URL
        ```bash
          FROM node:14.21.3
          #FROM node:0.10.43
          MAINTAINER Master-IT TC <masterit@gmail.com>
          ADD . /opt/masterit/app
          # Install NPM packages
          WORKDIR /opt/masterit/app/programs/server
          RUN npm install
          RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/Asia/Bangkok /etc/localtime
          # Set environment variables
          WORKDIR /opt/masterit/app
          ENV PORT 80
          ENV ROOT_URL http://127.0.0.1
          ENV MONGO_URL mongodb://localhost:27017/mlmupcdb
          # Expose port 80
          EXPOSE 80
          # Start the app
          CMD node ./main.js
        ```

  3. Create Network 
      ```bash
      docker network create --driver=bridge --subnet=192.168.10.0/24 --gateway=192.168.10.1 MasterITServer
      ``` 
  4. Run Mongo 
      ```bash
      docker run --name=mongo --net=MasterITServer --ip=192.168.10.2 --restart=always -p 27017:27017 -d mongo:latest
      ``` 
  5. Build Docker Image
      inside "bundle" directory 
      ```bash
      docker build -t app_pos .
      ``` 
  6. Run Image 
      ```bash
      docker run --restart=always --name=app_pos --net=MasterITServer --ip=192.168.10.4 -p 5000:80 -e MONGO_URL=mongodb://192.168.10.2/mlmupcdbnew -e ROOT_URL=http://127.0.0.1:5000 -d app_pos
      ``` 
