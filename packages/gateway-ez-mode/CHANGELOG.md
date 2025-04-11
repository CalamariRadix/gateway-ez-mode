# @calamari-radix/gateway-ez-mode

## 1.6.3

### Patch Changes

- Updated dependencies [bea08bd]
    - @calamari-radix/sbor-ez-mode@1.2.2

## 1.6.2

### Patch Changes

- Updated dependencies [82fd7be]
    - @calamari-radix/sbor-ez-mode@1.2.1

## 1.6.1

### Patch Changes

- Updated dependencies [7bea651]
    - @calamari-radix/sbor-ez-mode@1.2.0

## 1.6.0

### Minor Changes

- c9ad5a3: Updated metadata extraction by introducing a more generic metadata extraction framework with nice type inference, and refactor some of the resource info fetching functions to use this new method.
  Updated ResourceInfo interface to include functions to fetch metadata, which enables users to fetch custom metadata other than the default ones provided in the metadata standard, which were already included in that object.
- 9fc6736: Improved structure:

    - removed some unnecessary abstraction layers and introduced a familiar design which the regular gateway SDK also uses, with different services which are responsible for different uses.

    Improved error handling:

    - Added and exported some custom errors which are thrown by the services, so that the user can catch them and handle them as they see fit. Documentation has been added to the methods of each service to explain what errors can be thrown and why.

    New features:

    - Easily getting the current state version of the Radix network
    - Easily getting the current epoch of the Radix network
    - Easily getting XRD domains owned by a component (or account)

### Patch Changes

- Updated dependencies [30be698]
- Updated dependencies [9fc6736]
- Updated dependencies [92864ef]
    - @calamari-radix/sbor-ez-mode@1.1.0

## 1.5.0

### Minor Changes

- 981e621: Extracted sbor-ez-mode out of the gateway-ez-mode package and into its own package, but still export it from gateway-ez-mode for convenience.

### Patch Changes

- Updated dependencies [981e621]
    - @calamari-radix/sbor-ez-mode@1.0.0

## 1.4.2

### Patch Changes

- e276399: small test change for changesets ci

## 1.4.1

### Patch Changes

- Test changesets publish
