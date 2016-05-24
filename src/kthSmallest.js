import isNumber from 'is-number'

export function swap(array, index1, index2) {
  const tmp = array[index1]
  array[index1] = array[index2]
  array[index2] = tmp
}

export function partition(nums, pivotIndex, left = 0, right = nums.length - 1) {
  const pivotValue = nums[pivotIndex]
  swap(nums, pivotIndex, right)
  let swapIndex = left
  for (let i = left; i < right; i++) {
    if (nums[i] < pivotValue) {
      swap(nums, i, swapIndex)
      swapIndex++
    }
  }
  swap(nums, swapIndex, right)
  return swapIndex
}

export function kthSmallest(nums, k) {
  function kthSmallestHelper(nums, k, left, right) {
    const pivotIndex = Math.floor(Math.random() * (right - left) + left)
    const resultIndex = partition(nums, pivotIndex, left, right)
    if (resultIndex === k) {
      return nums[resultIndex]
    } else if (resultIndex < k) {
      return kthSmallestHelper(nums, k, resultIndex + 1, right)
    } else {
      return kthSmallestHelper(nums, k, left, resultIndex - 1)
    }
  }

  if (!Array.isArray(nums)) {
    throw new TypeError(`nums should be array, got ${typeof nums}`)
  }

  if (!nums.every(isNumber)) {
    throw new TypeError('nums array must contain only numbers')
  }

  if (!Number.isInteger(k)) {
    throw new TypeError(`k should be integer, got ${typeof k} `)
  }

  if (k >= nums.length || k < nums.length * -1) {
    return undefined
  }

  if (k < 0) {
    k += nums.length
  }

  return kthSmallestHelper(nums.slice(), k, 0, nums.length - 1)
}

