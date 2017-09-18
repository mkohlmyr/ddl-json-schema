<p align="center">
  <img src="documentation/images/logo.png" width="75">
</p>
<p align="center">
  JSON Schema for the W3C Customer Experience Digital Data Layer.
</p>

# What is the W3C Customer Experience Digital Data Layer?
The W3C Customer Experience Digital Data Layer is a [specification](https://www.w3.org/2013/12/ceddl-201312.pdf) that describes a method for exposing customer data through a global JavaScript object in a consistent manner that can be consumed by multiple vendors.

# Why do I need this module?
If you are building a service that consumes the contents of the Digital Data Layer you may want to validate the data coming in and verify that it conforms to the expected format.

If you are building an ecommerce website that exposes the Digital Data Layer, you might have a test suite where you verify that the data you are exposing conforms to the expected format.

# How do I install and use it?
```sh
npm install ddl-json-schema
```

```javascript
var schema = require("ddl-json-schema");

schema.root;
// this is a schema defines the entire digitalData object

schema.attributes;
// this schema describes a valid attributes object

schema.security;
// this schema describes a valid security object or string

schema.category;
// this schema describes a valid category object

schema.product;
// this schema describes a valid product object

schema.price;
// this schema describes a valid price object

schema.address;
// this schema describes a valid address object

schema.date;
// this schema describes a valid date string
```

# What's new?
In version 2.0.0 there is an API change in terms of what is exported as the module. Instead of exporting the overall digitalData schema as the default export, we now export schemas for a number of W3C Customer Experience Digital Data Layer components. This is meant to enable more granular validation, for instance if your api only receives a product object (or array) rather than the entire digitalData object, and you still want to validate these objects against the specification.

# Looking for more information about the schema?
The `window.digitalData` object may be extended in many ways. The objects in the specification are not required to be present, but if they are used they must adhere to the specified property names and types. On the global object the following names are reserved properties on the `digitalData` object: `pageInstanceID`, `page`, `product`, `cart`, `transaction`, `event`, `component`, `user`, `privacy`, `version`.

| Reserved property | Type     | Specification                                 |
| ----------------- | -------- | --------------------------------------------- |
| `pageInstanceID`  | `string` |                                               |
| `page`            | `object` | [specification](documentation/page.md)        |
| `product`         | `array`  | [specification](documentation/product.md)     |
| `cart`            | `object` | [specification](documentation/cart.md)        |
| `transaction`     | `object` | [specification](documentation/transaction.md) |
| `event`           | `array`  | [specification](documentation/event.md)       |
| `component`       | `array`  | [specification](documentation/component.md)   |
| `user`            | `array`  | [specification](documentation/user.md)        |
| `privacy`         | `object` | [specification](documentation/privacy.md)     |
| `version`         | `string` |                                               |


<small>Project logo created by [Valeriy](https://thenounproject.com/valeriy25/) from the [Noun Project](https://thenounproject.com/term/shopping-basket/1211471/).</small>