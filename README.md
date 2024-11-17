https://github.com/user-attachments/assets/dfd71e50-6b98-4f3f-b239-91334e94ca3e


# Build

## Build Portal

```bash
cd nebulagraph-lazycat
npm i
npx next build
cd ..
mkdir -p public
cp -r nebulagraph-lazycat/out/* public/
docker build -t weygu/nebulagraph-lzc-portal:v0.1.0 .
```

## Prepare `manifest.yml` and primitive App Package

```bash
lzc-dtl -c docker-compose.yaml
```


# Credits ❤

- [LazyCat](https://lazycat.cloud/), Thanks for sponsoring the great hardware
- [NebulaGraph](https://github.com/vesoft-inc/nebula), NebulaGraph is a distributed, scalable, blazing fast, and efficient graph database that handles trillion edges.
- [lzc-dtl](https://github.com/glzjin/lzc-dtl), lzc-dtl is a handy tool to generate LazyCat Package from docker-compose.yaml
