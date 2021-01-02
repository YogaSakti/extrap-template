const {
    fetchJson,
    fetchText,
    fetchBuffer,
    fetchBase64
} = require('../lib/fetcher')
const cheerio = require('cheerio');
const Logger = require("tracer").console(`${__dirname}/lib/logger.js`);
const fs = require("fs");
const readline = require('readline-sync')
const delay = require("delay")
const randomString = require('../lib/random')


let data = {
    base_url: '',
    headers: {}
}

;
(async () => {
    try {
        // readline.question('Are u ready?')
        const uncheck = fs.readFileSync('check/uncheck.txt', 'UTF-8')
        const list = uncheck.split(/\r?\n/);
        for (let i = 0; i < list.length; i++) {
            const text = list[i];
            if (text) {
                Logger.info('[ LIVE ] ' + text)
                fs.appendFileSync('check/Live.txt', text, 'utf-8')
            } else if (!text) {
                Logger.warn('[ DIE ] ' + text)
                fs.appendFileSync('check/Die.txt', text, 'utf-8')
            } else {
                Logger.error('Something went wrong')
            }
            await delay(1000)
        }
    } catch (e) {
        Logger.error(e)
    }
})()