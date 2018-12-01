if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js', {scope: './'})
        .then(function(registration) {
            console.log('Service worker registration', registration)
        })
        .catch(function(err) {
            console.log('Service worker registration error: ', err)
        })
}