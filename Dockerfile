FROM nginx:alpine
# copy build artifacts
COPY /build /usr/share/nginx/html
# expose and serve files
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
