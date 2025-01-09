---
title: Component registry 
description: Component registry 
---

Fabrix allows you to customize how different types of data are rendered by providing a `componentRegistry` prop in `FabrixProvider`. 

This prop enables you to define which React components should be used for various GraphQL types and fields, giving you the flexibility to tailor the UI components to fit your application’s needs.

```tsx
export const Providers = (props: React.PropsWithChildren) =>
  <FabrixProvider
    // ...
    componentRegistry={yourOwnCustomRegistry}
  >
    {props.children}
  </FabrixProvider>
```

## Creating your own `ComponentRegistry`

The `ComponentRegistry` supports two types of components:

1. **Default Components**: These are predefined components for common use cases such as fields, forms, and tables. You can provide default components that Fabrix will use if no custom components are specified.

2. **Custom Components**: These are user-defined components that you can register for specific GraphQL types. You can create a `ComponentRegistry` with custom components that match the types and purposes of your schema fields.

Here’s how you can define your custom component registry:

```tsx
import { ComponentRegistry } from "@fabrix-framework/fabrix";
import { defaultComponents } from "@fabrix-framework/chakra-ui";
import MyCustomField from "./components/MyCustomField";
import MyCustomForm from "./components/MyCustomForm";

const yourCustomRegistry = new ComponentRegistry({
  default: defaultComponents,
  custom: {
    unit: {
      myCustomField: {
        type: "field",
        component: MyCustomField,
      },
    }
  },
});
```
