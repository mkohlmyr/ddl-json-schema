# User

```javascript
digitalData.user
```

```javascript
"user": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.user[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property | Type     |
| ----------------- | -------- |
| `user[n].segment` | `object` |
| `user[n].profile` | `array`  |

----

```javascript
digitalData.user[n].segment
```

```javascript
"segment": {
  "type": "object",
  ...
}
```

----

```javascript
digitalData.user[n].profile
```

```javascript
"profile": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.user[n].profile[n]
```

```javascript
{
  "type": "object",
  ...
}
```

----

```javascript
digitalData.user[n].profile[n].profileInfo
```

```javascript
"profileInfo": {
  "type": "object",
  ...
}
```

| Reserved property             | Type     |
| ----------------------------- | -------- |
| `profileInfo.profileID`       | `string` |
| `profileInfo.userName`        | `string` |
| `profileInfo.email`           | `string` |
| `profileInfo.language`        | `string` |
| `profileInfo.returningStatus` | `string` |
| `profileInfo.type`            | `string` |

----

```javascript
digitalData.user[n].profile[n].address
```

```javascript
"address": {
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `address.line1`         | `string` |
| `address.line2`         | `string` |
| `address.city`          | `string` |
| `address.stateProvince` | `string` |
| `address.postalCode`    | `string` |
| `address.country`       | `string` |

----

```javascript
digitalData.user[n].profile[n].social
```

```javascript
"social": {
  "type": "object",
  ...
}
```

----

```javascript
digitalData.user[n].profile[n].attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```