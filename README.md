# Causal Attribution API

**Website**: https://causalmma.com
**API Base URL**: https://api.causalmma.com

Professional-grade marketing attribution powered by causal inference. Go beyond correlation—prove which channels actually cause conversions.

## About

Scientific marketing attribution that reveals true cause-and-effect relationships in customer journeys using 8 verified causal inference methods from economics and medicine. 60-75% more affordable than competitors like Windsor.ai, Northbeam, and Rockerbox.

## Features

- 🔬 **8 Scientific Causal Inference Methods**: Doubly Robust Estimation, Propensity Score Matching, Instrumental Variables, Shapley Values, PC Algorithm, and more
- 📊 **7 Attribution Models**: Data-driven (AI-powered), Shapley, Propensity Score, Instrumental Variables, Time Decay, Position-based, Linear
- ⚡ **Fast Processing**: 4-32ms average response time for real-time optimization
- 🤖 **AI Agent Integration**: Works with OpenAI GPT-4, Anthropic Claude, LangChain
- 💰 **Transparent Pricing**: Starting at $149/month (60-75% cheaper than competitors)
- 🔒 **Local SDK Available**: 100% local processing for maximum data privacy and offline use

## Deployment Options

### Cloud API (Recommended)
- **Best for**: Most users who want zero infrastructure costs
- **Pricing**: $149-$799/month
- **Setup**: Instant—just get an API key
- **Documentation**: [API Docs](https://causalmma.com/docs/api.html) | [Quick Start](https://causalmma.com/docs/quickstart.html) | [Code Examples](https://causalmma.com/docs/examples.html)

### Local SDK (Enterprise)
- **Best for**: Organizations with existing AI infrastructure, strict data privacy requirements, or massive datasets (10M+ rows)
- **Pricing**: Custom (typically $1,500-$8,000/month depending on deployment)
- **Benefits**: 100% local processing, no data leaves your servers, 15-30x faster for large datasets, offline/air-gapped deployment
- **Documentation**: [SDK Docs](https://causalmma.com/docs/sdk.html)

## Quick Start (Cloud API)

```bash
curl -X POST https://api.causalmma.com/api/v1/attribution \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "touchpoints": [
      {
        "customer_id": "c1",
        "timestamp": "2025-01-01T10:00:00",
        "channel": "email",
        "conversion": 0
      },
      {
        "customer_id": "c1",
        "timestamp": "2025-01-01T12:00:00",
        "channel": "paid_search",
        "conversion": 1,
        "conversion_value": 100
      }
    ],
    "attribution_model": "data_driven"
  }'
```

## Quick Start (Local SDK)

```bash
pip install causalattribution-client
```

```python
from causalattribution_client import CausalMMAClient
import pandas as pd

client = CausalMMAClient(license_key="YOUR_LICENSE_KEY")

touchpoints = pd.DataFrame([
    {"customer_id": "c1", "timestamp": "2025-01-01T10:00:00", "channel": "email", "conversion": 0},
    {"customer_id": "c1", "timestamp": "2025-01-01T12:00:00", "channel": "paid_search", "conversion": 1, "conversion_value": 100}
])

results = client.analyze_attribution(touchpoints, attribution_model="data_driven")
print(results)
```

## Documentation

- 📘 [API Reference](https://causalmma.com/docs/api.html) - Complete API documentation
- 🔧 [SDK Documentation](https://causalmma.com/docs/sdk.html) - Local SDK installation and usage
- 🚀 [Quick Start Guide](https://causalmma.com/docs/quickstart.html) - Get started in 5 minutes
- 💻 [Code Examples](https://causalmma.com/docs/examples.html) - Examples in Python, JavaScript, PHP, Ruby, R
- 💰 [Pricing](https://causalmma.com/#pricing) - Simple, transparent pricing

## Attribution Models

| Model | Description | Best For |
|-------|-------------|----------|
| `data_driven` | AI-powered causal inference with doubly robust estimation | Most accurate results |
| `shapley` | Game-theoretic fair credit distribution | Provably fair attribution |
| `propensity_score` | Propensity score matching | Comparing similar customers |
| `instrumental_variables` | Two-stage least squares | Handling unmeasured confounding |
| `time_decay` | Recency-weighted attribution | Recent touchpoints matter more |
| `position` | First & last touch emphasized | Awareness + conversion focus |
| `linear` | Equal credit to all touchpoints | Baseline comparison |

## Contact

- **Email**: [durai@infinidatum.net](mailto:durai@infinidatum.net)
- **Website**: https://causalmma.com
- **API Base**: https://api.causalmma.com
- **GitHub**: https://github.com/rdmurugan/causallm

## Pricing

- **Starter**: $149/month - 10K API requests, 100 req/min
- **Professional**: $399/month - 50K API requests, 500 req/min (Most Popular)
- **Business**: $799/month - 100K API requests, 1000 req/min
- **Enterprise**: Custom - Unlimited requests, Local SDK option, Custom SLAs

All plans include:
- 14-day free trial (no credit card required)
- All attribution models
- Statistical confidence intervals
- Complete documentation
- Email support

## Why Choose Us?

- ✅ **True Causation, Not Correlation**: 8 verified causal inference methods vs. correlation-based tracking
- ✅ **Statistical Certainty**: Every result includes p-values, confidence intervals, and standard errors
- ✅ **Fast & Production-Ready**: 4-32ms response time for real-time optimization
- ✅ **Academically Grounded**: Methods from peer-reviewed economics and medical research
- ✅ **60-75% More Affordable**: $149-$799/month vs. $20K-$100K+/year for competitors
- ✅ **Developer-Friendly**: Simple REST API, integrates in under 10 minutes
