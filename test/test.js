import test from 'tape'
import { swap, partition, kthSmallest } from '../src/kthSmallest'

test('swap flips two elements in an array in place', (t) => {
  t.plan(2)
  const nums = [1,2,3,4,5]
  swap(nums, 0, 1)
  t.equal(nums[0], 2)
  t.equal(nums[1], 1)
})

test('swap leaves the rest of the array unchanged', (t) => {
  t.plan(3)
  const nums = [1,2,3,4,5]
  swap(nums, 0, 1)
  t.equal(nums[2], 3)
  t.equal(nums[3], 4)
  t.equal(nums[4], 5)
})

test('partition always leaves a sorted array unchanged', (t) => {
  t.plan(4)
  const nums = [1,2,3,4,5]
  const originalNums = JSON.stringify(nums.slice())

  partition(nums, 0)
  t.equal(JSON.stringify(nums),originalNums)

  partition(nums, 1)
  t.equal(JSON.stringify(nums), originalNums)

  partition(nums, 2)
  t.equal(JSON.stringify(nums), originalNums)

  partition(nums, 3)
  t.equal(JSON.stringify(nums), originalNums)
})

test('partition places smaller nodes before pivot', (t) => {
  t.plan(5)
  const nums = [5,4,3,2,1]

  partition(nums, 0)
  t.equal(nums[4], 5)
  t.ok(nums[0] < 5)
  t.ok(nums[1] < 5)
  t.ok(nums[2] < 5)
  t.ok(nums[3] < 5)
})

test('partition places larger nodes after pivot', (t) => {
  t.plan(5)
  const nums = [5,4,3,2,1] 

  partition(nums, 4)
  t.equal(nums[0], 1)
  t.ok(nums[1] > 1)
  t.ok(nums[2] > 1)
  t.ok(nums[3] > 1)
  t.ok(nums[4] > 1)
})

test('partition returns the new index of pivot', (t) => {
  t.plan(3)
  const nums1 = [5,4,3,2,1]
  const newIndex1 = partition(nums1, 2)
  t.equal(2, newIndex1)

  const nums2 = [5,4,1,2,3]
  const newIndex2 = partition(nums2, 2)
  t.equal(0, newIndex2)

  const nums3 = [1,3,5,2,4]
  const newIndex3 = partition(nums3, 2)
  t.equal(4, newIndex3)
})

test('partition leaves an array of duplicates unchanged', (t) => {
  t.plan(5)
  const nums = [1,1,1,1,1] 

  partition(nums, 0)
  t.equal(nums[0], 1)
  t.equal(nums[1], 1)
  t.equal(nums[2], 1)
  t.equal(nums[3], 1)
  t.equal(nums[4], 1)
})

test('partition works on arrays of length 1', (t) => {
  t.plan(1)
  const nums = [1]
  partition(nums, 0)
  t.equal(nums[0], 1)
})

test('kthSmallest works backwards when given a negative number', (t) => {
  t.plan(5)
  const nums = [1,2,3,4,5]
  t.equal(kthSmallest(nums, -1), 5)
  t.equal(kthSmallest(nums, -2), 4)
  t.equal(kthSmallest(nums, -3), 3)
  t.equal(kthSmallest(nums, -4), 2)
  t.equal(kthSmallest(nums, -5), 1)
})

test('kthSmallest returns undefined when k not in range', (t) => {
  t.plan(2)
  const nums = [1,2,3,4,5]
  t.equal(kthSmallest(nums, -1000), undefined)
  t.equal(kthSmallest(nums, 10), undefined)
})

test('kthSmallest returns undefined when array length is 0', (t) => {
  t.plan(1)
  t.equal(kthSmallest([], 0), undefined)
})

test('kthSmallest works on arrays of length 1', (t) => {
  t.plan(1)
  t.equal(kthSmallest([1], 0), 1)
})

test('kthSmallest throws when first input is not array or second input is not int', (t) => {
  t.plan(5)
  t.throws(() => kthSmallest(), 'throws when array is not passed')
  t.throws(() => kthSmallest([1,2,3,4]), 'throws when k is not passed')
  t.throws(() => kthSmallest({'a': 1, 'b': 2}, 2), 'throws when first arg is not array')
  t.throws(() => kthSmallest([1,2,3,4,5], 1.1), 'throws when k is num but not integer')
  t.throws(() => kthSmallest([1,2,3,4,5], '1'), 'throws when k is string')
})

test('kthSmallest finds the kth largest element in descending array', (t) => {
  t.plan(5)
  const nums = [4,3,2,1,0]
  t.equal(kthSmallest(nums, 0), 0)
  t.equal(kthSmallest(nums, 1), 1)
  t.equal(kthSmallest(nums, 2), 2)
  t.equal(kthSmallest(nums, 3), 3)
  t.equal(kthSmallest(nums, 4), 4)
})

test('kthSmallest finds the kth largest element in ascending array', (t) => {
  t.plan(5)
  const nums = [0,1,2,3,4]
  t.equal(kthSmallest(nums, 0), 0)
  t.equal(kthSmallest(nums, 1), 1)
  t.equal(kthSmallest(nums, 2), 2)
  t.equal(kthSmallest(nums, 3), 3)
  t.equal(kthSmallest(nums, 4), 4)
})

test('kthSmallest finds the kth largest element in unsorted array', (t) => {
  t.plan(5)
  const nums = [2,4,1,0,3]
  t.equal(kthSmallest(nums, 0), 0)
  t.equal(kthSmallest(nums, 1), 1)
  t.equal(kthSmallest(nums, 2), 2)
  t.equal(kthSmallest(nums, 3), 3)
  t.equal(kthSmallest(nums, 4), 4)
})

test('kthSmallest includes repeats in count of k elements', (t) => {
  t.plan(3)
  const nums = [5,5,5]
  t.equal(kthSmallest(nums, 0), 5)
  t.equal(kthSmallest(nums, 1), 5)
  t.equal(kthSmallest(nums, 2), 5)
})

test('kth smallest does not mutate the original array', (t) => {
  t.plan(2)
  const nums = [2,1,4,3,0]
  const originalNums = nums.slice()
  kthSmallest(nums, 0)
  t.ok(JSON.stringify(originalNums), JSON.stringify(nums))
  kthSmallest(nums, 2)
  t.ok(JSON.stringify(originalNums), JSON.stringify(nums))
})

