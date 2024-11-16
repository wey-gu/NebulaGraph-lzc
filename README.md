# Build

## Build Portal

```bash
cd nebulagraph-lazycat
npm i
npx next build
cd ..
cp -r nebulagraph-lazycat/out/* public/
```

## Prepare `manifest.yml` and primitive image

```bash
lzc-dtl -c docker-compose.yaml
```

## Manipulate image by adding portal route

`cloud.lazycat.app.nebulagraph.lpk` is a zip file generated by `lzc-dtl`. But it lacks some of information, in `manifest.yml`, we need to place the `manifest.yml` file in the root of the zip file.

```bash
# unzip the lpk file into a temp directory
rm -fr temp || true
unzip cloud.lazycat.app.nebulagraph.lpk -d temp
# copy manifest.yml to the root of the temp directory
cp manifest.yml temp/
# repack the lpk file (from within the temp directory)
cd temp
zip -r ../cloud.lazycat.app.nebulagraph.lpk *
cd ..
rm -rf temp
```
