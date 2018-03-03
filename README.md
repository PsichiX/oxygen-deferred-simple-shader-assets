# Oxygen Game Engine Deferred Simple Shader Assets

## Install
```bash
npm install --save oxygen-deferred-simple-shader-assets
```

## Usage
**webpack.config.js** - *config.plugins* section:
```javascript
new PackWebpackPlugin([
  { input: [
    'static/assets',
    // include assets into generated assets.pack
    '<oxygen-deferred-simple-shader-assets>/assets'
  ] }
])
```
