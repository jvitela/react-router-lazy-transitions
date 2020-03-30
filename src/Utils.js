import _noop from "lodash.noop";
import _constant from "lodash.constant";
import { TOASTS } from "config";
import { addNotice } from "components/Notifications";

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
  {
    // options
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

export class MockFetchFailure {
  constructor() {
    this.retries = 0;
    this.onFail = this.onFail.bind(this);
    this.onReady = this.onReady.bind(this);
    this.canRetry = this.canRetry.bind(this);
  }

  proxy(result) {
    this.result = result;
    return this.fetch.bind(this);
  }

  async fetch() {
    this.retries = (this.retries || 0) + 1;
    if (this.retries > 2) {
      this.retries = 0;
      return this.result;
    }
    throw new Error("Failure");
  }

  onFail() {
    addNotice(TOASTS, `failed to fetch the page #${this.retries}`, 3000);
  }

  onReady() {
    addNotice(TOASTS, "page succesfully fetched", 3000);
  }

  canRetry() {
    return true;
  }
}
