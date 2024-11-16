FROM nginx:alpine

COPY public /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

# Test Build
# docker build -t weygu/nebulagraph-lzc-portal:v0.1.0 .
# docker run --rm -p 38889:80 --name nebulagraph-lzc-portal weygu/nebulagraph-lzc-portal:v0.1.0
# Push to Docker Hub
# docker buildx build --platform linux/amd64,linux/arm64 -t weygu/nebulagraph-lzc-portal:v0.1.0 . --push