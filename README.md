# minimal node jest typescript template

## Install

```
npm i
```

## How to use

just put whatever you need on index.ts and run with

```bash
npm run dev
```

or
create whatever folder and files you need and its tests. For instance:

```
example
|_main.ts
|_main.test.ts
```


and run

```bash
npm t
```

## Niceties and opinions
### jest enviroment
- jest-watch-typeahead let you filter tests by filename or test name
- use absolute imports from src in test files

### typescript
- global.d.ts overrides .reduce() type, removing unecessary overloads that makes it harder to check type inferrence correctness while writing the callback.
