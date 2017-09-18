# Page

```javascript
digitalData.page
```

```javascript
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

----

```javascript
digitalData.page.pageInfo
```

```javascript
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

----

```javascript
digitalData.page.pageInfo.breadcrumbs[n]
```

```javascript
{
  "type": "string"
}
```

----

```javascript
digitalData.page.category
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
digitalData.page.attributes
```

```javascript
"attributes": {
  "type": "object",
  ...
}
```