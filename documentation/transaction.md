# Transaction

```javascript
digitalData.transaction
```

```javascript
"transaction": {
  "type": "object",
  ...
}
```

| Reserved property           | Type     |
| --------------------------- | -------- |
| `transaction.transactionID` | `string` |
| `transaction.profile`       | `object` |
| `transaction.total`         | `object` |
| `transaction.attributes`    | `object` |
| `transaction.item`          | `array`  |

----

```javascript
digitalData.transaction.profile
```

```javascript
"profile": {
  "type": "object",
  ...
}
```

| Reserved property         | Type     |
| ------------------------- | -------- |
| `profile.profileInfo`     | `object` |
| `profile.address`         | `object` |
| `profile.shippingAddress` | `object` |

----

```javascript
digitalData.transaction.profile.profileInfo
```

```javascript
"profileInfo": {
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `profileInfo.profileID` | `string` |
| `profileInfo.userName`  | `string` |
| `profileInfo.email`     | `string` |

----

```javascript
digitalData.transaction.profile.address
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
digitalData.transaction.profile.shippingAddress
```

```javascript
"shippingAddress": {
  "type": "object",
  ...
}
```

See digitalData.transaction.profile.address

----

```javascript
digitalData.transaction.total
```

```javascript
"total": {
  "type": "object",
  ...
}

```
| Reserved property        | Type     |
| ------------------------ | -------- |
| `total.totalPrice`       | `number` |
| `total.voucherCode`      | `string` |
| `total.voucherDiscount`  | `number` |
| `total.currency`         | `string` |
| `total.taxRate`          | `number` |
| `total.shipping`         | `number` |
| `total.shippingMethod`   | `string` |
| `total.priceWithTax`     | `number` |
| `total.transactionTotal` | `number` |

----

```javascript
digitalData.transaction.attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```

----

```javascript
digitalData.transaction.item
```

```javascript
"item": {
  "type": "array",
  ...
}
```

See digitalData.cart.item