// utils/eventListeners.js

// This function attempts to add global passive listeners
// before other scripts might add non-passive ones.
export function applyPassiveEventListeners() {
    // Define the events we want to make passive
    const events = ['touchstart', 'touchmove', 'wheel'];

    events.forEach(event => {
        // Check if the browser supports passive listeners (most modern browsers do)
        let supportsPassive = false;
        try {
            const opts = Object.defineProperty({}, 'passive', {
                get() {
                    supportsPassive = true;
                }
            });
            window.addEventListener('test', null, opts);
        } catch (e) { /* ignore */ }

        // If passive listeners are supported, add our global listener
        if (supportsPassive) {
            // This will effectively tell the browser that ANY subsequent listener 
            // for 'touchstart', 'touchmove', or 'wheel' on the document 
            // should ideally be treated as passive.
            // Note: This is a bit of a hack and might not always completely suppress the warning
            // if the third-party script is very aggressive or attaches listeners in a unique way.
            document.addEventListener(event, null, { passive: true });
        }
    });
}