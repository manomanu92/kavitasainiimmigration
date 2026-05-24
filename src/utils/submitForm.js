/**
 * Shared utility for submitting contact/callback forms to Google Sheets
 * via a Google Apps Script Web App.
 *
 * Usage:
 *   import { submitForm } from '../utils/submitForm';
 *   await submitForm({ formType: 'contact', name, email, subject, message });
 *   await submitForm({ formType: 'callback', name, email, phone, visaType });
 *
 * Configure VITE_GOOGLE_SCRIPT_URL in .env.local (see .env.example).
 */

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

/**
 * @param {object} data - form fields + formType ('contact' | 'callback')
 * @returns {Promise<void>}
 * @throws {Error} if the submission fails
 */
export async function submitForm(data) {
  if (!SCRIPT_URL) {
    // During local dev without the env var, just log and resolve so the
    // success UX can still be tested.
    console.warn(
      '[submitForm] VITE_GOOGLE_SCRIPT_URL is not set — submission skipped.\n' +
      'Add it to .env.local to enable Google Sheets logging.'
    );
    console.info('[submitForm] Would have sent:', data);
    return;
  }

  // GAS web apps redirect POST requests (302) and the browser strips the body
  // on redirect — so e.postData.contents arrives empty. GET requests survive
  // the redirect with query params intact via e.parameter, so we use GET.
  const url = new URL(SCRIPT_URL);
  Object.entries(data).forEach(([k, v]) => url.searchParams.append(k, String(v)));

  await fetch(url.toString(), {
    method: 'GET',
    mode: 'no-cors'
  });
}
