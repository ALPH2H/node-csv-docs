---
title: Info properties
description: CSV Parse - info properties
keywords: ['csv', 'parse', 'count', 'counter', 'information', 'lines', 'records']
sort: 5
redirects:
 - /parse/state/
---

# CSV Parse info properties

Those properties report internal information such as the number of records which have been processed. They are available in the `info` object of a parser instance and are also exported as the third argument of the user callback.

Note, some properties are used internally by the parser, don't modify them.

* `comment_lines` (number)   
  Count the number of lines being fully commented.
* `empty_lines` (number)   
  Count the number of processed empty lines; was `empty_line_count` until version 3; work only with the `skip_empty_lines` option or an error will be thrown if an empty line is found.
* `invalid_field_length` (number)   
  Number of non uniform records when `relax_column_count` is true; was `skipped_line_count` until version 3.
* `lines` (number)   
  The number of lines encountered in the source dataset, start at 1 for the first line.
* `records` (number)   
  Count the number of processed records.

## Accessing `info`

The `info` object is directly available from the parser instance.

```js
const parse = require('csv-parse')
const parser = parse('1,2,3\na,b,c')
// Using a function declaration
parser.on('readable', function(){
  while(let record = this.read()){
    const {lines, records} = this.info
    console.info(`Current state is ${lines} lines and ${records} records.`)
  }
})
// Using a fat arrow
parser.on('end', () => {
  const {lines, records} = parser.info
  console.info(`There are ${lines} lines with ${records} records.`)
})
```

## Accessing `info` in the callback

The `info` object in provided in the third argument of the callback, after the `error` and `data` arguments.

```js
const parse = require('csv-parse')
parse('1,2,3\na,b,c', function(err, data, {lines, records}){
  console.info(`There are ${lines} lines with ${records} records.`)
})
```

## Additional usage of `info`

The `info` properties are exposed with the usage of the [`cast`](/parse/options/cast/), [`info`](/parse/options/info/) and [`on_record`](/parse/options/on_record/) options. Refers to their respective documentation to learn their usage as well as any additionnal properties they might expose.

Some error objects are enriched with the `info` properties as well as some additionnal properties when appropriate.
