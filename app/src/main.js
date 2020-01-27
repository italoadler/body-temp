import App from './App.svelte';
import { googleAnalytics } from './analytics.js';
import CookiesEuBanner from '../node_modules/cookies-eu-banner/dist/cookies-eu-banner.min.js';

const app = new App({
  target: document.body
});

new CookiesEuBanner(function () {
  googleAnalytics('UA-156964030-1');
}, true);

export default app;
