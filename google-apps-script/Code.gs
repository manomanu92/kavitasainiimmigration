/**
 * Kavita Saini Immigration — Google Apps Script backend
 *
 * Deploy this as a Web App:
 *   Extensions → Apps Script → Deploy → New deployment
 *   Type: Web App
 *   Execute as: Me
 *   Who has access: Anyone
 *
 * IMPORTANT — after any code change, create a NEW deployment
 * (not "Manage deployments → edit existing"). Copy the new URL to .env.local.
 *
 * Sheet structure (auto-created if tabs don't exist):
 *   "Contact"  → Timestamp | Name | Email | Subject | Message
 *   "Callback" → Timestamp | Name | Email | Phone | Service
 *
 * NOTE: We use doGet(e) + query params instead of doPost because GAS
 * redirects POST requests (302) and the browser strips the body on redirect,
 * so e.postData.contents always arrives empty from a browser fetch.
 */

// ─── CONFIGURATION ───────────────────────────────────────────────────────────
const SPREADSHEET_ID = 'YOUR_GOOGLE_SHEET_ID'; // ← paste your Sheet ID here
const NOTIFY_EMAIL   = 'YOUR_EMAIL@gmail.com';  // ← notification recipient
// ─────────────────────────────────────────────────────────────────────────────

function doGet(e) {
  try {
    const data = e.parameter;
    const ss   = SpreadsheetApp.openById(SPREADSHEET_ID);

    if (data.formType === 'callback') {
      let sheet = ss.getSheetByName('Callback');
      if (!sheet) {
        sheet = ss.insertSheet('Callback');
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Service']);
      }
      sheet.appendRow([
        new Date(),
        data.name     || '',
        data.email    || '',
        data.phone    || '',
        data.visaType || ''
      ]);

      MailApp.sendEmail({
        to:      NOTIFY_EMAIL,
        subject: '📞 New Callback Request — ' + (data.name || 'Unknown'),
        body: [
          'A new callback request was submitted on kavitasainiimmigration.com',
          '',
          'Name    : ' + data.name,
          'Email   : ' + data.email,
          'Phone   : ' + data.phone,
          'Service : ' + data.visaType,
          '',
          'Submitted at: ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ].join('\n')
      });

    } else {
      let sheet = ss.getSheetByName('Contact');
      if (!sheet) {
        sheet = ss.insertSheet('Contact');
        sheet.appendRow(['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
      }
      sheet.appendRow([
        new Date(),
        data.name    || '',
        data.email   || '',
        data.subject || '',
        data.message || ''
      ]);

      MailApp.sendEmail({
        to:      NOTIFY_EMAIL,
        subject: '✉️ Contact Form: ' + (data.subject || 'No subject'),
        body: [
          'A new contact message was submitted on kavitasainiimmigration.com',
          '',
          'Name    : ' + data.name,
          'Email   : ' + data.email,
          'Subject : ' + data.subject,
          'Message : ' + (data.message || '(none)'),
          '',
          'Submitted at: ' + new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ].join('\n')
      });
    }

    return _ok();

  } catch (err) {
    Logger.log('doGet error: ' + err.message);
    return _err(err.message);
  }
}

function _ok() {
  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function _err(message) {
  return ContentService
    .createTextOutput(JSON.stringify({ success: false, error: message }))
    .setMimeType(ContentService.MimeType.JSON);
}
