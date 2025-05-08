# TypeScript: Type vs Interface

In TypeScript, both `type` and `interface` are used to define the shape of data. However, they serve slightly different purposes and have different use cases and syntax.

---

## ✅ Type in TypeScript

### Description:

- Typically used for **primitive data types** like `string`, `number`, `boolean`, etc.
- Can also be used for **unions**, **tuples**, and **complex type combinations**.

### Syntax and Features:

1. Declared using the `=` assignment syntax:

   ```ts
   type Age = number;
   ```

2. Extended using the **intersection (`&`)** operator:

   ```ts
   type Name = { name: string };
   type Person = Name & Age;
   ```

3. Can define unions and other combinations:
   ```ts
   type Developer = Frontend | Backend;
   ```

---

---

### Example: Type with Union (`|`)

```ts
type Frontend = {
  frontendSkills: string[];
};

type Backend = {
  backendSkills: string[];
};

type Developer = Frontend | Backend;

const developer: Developer = {
  frontendSkills: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
};
```

### Example: Type with Intersection (`&`)

```ts
type Frontend = {
  frontendSkills: string[];
};

type Backend = {
  backendSkills: string[];
};

type FullStackDeveloper = Frontend & Backend;

const developer: FullStackDeveloper = {
  frontendSkills: ["HTML", "CSS", "Tailwind", "JavaScript", "React"],
  backendSkills: ["Node.js", "Express", "NoSQL", "SQL"],
};
```

---

## ✅ Interface in TypeScript

### Description:

- Commonly used to define the **structure of objects**.
- Ideal for use with **classes**, **object shapes**, and **object-oriented patterns**.

### Syntax and Features:

1. Declared **without** an `=` symbol:

   ```ts
   interface Person {
     name: string;
     age: number;
   }
   ```

2. Extended using the **`extends`** keyword:

   ```ts
   interface Employee extends Person {
     employeeId: string;
   }
   ```

3. Supports **declaration merging**, which allows multiple declarations with the same name to be merged.
