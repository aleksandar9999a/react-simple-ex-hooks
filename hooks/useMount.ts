import { useEffect } from 'react';

/**
 * Use Mount
 *
 * @param {Function} fn
 *
 * @returns {Void}
 */
export function useMount (fn: Function) {
  useEffect(() => {
    fn()
  }, [])
}
