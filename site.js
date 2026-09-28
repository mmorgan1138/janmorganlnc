// Jan Morgan Legal Nurse Consulting - site behaviour
// Two jobs: the phone-width menu, and turning the intake form into an email
// when no form service is configured (see README.md).

(function () {
  'use strict';

  // Phone menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Intake form
  var form = document.getElementById('intake-form');
  if (!form) return;

  var TO = form.getAttribute('data-to') || '';
  var endpoint = form.getAttribute('action') || '';
  var usesService = /^https?:/i.test(endpoint);

  // Browser validation enforces the required fields; this only gives the
  // PHI checkbox a specific message instead of the generic one.
  var noPhi = form.querySelector('input[name="no_phi"]');
  if (noPhi) {
    var PHI_MSG = 'Please confirm that no medical records or other protected health information are attached.';
    noPhi.addEventListener('invalid', function () { noPhi.setCustomValidity(PHI_MSG); });
    noPhi.addEventListener('change', function () { noPhi.setCustomValidity(''); });
  }

  form.addEventListener('submit', function (e) {
    if (usesService) return; // a form service handles the POST

    e.preventDefault();
    var f = new FormData(form);
    var lines = [
      'Name: ' + (f.get('name') || ''),
      'Firm: ' + (f.get('firm') || ''),
      'Work email: ' + (f.get('email') || ''),
      'Posture: ' + (f.get('posture') || ''),
      'Jurisdiction: ' + (f.get('jurisdiction') || ''),
      'Deadline: ' + (f.get('deadline') || ''),
      '',
      'The matter:',
      (f.get('matter') || ''),
      '',
      'No PHI attached: yes'
    ];
    var subject = 'Website inquiry' + (f.get('firm') ? ' from ' + f.get('firm') : '');
    var href = 'mailto:' + TO + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
    if (href.length > 6000) {
      // Mail programs cap the length of a mailto link; do not pretend it opened.
      setStatus('That description is too long to hand to your email program as a link. Please email ' + TO + ' directly and paste it in.');
      return;
    }
    setStatus('Opening your email program with the matter filled in. If nothing opens, email ' + TO + ' directly.');
    window.location.href = href;
  });

  function setStatus(msg) {
    var el = document.getElementById('intake-status');
    if (el) el.textContent = msg;
  }
})();
