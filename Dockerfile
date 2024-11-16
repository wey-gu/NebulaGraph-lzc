FROM nginx:alpine

COPY public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 7008

CMD ["nginx", "-g", "daemon off;"]

# Test Build
# docker build -t weygu/nebulagraph-lzc-portal:v0.3.0 .
# docker run --rm -p 7008:7008 --name nebulagraph-lzc-portal weygu/nebulagraph-lzc-portal:v0.3.0
# Push to Docker Hub
# docker buildx build --platform linux/amd64,linux/arm64 -t weygu/nebulagraph-lzc-portal:v0.3.0 . --push
