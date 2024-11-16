# Build

## Build Portal

```bash
cd nebulagraph-lazycat
npm i
npx next build
cd ..
mkdir -p public
cp -r nebulagraph-lazycat/out/* public/
```

## Prepare `manifest.yml` and primitive image

```bash
lzc-dtl -c docker-compose.yaml
```
