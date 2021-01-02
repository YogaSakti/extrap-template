const {
    fetchJson,
    fetchText,
    fetchBuffer,
    fetchBase64
} = require('./lib/fetcher')
const cheerio = require('cheerio');
const Logger = require("tracer").console(`${__dirname}/lib/logger.js`);
const fs = require("fs");
const readline = require('readline-sync')
const delay = require("delay")
const randomString = require('./lib/random')


let data = {
    base_url: '',
    headers: {}
}

;
(async () => {
    try {
        while (true) {
            await delay(1000)
        }
    } catch (e) {
        Logger.error(e)
    }
})()