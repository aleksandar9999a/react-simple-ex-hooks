import { useEffect } from 'react';

/**
 * Use Unmount
 *
 * @param {Function} fn
 *
 * @returns {Void}
 */
export function useUnmount (fn: Function) {
  useEffect(() => {
    return () => {
      fn()
    }
  }, [])
}
