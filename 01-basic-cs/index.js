'use strict'

const _ = require('lodash') // https://lodash.com/docs/4.17.4
const assert = require('assert')
const database = require('./database.json')

const total = _(database) // Lodash chain starts with database object
  .flatMap('hats') // Flatten data to get array of all sold hats
  .countBy('id') // Count sales of each hat based on 'id'
  .map((sales, id) => ({ hatId: id, sales })) // Convert object to array of objects with 'hatId' and 'sales'
  .orderBy(['sales'], ['desc']) // Sort hats by sales in descending order
  .take(3) // Take top 3 hats with highest sales
  .sumBy('sales') // Calculate sum of sales for selected 3 hats

console.log('total => ', total)

// Throws error on failure
assert.equal(total, 23, `Invalid result: ${total} != 23`)

console.log('Success!')

/**
 * Time and space complexity in O() notation is:
 *   - time complexity: O(n * log n)
 *   - space complexity: O(n)
 * Where:
 *   - _.orderBy() is the most time complexity => O(n * log n)
 *   - _.flatMap() and .map() are the most space complexity => O(n)
 */
