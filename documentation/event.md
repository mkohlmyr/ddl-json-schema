# Event

```javascript
digitalData.event
```

```javascript
"event": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.event[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property     | Type     |
| --------------------- | -------- |
| `event[n].eventInfo`  | `object` |
| `event[n].category`   | `object` |
| `event[n].attributes` | `object` |

----

```javascript
digitalData.event[n].eventInfo
```

```javascript
"eventInfo": {
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `eventInfo.eventName`   | `string` |
| `eventInfo.eventAction` | `string` |
| `eventInfo.eventPoints` | `number` |
| `eventInfo.type`        | `string` |
| `eventInfo.timeStamp`   | `string` |
| `eventInfo.cause`       | `string` |
| `eventInfo.effect`      | `string` |

----

```javascript
digitalData.event[n].category
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

----

```javascript
digitalData.event[n].attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```