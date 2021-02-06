'use strict';
/***
 * Function creates a new array with all sub-array elements concatenated into it
 *
 * @param {Array} array - intial array
 * @returns {Array}
 */
const plain = (array) => {
        const result = [];
        while (array.length) {
            const next = array.pop();
            if (Array.isArray(next) ) {
                array.push(...next);
            } else {
                if (next !== undefined)
                    result.push(next);
            }
        }
        return result.reverse();
};