# Component

```javascript
digitalData.component
```

```javascript
"component": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.component[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property            | Type     |
| ---------------------------- | -------- |
| `component[n].componentInfo` | `object` |
| `component[n].category`      | `object` |
| `component[n].attributes`    | `object` |

----

```javascript
digitalData.component[n].componentInfo
```

```javascript
"componentInfo": {
  "type": "object",
  ...
}
```

| Reserved property           | Type     |
| --------------------------- | -------- |
| `componentInfo.componentID` | `string` |

----

```javascript
digitalData.component[n].category
```

```javascript
"category": {
  "type": "object",
  ...
}
```

| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |