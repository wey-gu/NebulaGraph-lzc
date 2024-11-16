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

## Prepare `manifest.yml` and primitive image

```bash
lzc-dtl -c docker-compose.yaml
```


## Credit

- [LazyCat](https://lazycat.cloud/), Thanks for sponsoring the great hardware
- [NebulaGraph](https://github.com/vesoft-inc/nebula), NebulaGraph is a distributed, scalable, blazing fast, and efficient graph database that supports ACID transactions.
- [lzc-dtl](https://github.com/glzjin/lzc-dtl), lzc-dtl is a handy tool to generate LazyCat Package from docker-compose.yaml
