## kth-largest
Find kth largest element in an arary of numbers

Uses a randomized quickselect to achieve O(n) average case time complexity

[![Build Status](https://travis-ci.org/gm758/kth-largest.svg?branch=master)](https://travis-ci.org/gm758/kth-largest)

## Install
```bash
$ npm install kth-largest
```

## Usage
```js
import kthLargest from 'kth-largest'

kthLargest([10, 20, 30, 40], 0)
// 10

kthLargest([10, 20, 30, 40], 2)
// 30
```

## API
kthLargest :: number a => [a] -> integer -> a
kthLargest(numbers, k)

__Arguments__
* `numbers` - An array of numbers
* `k` - 0-indexed target

