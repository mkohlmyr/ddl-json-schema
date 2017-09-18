# Privacy

```javascript
digitalData.privacy
```

```javascript
"privacy": {
  "type": "object",
  ...
}
```

| Reserved property  | Type     |
| ------------------ | -------- |
| `accessCategories` | `array`  |

----

```javascript
digitalData.privacy.accessCategories
```

```javascript
"accessCategories": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.privacy.accessCategories[n]
```

```javascript
{
  "type": "object",
  ...
}
```

| Reserved property                  | Type     |
| ---------------------------------- | -------- |
| `accessCategories[n].categoryName` | `string` |
| `accessCategories[n].domains`      | `array`  |

----

```javascript
digitalData.privacy.accessCategories[n].domains
```

```javascript
"domains": {
  "type": "array",
  ...
}
```

----

```javascript
digitalData.privacy.accessCategories[n].domains[n]
```

```javascript
{
  "type": "string"
}
```