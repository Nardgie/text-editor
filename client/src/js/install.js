const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log('👍', 'butInstall-clicked');
    // // Show the install prompt
    // deferredPrompt.prompt();
    // // Wait for the user to respond to the prompt
    // const { outcome } = await deferredPrompt.userChoice;
    // // Optionally, send analytics event with outcome of user choice
    // console.log('👍', 'userChoice-outcome', outcome);
    // // We no longer need the prompt. Clear it up.
    // deferredPrompt = null;
    // // Hide the install button
    // butInstall.style.display = 'none';
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('👍', 'appinstalled', 'Yay! The app is now installed.');
    });
