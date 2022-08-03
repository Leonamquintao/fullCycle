# Typescript concepts

### Summary

- Writing Typescript is the same as writing Javascript with some "Extra documentation";
- Typescript has no effect on how our code gets executed by the browser or Node;
- It is best to think of Typescript as being like a friend sitting behind you while you are coding;
- Helper to help us to catch errors;

# Notes

### Typescript playground:

`https://www.typescriptlang.org/play/`

### git Branching convention:

`main`, `development`, `trunk`

### Environment

- Install Typescript compiler: `npm install -g typescript ts-node`;
- Check installations status: `tsc --help`;
- Install Prettier - Code Formatter;
- Go to Preferences (`cmd + ,`) > type: `format on save` mark checkbox to add formatting on save the file;
- Format Prettier to use single quotes `(optional I prefer use single quotes instead of double)`;
  -- Go to Preferences (`cmd + ,`) > type: single quotes, scroll down and mark checkbox `Prettier: Single Quotes`.

### Compiler

`tsc index.ts` => create a index.js file

`ts-node index.ts` => run commands combined `tsc index.ts` + `node index.js`;
