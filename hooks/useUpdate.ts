import { useEffect } from 'react';

/**
 * Use Update
 *
 * @param {Function} fn
 *
 * @returns {Void}
 */
export function useUpdate (fn: Function) {
  useEffect(() => {
    fn()
  }, [])
}
