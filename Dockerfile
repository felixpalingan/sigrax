# Multi-stage lightweight production container with Nginx Alpine
FROM nginx:alpine

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy website assets to nginx public directory
COPY . /usr/share/nginx/html/

# Copy custom nginx configuration for caching, compression & clean URLs
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
