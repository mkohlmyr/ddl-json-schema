# W3C Customer Experience Digital Data Layer 1.0

The W3C Customer Experience Digital Data Layer is a [specification](https://www.w3.org/2013/12/ceddl-201312.pdf) that describes a method for exposing customer data through a global JavaScript object in a consistent manner that can be consumed by multiple vendors.

The `window.digitalData` object may be extended in many ways. The objects in the specification are not required to be present, but if they are used they must adhere to the specified property names and types. On the global object the following names are reserved properties on the `digitalData` object: `pageInstanceID`, `page`, `product`, `cart`, `transaction`, `event`, `component`, `user`, `privacy`, `version`.

## digitalData.pageInstanceID
```
"pageInstanceID": {
  "type": "string"
}
```

## digitalData.page
```
"page": {  
  "type":"object",
  ...
}
```
| Reserved property | Type     |
| ----------------- | -------- |
| `page.pageInfo`   | `object` |
| `page.category`   | `object` |
| `page.attributes` | `object` |

### digitalData.page.pageInfo
```
"pageInfo": {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `pageInfo.pageID`          | `string` |
| `pageInfo.pageName`        | `string` |
| `pageInfo.desinationURL`   | `string` |
| `pageInfo.referringURL`    | `string` |
| `pageInfo.sysEnv`          | `string` |
| `pageInfo.variant`         | `string` |
| `pageInfo.version`         | `string` |
| `pageInfo.breadcrumbs`     | `array`  |
| `pageInfo.author`          | `string` |
| `pageInfo.issueDate`       | `string` |
| `pageInfo.effectiveDate`   | `string` |
| `pageInfo.expiryDate`      | `string` |
| `pageInfo.language`        | `string` |
| `pageInfo.industryCodes`   | `string` |
| `pageInfo.publisher`       | `string` |

#### digitalData.page.pageInfo.breadcrumbs[n]
```
{
  "type": "string"
}
```

### digitalData.page.category
```
"category" {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

### digitalData.page.attributes
```
"attributes": {
  "type": "object",
  ...
}
```

## digitalData.product
```
"product": {
  "type": "array",
  ...
}
```

### digitalData.product[n]
```
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

#### digitalData.product[n].productInfo
```
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

#### digitalData.product[n].category
```
"category" {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

#### digitalData.product[n].linkedProduct
```
"linkedProduct": {
  "type": "array",
  ...
}
```
See digitalData.product

#### digitalData.product[n].attributes
```
"attributes": {
  "type": "object",
  ...
}
```

## digitalData.cart
```
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

### digitalData.cart.price
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

### digitalData.cart.attributes
```
"attributes": {
  "type": "object",
  ...
}
```

### digitalData.cart.item
```
"item": {
  "type": "array",
  ...
}
```

#### digitalData.cart.item[n]
| Reserved property       | Type     |
| ----------------------- | -------- |
| `item[n].productInfo`   | `object` |
| `item[n].category`      | `object` |
| `item[n].quantity`      | `number` |
| `item[n].price`         | `object` |
| `item[n].linkedProduct` | `array`  |
| `item[n].attributes`    | `object` |

##### digitalData.cart.item[n].productInfo
```
"productInfo": {
  "type": "object",
  ...
}
```
See digitalData.product[n].productInfo

##### digitalData.cart.item[n].category
```
"category": {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

##### digitalData.cart.item[n].price
```
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

##### digitalData.cart.item[n].linkedProduct
```
"linkedProduct": {
  "type": "array",
  ...
}
```
See digitalData.product

##### digitalData.cart.item[n].attributes
```
"attributes": {
  "type": "object",
  ...
}
```

## digitalData.transaction
```
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

### digitalData.transaction.profile
```
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

#### digitalData.transaction.profile.profileInfo
```
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

#### digitalData.transaction.profile.address
```
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

#### digitalData.transaction.profile.shippingAddress
```
"shippingAddress": {
  "type": "object",
  ...
}
```
See digitalData.transaction.profile.address

### digitalData.transaction.total
```
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

### digitalData.transaction.attributes
```
"attributes": {
  "type": "object",
  ...
}
```

### digitalData.transaction.item
```
"item": {
  "type": "array",
  ...
}
```
See digitalData.cart.item

## digitalData.event
```
"event": {
  "type": "array",
  ...
}
```

###digitalData.event[n]
```
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

#### digitalData.event[n].eventInfo
```
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

#### digitalData.event[n].category
```
"category": {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

#### digitalData.event[n].attributes
```
"attributes": {
  "type": "object",
  ...
}
```

## digitalData.component
```
"component": {
  "type": "array",
  ...
}
```

### digitalData.component[n]
```
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

#### digitalData.component[n].componentInfo
```
"componentInfo": {
  "type": "object",
  ...
}
```
| Reserved property           | Type     |
| --------------------------- | -------- |
| `componentInfo.componentID` | `string` |

#### digitalData.component[n].category
```
"category": {
  "type": "object",
  ...
}
```
| Reserved property          | Type     |
| -------------------------- | -------- |
| `category.primaryCategory` | `string` |

## digitalData.user
```
"user": {
  "type": "array",
  ...
}
```

### digitalData.user[n]
```
{
  "type": "object",
  ...
}
```
| Reserved property | Type     |
| ----------------- | -------- |
| `user[n].segment` | `object` |
| `user[n].profile` | `array`  |

#### digitalData.user[n].segment
```
"segment": {
  "type": "object",
  ...
}
```

#### digitalData.user[n].profile
```
"profile": {
  "type": "array",
  ...
}
```

##### digitalData.user[n].profile[n]
```
{
  "type": "object"
}
```

###### digitalData.user[n].profile[n].profileInfo
```
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


###### digitalData.user[n].profile[n].address
```
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

###### digitalData.user[n].profile[n].social
```
"social": {
  "type": "object",
  ...
}
```

###### digitalData.user[n].profile[n].attributes
```
"attributes": {
  "type": "object",
  ...
}
```

## digitalData.privacy
```
"privacy": {
  "type": "object",
  ...
}
```
| Reserved property  | Type     |
| ------------------ | -------- |
| `accessCategories` | `array`  |

### digitalData.privacy.accessCategories
```
"accessCategories": {
  "type": "array",
  ...
}
```

#### digitalData.privacy.accessCategories[n]
```
{
  "type": "object",
  ...
}
```
| Reserved property                  | Type     |
| ---------------------------------- | -------- |
| `accessCategories[n].categoryName` | `string`  |
| `accessCategories[n].domains`      | `array`  |

##### digitalData.privacy.accessCategories[n].domains
```
"domains": {
  "type": "array",
  ...
}
```

###### digitalData.privacy.accessCategories[n].domains[n]
```
{
  "type": "string"
}
```

## digitalData.version
```
"version": {
  "type": "string"
}
```
The version number of the specification this object is adhering to.

----

## Access control using the security object
The optional security object can be added to any part of the digital data object other than the first level.
The security object works in conjunction with defined accessCategories to specify which vendors are allowed to consume which parts of the digital data object.

The security property of an object may be either a string (allowing access to a single accessCategory.categoryName for all parts of that object) or it may be an object (with properties that are identical to those of its parent, permitting access on a per-property basis)
