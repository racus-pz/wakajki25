import ReactGA from 'react-ga';

// Initialize Facebook Pixel
declare const fbq: any;

// Initialize TikTok Pixel
declare global {
  interface Window {
    TiktokAnalytics: any;
  }
}

export const initializeAnalytics = (gaTrackingId: string) => {
  // Initialize Google Analytics
  ReactGA.initialize(gaTrackingId);

  // Initialize Facebook Pixel
  if (typeof window !== 'undefined') {
    !function(f:any,b:any,e:any,v:any,n:any,t:any,s:any)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
  }

  // Initialize TikTok Pixel
  if (typeof window !== 'undefined') {
    !function (w: any, d: any, t: any) {
      w.TiktokAnalytics = w.TiktokAnalytics || {};
      w.TiktokAnalytics.track = w.TiktokAnalytics.track || function () {
        (w.TiktokAnalytics.q = w.TiktokAnalytics.q || []).push(arguments);
      };
      var s = d.createElement(t);
      s.async = true;
      s.src = 'https://analytics.tiktok.com/i18n/pixel/sdk.js?sdkid=YOUR_TIKTOK_PIXEL_ID';
      var x = d.getElementsByTagName(t)[0];
      x.parentNode.insertBefore(s, x);
    }(window, document, 'script');
  }
};

export const trackPageView = (path: string) => {
  ReactGA.pageview(path);
  if (typeof fbq !== 'undefined') {
    fbq('track', 'PageView');
  }
  if (typeof window.TiktokAnalytics !== 'undefined') {
    window.TiktokAnalytics.track('PageView');
  }
};

export const trackEvent = (category: string, action: string) => {
  ReactGA.event({
    category,
    action,
  });
  if (typeof fbq !== 'undefined') {
    fbq('track', action);
  }
  if (typeof window.TiktokAnalytics !== 'undefined') {
    window.TiktokAnalytics.track(action);
  }
};