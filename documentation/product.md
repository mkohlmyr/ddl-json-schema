# Product

```javascript
digitalData.product
```

```javascript
"product": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.product[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property          | Type     |
| -------------------------- | -------- |
| `product[n].productInfo`   | `object` |
| `product[n].category`      | `object` |
| `product[n].linkedProduct` | `array`  |
| `product[n].attributes`    | `object` |

----

```javascript
digitalData.product[n].productInfo
```

```javascript
"productInfo": {
  "type": "object",
  ...
}
```

| Reserved property              | Type     |
| ------------------------------ | -------- |
| `productInfo.productID`        | `string` |
| `productInfo.productName`      | `string` |
| `productInfo.description`      | `string` |
| `productInfo.productURL`       | `string` |
| `productInfo.productImage`     | `string` |
| `productInfo.productThumbnail` | `string` |
| `productInfo.manufacturer`     | `string` |
| `productInfo.sku`              | `string` |
| `productInfo.color`            | `string` |
| `productInfo.size`             | `string` |

----

```javascript
digitalData.product[n].category
```

```javascript
"category" {
  "type": "object",
  ...
}
```

| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

----

```javascript
digitalData.product[n].linkedProduct
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
digitalData.product[n].attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```