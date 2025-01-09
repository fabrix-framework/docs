---
title: Calendar 
description: Calendar component from roadmap-ui 
---

Example implemention of calendar component from roadmap-ui

## Component

```tsx
const FabrixCalendar = omakaseFabrixComponents.getFabrixComponent("customCalendar");

const Page = () => {
  return (
    <FabrixCalendar
      query={gql`
        query getScheduleItems {
          scheduleItems {
            collection {
              startDate
              endDate
              status 
            } 
          } 
        } 
      `}
      customProps={{
        startDateField: "startDate",
        endDateField: "endDate",
        statusField: "status",
      }}
    />
  )
}
```
