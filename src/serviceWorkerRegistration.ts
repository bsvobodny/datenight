export const registerSW = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW enregistré: ', registration);
        })
        .catch((registrationError) => {
          console.log('Erreur SW: ', registrationError);
        });
    });
  }
};