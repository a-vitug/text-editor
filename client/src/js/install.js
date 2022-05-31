const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    installBtn.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
    const eventPrompt = window.deferredPrompt;

    if(!eventPrompt) {
        return;
    }

    eventPrompt.prompt();
    window.deferredPrompt = null;
    installBtn.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
