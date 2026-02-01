// ──────────────────────────────────────────────────
// Grab references once
// ──────────────────────────────────────────────────
const form          = document.getElementById('contactForm');
const submitBtn     = document.getElementById('submitBtn');
const statusBanner  = document.getElementById('statusBanner');
const statusTitle   = document.getElementById('statusTitle');
const statusMessage = document.getElementById('statusMessage');

// ──────────────────────────────────────────────────
// Helper: show / hide the status banner
// ──────────────────────────────────────────────────
function showStatus(type, title, message) {
  // type = 'success' | 'error'
  statusBanner.className    = 'status-banner ' + type + ' show';
  statusTitle.textContent   = title;
  statusMessage.textContent = message;
}

function hideStatus() {
  statusBanner.className = 'status-banner';
}

// ──────────────────────────────────────────────────
// Simulate an API call (replace this with real fetch)
// ──────────────────────────────────────────────────
function simulateAPICall(data) {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ ok: true }), 1400);
  });
}

// ──────────────────────────────────────────────────
// Form submit handler
// ──────────────────────────────────────────────────
form.addEventListener('submit', async function (e) {
  e.preventDefault(); // stop the browser from reloading the page

  // Hide any previous status
  hideStatus();

  // Collect all field values into one object
  const payload = {
    fullname: document.getElementById('fullname').value.trim(),
    email:    document.getElementById('email').value.trim(),
    phone:    document.getElementById('phone').value.trim(),
    subject:  document.getElementById('subject').value.trim(),
    message:  document.getElementById('message').value.trim(),
  };

  // Disable button & show loading text
  submitBtn.disabled    = true;
  submitBtn.textContent = 'Sending…';

  try {
    // ─── REPLACE THIS BLOCK with a real fetch call ───
    
    // const res = await fetch('/your-api-endpoint', {
    //   method:  'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body:    JSON.stringify(payload),
    // });
    
    // if (!res.ok) throw new Error('Server error: ' + res.status);
    // ──────────────────────────────────────────────────

    await simulateAPICall(payload); // ← simulated for demo

    // Success
    showStatus(
      'success',
      '✓ Message Sent',
      'Thanks, ' + payload.fullname + '! We\'ll reply to ' + payload.email + ' shortly.'
    );

    form.reset(); // clear all fields

  } catch (err) {
    // Something went wrong
    showStatus('error', '✗ Failed to Send', err.message);
  }

  // Re-enable button
  submitBtn.disabled    = false;
  submitBtn.textContent = 'Send Message';
});