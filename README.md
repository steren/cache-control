# cache-control
Simple server returning responses with cache-control headers set via query parameters.

Learn more about cache-control headers on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) or [Google Web Fundamentals](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control).

[![Run on Google Cloud](https://deploy.cloud.run/button.svg)](https://deploy.cloud.run)

## Deploy to Cloud Run

To deploy to Cloud Run, use the buttom above, or the following steps:

* Build with `gcloud builds submit --tag gcr.io/[your-gcp-project]/cache-control`
* Deploy with `gcloud run deploy --image gcr.io/[your-gcp-project]/cache-control`
