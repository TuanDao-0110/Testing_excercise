## how to set up Proxy by using

1. terminal install

```
    npm i http-proxy-middleware
```

2. set up default in package.json

```json

"proxy":"http://localhost"
```

--> set up default only work with localhost 3. set up manually with 1 API:

1. [x] in setupProxy.js

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1/pages",
    createProxyMiddleware({
      target: "https://restaurant-api.wolt.com",
      changeOrigin: true,
    })
  );
};
```

2. [x] fetching in components:

```js
axios
  .get("/v1/pages/restaurants?lat=60.170187&lon=24.930599")
  .then((response) => {
    // Handle the API response
    console.log(response);
  })
  .catch((error) => {
    // Handle the API error
  });
```

4. set up manually with 2 API

1. [x] with setupProxy.js

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy requests to https://restaurant-api.wolt.com/v1/pages to the target URL
  app.use(
    "/v1/pages",
    createProxyMiddleware({
      target: "https://restaurant-api.wolt.com",
      changeOrigin: true,
    })
  );

  // Proxy requests to /api to the https://localhost:4000 target URL
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://localhost:4000",
      changeOrigin: true,
    })
  );
};
```

2. [x] fetching data 1st API

```js
axios
  .get("/v1/pages/restaurants?lat=42048284&lon=4242")
  .then((response) => {
    // Handle the API response
  })
  .catch((error) => {
    // Handle the API error
  });
```

3. [x] fetching data with 2nd API

```js
axios
  .get("/api/some-route")
  .then((response) => {
    // Handle the API response
  })
  .catch((error) => {
    // Handle the API error
  });
```

5. set up setUpProxy.ts 


```ts 
import { createProxyMiddleware } from "http-proxy-middleware";

interface ProxyConfig {
  target: string;
  changeOrigin: boolean;
  [key: string]: any;
}

const proxy: { [key: string]: ProxyConfig } = {
  "/v1/pages": {
    target: "https://restaurant-api.wolt.com",
    changeOrigin: true,
  },
  "/api": {
    target: "https://localhost:4000",
    changeOrigin: true,
  },
};

export default function setupProxy(app: any) {
  Object.keys(proxy).forEach(function (context) {
    app.use(createProxyMiddleware(context, proxy[context]));
  });
}

```

## Warning setupProxy.js refer to use event in react-typescript
