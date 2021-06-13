# DateTime Parser and Stringifier

This is the front code of the Date Time API in https://ancient-scrubland-17264.herokuapp.com

![alt tag](app-preview.png)

This API is used to construct dates using a shorthand syntax that looks like 'now-1d/d', this syntax is used in Elastic Search range queries.

You can either enter a date string that you want to parse and click on submit to parse it (left side). Or Choose a date and click on submit to stringify it (right side).

## Glossary
### Units
This is an exhaustive list of units of time:
```
d day
M month
y year
h hour
m minute
s second
```

### Operators
This is an exhaustive list of operators:
```
- subtract
+ add
/{unit} round to closest unit
```