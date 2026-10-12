# TEFAS Scraper API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Documentation](https://img.shields.io/badge/Documentation-8CA1AF?logo=readthedocs&logoColor=fff)](https://emirtkgz.github.io/tefas-scraper-api)

Unofficial Node.js wrapper for TEFAS API

> [!CAUTION]
> This wrapper is made only for educational purposes. Any malignant use is heavily discouraged. All rights of the API belongs to İstanbul Takas ve Saklama Bankası A.Ş.

# Usage
```js
import { Tefas } from "../tefas/index.js";

var tefas = new Tefas("TLY")
console.log(await tefas.fetchPrice())
``` 
