# Types

Typescript wor strongly with Types. Studding this _typesystem_ it important then!

### Why do we care about types ?

Types is used by the Typescript Compiler to analyze our look for code errors.

Types allow other engineers to understand what values are flowing around our codebase.

- **Primitive Types:**

  - number
  - boolean
  - string
  - symbol
  - void
  - undefined
  - null
  - any (avoid variables with 'any' at all costs)

- **Object Types:**

  - functions
  - arrays
  - objects
  - classes

### Types Annotations

Code we add to tell Typescript what type of value a variable will refer to.
We developers tell Typescript the type.

##### when to use:

1. when a function returns the 'any' type and we need to clarify the value;
2. when we declare a variable on one line then initialize it later;
3. When we want a variable to have a type that con't be inferred;

### Type Inference

Typescript tries to figure out what types of value a variable refers to.
Typescript guesses the type.
