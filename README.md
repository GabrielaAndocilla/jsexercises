# About this project 

This is a project made on javaScript that have a file about how to resolve the following excercises:

## 1 - Non-Constructible Change

  Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the  minimum sum of money) that you  CANNOT create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).
 
### Sample Input
```
  coins = [5, 7, 1, 1, 2, 3, 22]
```
 
### Sample Output
```
 20
```

#### Test Case 1
```
{
  "coins": [5, 7, 1, 1, 2, 3, 22]
}
```
##### Output
```
20
```
#### Test Case 2
```
{
  "coins": [1, 1, 1, 1, 1]
}
```
##### Output
```
6
```
#### Test Case 3
```
{
   "coins": [1, 5, 1, 1, 1, 10, 15, 20, 100]
}
```
##### Output
```
55
```
### 2 - Sorted Squared Array
  Write a function that takes in a non-empty array of integers that are sorted  in ascending order and returns a new array of the same length with the squares  of the original integers also sorted in ascending order.
Cases for test:
#### Sample Input
```
  array = [1, 2, 3, 5, 6, 8, 9]
```
 
#### Sample Output
```
    [1, 4, 9, 25, 36, 64, 81]
```

#### Test Case 1
```
{
  "array": [1, 2, 3, 5, 6, 8, 9]
}
```
#### Output
```
    [1, 4, 9, 25, 36, 64, 81]
```
#### Test Case 2
```
{
    "array": [-2, -1]
}
```
#### Output
```
    [1, 4]
```
#### Test Case 3
```
  "array": [-10, -5, 0, 5, 10]
```
#### Output
```
    [0, 25, 25, 100, 100]
```

## Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your system.

## How to Run

1. Open a terminal and navigate to the directory where the `resolution.js` file is located.

2. Run the `resolution.js` file using Node.js:

```bash
node resolution.js
```
