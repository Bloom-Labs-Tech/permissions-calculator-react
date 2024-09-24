# @bloomlabs/permission-calculator-react

React hook for managing permissions using the [@bloomlabs/permission-calculator](https://www.npmjs.com/package/@bloomlabs/permission-calculator) library.

This package provides a simple React hook, `usePermissionCalculator`, that allows you to manage permission flags in your React applications with ease. Additionally, a `PermissionCalculatorComponent` is included for easy permission management in UI components.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Example](#example)
- [License](#license)

## Installation

You can install this package using your favorite package manager:

```bash
npm install @bloomlabs/permission-calculator-react
```

```bash
yarn add @bloomlabs/permission-calculator-react
```

```bash
pnpm add @bloomlabs/permission-calculator-react
```

```bash
bun add @bloomlabs/permission-calculator-react
```

## Usage

This package exports a `usePermissionCalculator` React hook for managing permissions and a `PermissionCalculatorComponent` that provides an interactive UI for toggling permissions.

### Basic Setup (Hook Usage)

```tsx
"use client";

import { usePermissionCalculator } from "@bloomlabs/permission-calculator-react";
import { PermissionFlags } from "@bloomlabs/permission-calculator";

function App() {
  const {
    permissions,
    permissionsList,
    addPermission,
    removePermission,
    hasPermission,
    setPermissions,
  } = usePermissionCalculator(0n | undefined); // Initialize with no permissions

  return (
    <div>
      <h1>Permissions</h1>
      <p>Current permissions: {permissions.toString()}</p>
      <p>Permissions List: {permissionsList.join(", ")}</p>

      <button onClick={() => addPermission(PermissionFlags.ADMINISTRATOR)}>
        Add Administrator
      </button>

      <button onClick={() => removePermission(PermissionFlags.ADMINISTRATOR)}>
        Remove Administrator
      </button>

      <p>
        Has Administrator permission:{" "}
        {hasPermission(PermissionFlags.ADMINISTRATOR).toString()}
      </p>
    </div>
  );
}
```

## API

### `usePermissionCalculator`

```ts
usePermissionCalculator(initialPermissions?: bigint): {
  permissions: bigint;
  permissionsList: string[];
  addPermission: (permission: PermissionFlagResolvable) => void;
  removePermission: (permission: PermissionFlagResolvable) => void;
  hasPermission: (permission: PermissionFlagResolvable) => boolean;
  setPermissions: (permissions: PermissionFlagResolvable) => void;
}
```

#### Parameters

- **`initialPermissions`** (`bigint`) - The initial permissions value. Defaults to `0n` if not provided.

#### Returns

- **`permissions`** (`bigint`): The current permissions value.
- **`permissionsList`** (`string[]`): The list of permissions based on the current permissions value.
- **`addPermission`** (`(permission: PermissionFlagResolvable) => void`): Adds a permission to the current permissions.
- **`removePermission`** (`(permission: PermissionFlagResolvable) => void`): Removes a permission from the current permissions.
- **`hasPermission`** (`(permission: PermissionFlagResolvable) => boolean`): Checks if a specific permission is present.
- **`setPermissions`** (`(permissions: PermissionFlagResolvable) => void`): Sets a new set of permissions.

## License

This project is licensed under the [MIT License](./LICENSE).

---

For more details, check out the [Permission Calculator GitHub repository](https://github.com/bloom-labs-tech/permissions-calculator).
