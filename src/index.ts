'use client';

import { PermissionCalculator, type PermissionFlagResolvable } from '@bloomlabs/permission-calculator';
import { useCallback, useState } from 'react';

export type { PermissionFlagResolvable };

export function usePermissionCalculator(initialPermissions = 0n) {
  const [calculator, setCalculator] = useState(new PermissionCalculator(initialPermissions));
  const [permissionsList, setPermissionsList] = useState<string[]>(calculator.getPermissionsList());

  const addPermission = useCallback((permission: PermissionFlagResolvable) => {
    setCalculator((prevCalculator) => {
      const newCalculator = new PermissionCalculator(prevCalculator.value);
      newCalculator.add(permission);
      setPermissionsList(newCalculator.getPermissionsList());
      return newCalculator;
    });
  }, []);

  const removePermission = useCallback((permission: PermissionFlagResolvable) => {
    setCalculator((prevCalculator) => {
      const newCalculator = new PermissionCalculator(prevCalculator.value);
      newCalculator.remove(permission);
      setPermissionsList(newCalculator.getPermissionsList());
      return newCalculator;
    });
  }, []);

  const hasPermission = useCallback(
    (permission: PermissionFlagResolvable): boolean => calculator.has(permission),
    [calculator],
  );

  const setPermissions = useCallback((permissions: PermissionFlagResolvable) => {
    setCalculator(new PermissionCalculator(permissions));
  }, []);

  return {
    permissions: calculator.value,
    permissionsList,
    addPermission,
    removePermission,
    hasPermission,
    setPermissions,
  };
}
