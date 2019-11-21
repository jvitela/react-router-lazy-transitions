import _noop from 'lodash.noop'
import _constant from 'lodash.constant'

/**
 * Async sleep
 * See: https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep
 * @param {number} ms 
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Attempts to make an async request with retries and backoff
 * Adapted from: https://gist.github.com/briancavalier/842626
 * @param {async function} asyncReq 
 * @param {number} options.maxRetries 
 * @param {number} options.retryInterval 
 * @param {number} options.maxRetryInterval
 * @param {function} options.onFail
 * @param {function} options.onReady
 */
export async function tryAtMost(
  asyncReq, 
  { // options
    maxRetries = 5, 
    retryInterval = 250, 
    maxRetryInterval = 1000, 
    onFail = _noop, 
    onReady = _noop,
    canRetry = _constant(true)
  } = {}
) {
  let retries = 0;
  while (retries++ < maxRetries) {
    try {
      const result = await asyncReq();
      onReady({ retries, result });
      return result;

    } catch (error) {
      onFail({ retries, maxRetries, error });
      if (retries >= maxRetries || !canRetry(error)) {
        throw error;
      }
      const interval = Math.min(maxRetryInterval, retryInterval * retries);
      await sleep(interval);
    }
  }
}
