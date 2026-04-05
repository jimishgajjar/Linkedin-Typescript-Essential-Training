# Linkedin-Typescript-Essential-Training

This repository contains code exercises and solutions from the "LinkedIn TypeScript Essential Training" course. It demonstrates various core TypeScript features and advanced concepts through practical examples.

## Table of Contents

- [Introduction](#introduction)
- [Key TypeScript Concepts Covered](#key-typescript-concepts-covered)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Examples](#examples)

## Introduction

This project is a collection of code examples developed as part of the LinkedIn Learning course "TypeScript Essential Training". It serves as a practical guide to understanding and implementing fundamental as well as advanced TypeScript concepts.

## Key TypeScript Concepts Covered

The exercises in this repository illustrate the use of the following TypeScript features:

- **Interfaces**: Defining contracts for object shapes (e.g., `Contact`, `Todo`).
- **Enums**: Creating sets of named constants for better readability and type safety (e.g., `TodoStatus`).
- **Generics**: Writing reusable code that works with different types while maintaining type safety (e.g., `getNextId`).
- **Decorators**:
  - **Method Decorators**: Modifying the behavior of class methods (e.g., `authorize`).
  - **Class Decorators**: Modifying the behavior of a class constructor (e.g., `freeze`, `singleton`).
  - **Property Decorators**: Observing property access and modification (e.g., `auditable`).
- **Type Aliases and Custom Types**.
- **Basic Type System**: `number`, `string`, `boolean`, `object`, `any`, `void`.
- **Functions**: Typed parameters and return values.

## Project Structure

The repository is organized by chapters, following the course structure. Each chapter folder may contain multiple exercise or solution sub-folders.

For example:

- `Ch02/02_Challenge/app.ts`: An initial challenge for a To-Do list.
- `Ch02/02_Solution/app.ts`: The solution to the To-Do list challenge, introducing interfaces and enums.
- `Ch05/05_05e/src/demo.ts`: Demonstrates various decorator types, interfaces, and patterns.

## Getting Started

To run the TypeScript examples, you'll need Node.js and npm (or yarn) installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/Linkedin-Typescript-Essential-Training.git
    cd Linkedin-Typescript-Essential-Training
    ```
2.  **Install dependencies:**
    Navigate into specific chapter/exercise directories as needed. For most TypeScript projects, you'd typically run:

    ```bash
    npm install
    # or yarn install
    ```

    However, for this training, you might just need `tsc` (TypeScript compiler) installed globally or use `npx tsc`.

3.  **Compile and Run:**
    Navigate to the specific `src` directory of an exercise (e.g., `Ch05/05_05e/src`).
    ```bash
    cd Ch05/05_05e/src
    tsc demo.ts # Compiles demo.ts to demo.js
    node demo.js # Runs the compiled JavaScript
    ```
    For `Ch02/02_Solution/app.ts`:
    ```bash
    cd Ch02/02_Solution
    tsc app.ts
    node app.js
    ```

## Examples

### Decorators in `demo.ts`

This example showcases how to use different types of decorators in TypeScript:

- `@freeze`: A class decorator that makes the class constructor and its prototype immutable.
- `@singleton`: A class decorator that enforces a singleton pattern, ensuring only one instance of the class can be created.
- `@authorize("RoleName")`: A method decorator factory that adds authentication and authorization checks before executing a method.
- `@auditable`: A property decorator that logs changes to a property's value.

### To-Do List Application in `app.ts`

This basic To-Do list application demonstrates:

- Defining an `interface` for `Todo` items.
- Using an `enum` for `TodoStatus`.
- Implementing a generic function `getNextId` to handle different types of ID-able items.
