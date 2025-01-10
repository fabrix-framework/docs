---
title: FAQ
description: FAQ
---

## How can we add authentication?

Fabrix internally uses [urql](https://github.com/urql-graphql/urql) to make requests to the GraphQL API, and `FabrixProvider` has a prop to prepend exchanges (`prependExchanges`) to the urql client.

```diff lang="tsx"
const Providers = (props: React.PropsWithChildren) =>
  <FabrixProvider
    // ...
+    prependExchanges={/* add your own urql exchanges here */}
  >
    {props.children}
  </FabrixProvider>
```

The minimum implementation of urql exchange to set authentication header for each request is as follow:

```ts
import { authExchange } from "@urql/exchange-auth";

export const dumbAuthExchange = authExchange(async (utils) => {
  return {
    addAuthToOperation: (operation) => {
      return utils.appendHeaders(operation, {
        Authorization: `Bearer: ${process.env.AUTHENTICATION_TOKEN}`,
      });
    },
    didAuthError: () => false,
    refreshAuth: () => Promise.resolve(),
  };
});
```

To customize exchanges, see more at [authoring exchanges](https://commerce.nearform.com/open-source/urql/docs/advanced/authoring-exchanges/) in urql documents.

## Can we use fabrix with (any GraphQL client library)?

Currently, no. Fabrix internally uses [urql](https://github.com/urql-graphql/urql) to make requests to the GraphQL API which is tightly coupled with the core.

However, we are planning to add plugability of GraphQL client in future ([Github issue](https://github.com/fabrix-framework/fabrix/issues/123)). Wait for the future version.
