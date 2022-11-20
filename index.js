/*
consider data in range of 0 to 9
1,4,1,2,7,5,2
Index:
| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

- count each element in the given array and place the count
at the appropriate index
- store the count of each unique element in the count array
- if any element repeats itself simply increase its count


Counting Operations:

**The Problem With Time**
- Different machines will record different times
- The same machine will record different times
- For fast algorithms speed measurements may not be precise enouggh



Counting Operations:

function addUpTo (n) {
    return n * (n + 1) / 2;
}

1 multiplication
1 addition
1 division

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
*/

/*

loop through the array and count


*/

const arr = [
  {
    user: {
      id: 1,
      count: 0,
    },
  },
  {
    user: {
      id: 2,
      count: 0,
    },
  },
  {
    user: {
      id: 3,
      count: 0,
    },
  },
]

// console.log(arr[0].user1.count + 5)

const count = (x) => {
  for (const element of x) {
    for (const property in element) {
      if (element[property].count === 0) {
        element[property].count += 1
      }
      //   console.log(
      //     `ID: ${element[property].id}\nCount: ${element[property].count}`
      //   )
      if (element[property].id === 2) {
        element[property].count += 1
      }
    }
  }
}

count(arr)
console.log(arr)
