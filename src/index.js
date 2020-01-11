import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
    },
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
        .then(function(registration) {
            console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function(error) {
            console.log('Service worker registration failed, error:', error);
        });
}

export default app;
