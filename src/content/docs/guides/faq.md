---
title: FAQ
description: FAQ
---

## How can we add authentication?

See [prependExchanges](/docs/guides/provider#prependexchanges) section in Provider API.

## Can we use fabrix with (any GraphQL client library)?

Currently, no. Fabrix internally uses [urql](https://github.com/urql-graphql/urql) to make requests to the GraphQL API which is tightly coupled with the core.

However, we are planning to add plugability of GraphQL client in future ([Github issue](https://github.com/fabrix-framework/fabrix/issues/123)). Wait for the future version.
