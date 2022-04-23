# Config Usage
Docgen config is pretty straightforward. Just place a file named `docgen.json` in the root of your project.
and copy this:

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json"
}
```

The config uses a special JSON parser that allows for use of comments in the JSON so feel free to use comments!

## Properties
Now that you understand how to setup the config file. We'll run you down on properties contained within the config file.

### `buildOptions`
`required`

Docgen build options. Most properties contained within here
directly correlate with the behaviour of how the docs are built/handled.

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
  }
}
```

#### `root`
`required` `string`

Root is the relative path from CWD execution of docgen to the folder containing all generated `.d.ts` files. This is where docgen will pull
all of its information so this is the most important step...

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "root": "dist"
    ...
  }
}
```

#### `out`
`required` `string`
Out is the relative path from CWD execution of docgen to the folder
where all generated MDX is outputted. This is the second most important
step.

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "out": "docs"
    ...
  }
}
```

#### `mixins`
`string` | `string[]`

Mixins can either be a string or array of string which are blob formatted. Docgen will find all files correlating to the provided
blobs and output them with the generated MDX in the `out` directory.

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "mixins": "boilerplate/*.md",
    "mixins": ["boilerplate/*.md", "examples"]
    ...
  }
}
```

#### `resolvers`
`Record<string, string | Record<string, string>>`

Resolvers are useful when needed to link external sources for types used. You can provide an object containing the modules name and a link
where docgen can concatenate the imported foreign object names to the end of OR you can provide the module name with another object mapping out each imported foreign object and its respective documentation accordingly.

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "resolvers": {
      "module_name": "https://example.com/docs"
    },
    "resolvers": {
      "module_name": {
        "Object": "https://example.com/docs/Object"
      }
    },
    ...
  }
}
```

#### `ignore`
`string` | `string[]`

Ignore can either be a string or array of string which are blob formatted. Docgen will find all files correlating to the provided
blobs and ignore them when mapping out the generated declarations.

```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "ignore": "protected",
    "ignore": ["protected", "util"]
    ...
  }
}
```
#### `verbose`
`boolean`

Outputs verbose logs when doing things. Allows for easier debugging for broken things (and reporting issues).
```json
{
  "$schema": "https://mcbe-utilities.github.io/docgen/docgen.schema.json",
  "buildOptions": {
    ...
    "verbose": true
    ...
  }
}
```

### `styleOptions`

WIP...