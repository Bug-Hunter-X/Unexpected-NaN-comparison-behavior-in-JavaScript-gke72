# Unexpected NaN comparison behavior in JavaScript

This repository demonstrates an uncommon bug in JavaScript related to comparing NaN values using the strict equality operator (===).

## Bug Description

The strict equality operator (===) in JavaScript returns false when comparing NaN to itself. This is counterintuitive and can lead to errors in programs that rely on this operator for comparisons involving NaN.

## Code Example

The `bug.js` file contains a function `foo` that demonstrates this issue. The function compares two numbers using the strict equality operator and returns true if they are equal and false otherwise. However, when the function is called with NaN values, it returns false even though both arguments are NaN.

## Solution

The `bugSolution.js` file provides a solution to this problem. It uses the `Number.isNaN()` function to check if a value is NaN. This function provides a reliable way to determine if a value is NaN, addressing the issue with the strict equality operator.