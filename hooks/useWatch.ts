import { useEffect } from 'react';

/**
 * Use Watch
 *
 * @param {Function} fn
 * @param {Any[]} dependencies
 *
 * @returns {Void}
 */
export function useWatch (fn: Function, dependencies: any[]) {
  useEffect(() => {
    fn(...dependencies)
  }, dependencies)
}
