import Raven from 'raven-js';

const sentry_key = '475393c3f88942c6a220111e9a0788fb';
const sentry_app = '1240156';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
