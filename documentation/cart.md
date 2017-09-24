# Cart

```javascript
digitalData.cart
```

```javascript
"cart": {
  "type": "object",
  ...
}
```

| Reserved property | Type     |
| ----------------- | -------- |
| `cart.cartID`     | `string` |
| `cart.price`      | `object` |
| `cart.attributes` | `object` |
| `cart.item`       | `array`  |

----

```javascript
digitalData.cart.price
```

```javascript
"price": {
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `price.basePrice`       | `number` |
| `price.voucherCode`     | `string` |
| `price.voucherDiscount` | `number` |
| `price.currency`        | `string` |
| `price.taxRate`         | `number` |
| `price.shipping`        | `number` |
| `price.shippingMethod`  | `string` |
| `price.priceWithTax`    | `number` |
| `price.cartTotal`       | `number` |

----

```javascript
digitalData.cart.attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```

----

```javascript
digitalData.cart.item
```

```javascript
"item": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.cart.item[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `item[n].productInfo`   | `object` |
| `item[n].category`      | `object` |
| `item[n].quantity`      | `number` |
| `item[n].price`         | `object` |
| `item[n].linkedProduct` | `array`  |
| `item[n].attributes`    | `object` |

----

```javascript
digitalData.cart.item[n].productInfo
```

```javascript
"productInfo": {
  "type": "object",
  ...
}
```

See digitalData.product[n].productInfo

----

```javascript
digitalData.cart.item[n].category
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
digitalData.cart.item[n].price
```

```javascript
"price": {
  "type": "object",
  ...
}
```

| Reserved property       | Type     |
| ----------------------- | -------- |
| `price.basePrice`       | `number` |
| `price.voucherCode`     | `string` |
| `price.voucherDiscount` | `number` |
| `price.currency`        | `string` |
| `price.taxRate`         | `number` |
| `price.shipping`        | `number` |
| `price.shippingMethod`  | `string` |
| `price.priceWithTax`    | `number` |

----

```javascript
digitalData.cart.item[n].linkedProduct
```

```javascript
"linkedProduct": {
  "type": "array",
  ...
}
```

See digitalData.product

----

```javascript
digitalData.cart.item[n].attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```