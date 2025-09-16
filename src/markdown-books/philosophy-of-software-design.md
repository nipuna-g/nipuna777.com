---
path: "/books/philosophy-of-software-design"
date: "2025-09-09"
title: "Philosophy of Software Design"
author: "Jhon Ousterhout"
---

## Chapter 1 - Introduction

The difficult thing about writing good software is managing complexity.

Main ways of fighting complexity:
- Making code simpler and more obvious
- Making code more modular

## Chapter 2 - The Nature of Complexity

Complexity is anything related to the structure of a software system that makes it hard to understand and modify the system.

Complexity of an overall system is determined by the complexity of each part weighted by the fraction of time developers spend time working on that part.

### Symptoms of complexity

1. Change Amplification - A simple change requires changes at multiple locations
2. Cognitive load - What do you need to keep in mind when making changes
3. Unknown unknowns - Complexity of a change that is not obvious

### Causes of complexity

Dependencies - A piece of code cannot be understood and modififed in isolation.
Obscurity - Important information is not obvious

Complexity is incremental, it accumilates over time.

## Chapter 3 - Working Code Isn't Enough

- Tactical programming - shipping features
- Strategic programming - shipping while taking changability in mind

## Chapter 4 - Modules Should Be Deep

Modules should have a small interface and deep implementation.

Abstraction - Hiding away the *unimportant* implementation details from the consumer

🚩 - Shallow Modules - Interface is complicated relative to functionality it provides

Next chapters will explain ways to create deep modules

## Chapter 5 - Information Hiding (and Leakage)

Hiding infromation within a modules reduces dependencies. 
For example, a B-tree implementation or the TCP network protocol implementation can hide most of the implementation details and expose a simple interface. 

### Information leakage

If a piece of information is relected in the interface, it is leaked by definition. 
But that's not the only way to leak information. 

Two classes could be dependent on the output of one another. A change to one class would require a change to the other.


🚩 - Information leackage happens when the same knowledge is used in multiple places, such as two classes that both understand the type of a file.

### Temporal decomposition

When modules are created based on the order of operations. Not based on the actual functionality. 

For example, you can have modules for opening a file, changing it, writing it. 
But opening a file and writing it could be in the same module since they do similar work. 

### HTTP request handler

The author goes through an example where their students are asked to create an http handler using modules. 

```
POST /submit-form HTTP/1.1
Host: www.example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 27

username=user123&password=pass
```
#### Common mistakes/improvements 

- Too many classes (ex - class to convert network request to string then to parse it)
    - This can cause both classes to have shared knowledge and be temporaliy decomposed
- Too shalow modules (ex - getParams() that returns the HTTPRequest params map)
    - This requires the clients to implement logic - we can improve this (ex - string getParam(name: string) number getNumParam(name: string))
    - We hide logic inside the module to handle missing params or mismatched types


🚩 - Overexposure - if API forces users to learn about less commonly used features when using common features


## Chapter 6 - General-Purpose Modules are Deeper


