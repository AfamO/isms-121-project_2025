FROM nginx:latest   # Use the latest version of nginx

COPY conf.d/* /etc/nginx/conf.d/  #Copy the nginx configuration files to the container

RUN mkdir /www                 # Create a directory for the website files inside the container

RUN mkdir /www/html       # Create an html directory for the website files inside the container

RUN mkdir /www/html/css   # Create a css directory for the website files inside the container

RUN mkdir /www/html/img   # Create an img directory for the website files inside the container

COPY html/*  /www/html/   # Copy the main html files from VS code to the container

COPY html/css/* /www/html/css/  # Copy the css files from VS code to the container

COPY html/img/* /www/html/img/  # Copy the img files from VS code to the container
