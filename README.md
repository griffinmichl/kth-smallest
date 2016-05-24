## kth-smallest
Find kth smallest element in an arary of numbers

Uses a randomized quickselect to achieve O(n) average case time complexity

[![Build Status](https://travis-ci.org/gm758/kth-largest.svg?branch=master)](https://travis-ci.org/gm758/kth-largest)

## Install
```bash
$ npm install kth-smallest
```

## Usage
```js
import kthSmallest from 'kth-smallest'

kthSmallest([10, 20, 30, 40], 0)
// 10

kthSmallest([10, 20, 30, 40], 2)
// 30

kthSmallest([10, 20, 30, 40], -1)
// 40

```

## API
```js
kthSmallest :: number a => [a] -> integer -> a

kthSmallest(numbers, k)
```

__Arguments__
* `numbers` - An array of numbers
* `k` - 0-indexed target (pass negative numbers for largest)


