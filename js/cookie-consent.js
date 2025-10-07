/**
 * GDPR-Compliant Cookie Consent Banner
 * Infinidatum - Causal MMA
 */

(function() {
    'use strict';

    // Configuration
    const COOKIE_NAME = 'causalmma_cookie_consent';
    const COOKIE_EXPIRY_DAYS = 365;

    // Check if user has already made a choice
    function getCookieConsent() {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === COOKIE_NAME) {
                return value;
            }
        }
        return null;
    }

    // Set cookie consent
    function setCookieConsent(value) {
        const date = new Date();
        date.setTime(date.getTime() + (COOKIE_EXPIRY_DAYS * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = COOKIE_NAME + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    // Load Google Analytics
    function loadGoogleAnalytics() {
        // Google Analytics is already loaded in the head, just enable it
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'granted'
            });
            console.log('✅ Google Analytics enabled');
        }
    }

    // Disable Google Analytics
    function disableGoogleAnalytics() {
        if (typeof gtag === 'function') {
            gtag('consent', 'update', {
                'analytics_storage': 'denied'
            });
            console.log('❌ Google Analytics disabled');
        }
        // Set opt-out cookie for Google Analytics
        window['ga-disable-G-DZGTD1T57S'] = true;
    }

    // Create and show cookie banner
    function showCookieBanner() {
        const banner = document.createElement('div');
        banner.id = 'cookie-consent-banner';
        banner.innerHTML = `
            <div class="cookie-consent-content">
                <div class="cookie-consent-text">
                    <strong>🍪 Cookie Consent</strong>
                    <p>We use cookies to improve your experience and analyze website traffic. By clicking "Accept", you consent to our use of cookies. <a href="privacy.html" target="_blank">Privacy Policy</a></p>
                </div>
                <div class="cookie-consent-buttons">
                    <button id="cookie-accept" class="cookie-btn cookie-btn-accept">Accept All</button>
                    <button id="cookie-reject" class="cookie-btn cookie-btn-reject">Reject All</button>
                    <button id="cookie-customize" class="cookie-btn cookie-btn-customize">Customize</button>
                </div>
            </div>
        `;

        document.body.appendChild(banner);

        // Event listeners
        document.getElementById('cookie-accept').addEventListener('click', function() {
            setCookieConsent('accepted');
            loadGoogleAnalytics();
            hideBanner();
        });

        document.getElementById('cookie-reject').addEventListener('click', function() {
            setCookieConsent('rejected');
            disableGoogleAnalytics();
            hideBanner();
        });

        document.getElementById('cookie-customize').addEventListener('click', function() {
            showCustomizeModal();
        });
    }

    // Hide cookie banner
    function hideBanner() {
        const banner = document.getElementById('cookie-consent-banner');
        if (banner) {
            banner.style.animation = 'slideDown 0.3s ease-out';
            setTimeout(function() {
                banner.remove();
            }, 300);
        }
    }

    // Show customize modal
    function showCustomizeModal() {
        const modal = document.createElement('div');
        modal.id = 'cookie-customize-modal';
        modal.innerHTML = `
            <div class="cookie-modal-overlay"></div>
            <div class="cookie-modal-content">
                <h3>Cookie Preferences</h3>
                <p>Choose which cookies you want to accept:</p>

                <div class="cookie-option">
                    <div class="cookie-option-header">
                        <label>
                            <input type="checkbox" id="cookie-essential" checked disabled>
                            <strong>Essential Cookies</strong> (Required)
                        </label>
                    </div>
                    <p class="cookie-option-description">These cookies are necessary for the website to function and cannot be disabled.</p>
                </div>

                <div class="cookie-option">
                    <div class="cookie-option-header">
                        <label>
                            <input type="checkbox" id="cookie-analytics">
                            <strong>Analytics Cookies</strong>
                        </label>
                    </div>
                    <p class="cookie-option-description">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously (Google Analytics).</p>
                </div>

                <div class="cookie-modal-buttons">
                    <button id="cookie-save-preferences" class="cookie-btn cookie-btn-accept">Save Preferences</button>
                    <button id="cookie-cancel" class="cookie-btn cookie-btn-reject">Cancel</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Pre-check analytics if previously accepted
        const consent = getCookieConsent();
        if (consent === 'accepted') {
            document.getElementById('cookie-analytics').checked = true;
        }

        // Event listeners
        document.getElementById('cookie-save-preferences').addEventListener('click', function() {
            const analyticsEnabled = document.getElementById('cookie-analytics').checked;
            if (analyticsEnabled) {
                setCookieConsent('accepted');
                loadGoogleAnalytics();
            } else {
                setCookieConsent('rejected');
                disableGoogleAnalytics();
            }
            modal.remove();
            hideBanner();
        });

        document.getElementById('cookie-cancel').addEventListener('click', function() {
            modal.remove();
        });

        modal.querySelector('.cookie-modal-overlay').addEventListener('click', function() {
            modal.remove();
        });
    }

    // Initialize on page load
    function init() {
        const consent = getCookieConsent();

        if (consent === null) {
            // No consent given yet - show banner
            showCookieBanner();
            // Disable analytics by default until consent
            disableGoogleAnalytics();
        } else if (consent === 'accepted') {
            // User has accepted - load analytics
            loadGoogleAnalytics();
        } else {
            // User has rejected - disable analytics
            disableGoogleAnalytics();
        }
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose function to revoke consent (for privacy policy page)
    window.revokeCookieConsent = function() {
        document.cookie = COOKIE_NAME + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        location.reload();
    };

})();
