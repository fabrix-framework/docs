---
title: Component API
description: Component API
---

The most basic way to use Fabrix is to use the component API.

## `FabrixComponent`

Give your own query to `query` prop to render components with fabrix.

```tsx
import { FabrixComponent } from "@fabrix-framework/fabrix"

const Characters = () => {
  return (
    <FabrixComponent
      query={`
        query characters {
          characters {
            collection {
              id
              name
              status
            }
          }
        }
      `}
    />
  )
}
```

Fabrix can also automatically generate forms from GraphQL mutations. The fields in the form are derived from the input types specified in the mutation variables. This allows you to quickly create and render forms based on your GraphQL schema without manually defining each form field.

When you provide a mutation to Fabrix, it inspects the input types of the mutation to determine the fields that should be included in the form.

Here’s an example of how you can use Fabrix to render a form from a mutation:

```tsx
import { FabrixComponent } from "@fabrix-framework/fabrix";

const CreateCharacter = () => {
  return (
    <FabrixComponent
      mutation={`
        mutation createCharacter($input: CreateCharacterInput!) {
          createCharacter(input: $input) {
            id
          }
        }
      `}
    />
  );
}
```
