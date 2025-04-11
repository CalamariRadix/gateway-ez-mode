# @calamari-radix/sbor-ez-mode

## 1.2.2

### Patch Changes

- bea08bd: minor change in a single error message

## 1.2.1

### Patch Changes

- 82fd7be: Fixed a bug where it was impossible to parse PreciseDecimal types

## 1.2.0

### Minor Changes

- 7bea651: Added an s.infer utility type, which can be used to infer the parsed type from a schema, very similar to zod

## 1.1.0

### Minor Changes

- 9fc6736: - Improve tests with more coverage and compile-time type assertions to make sure type inference is working as expected.
    - Remove redundant file which used to hold some examples (programmatic-json.ts) and move the examples to the main test file (index.test.ts).
    - Updated return type of safeParse to use neverthrow.
- 92864ef: Updated the result type of safeParse in sbor-ez-mode to be a Result from neverthrow, instead of something hand rolled.

### Patch Changes

- 30be698: Removed some redundant code and added some more documentation to `getWithSchema`

## 1.0.0

### Major Changes

- 981e621: Extracted sbor-ez-mode out of the gateway-ez-mode package and into its own package, but still export it from gateway-ez-mode for convenience.
