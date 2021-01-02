const fetch = require('node-fetch')
const Logger = require("tracer").console(`${__dirname}/logger.js`);

/**
 *Fetch Json from Url
 *
 *@param {String} url
 *@param {Object} options
 */
async function fetchJson(url, options) {
    try {
        let response = await fetch(url, options)
        let json = await response.json()
        return json
    } catch (error) {
        return Logger.error(error)
    }
}

/**
 * Fetch Text from Url
 *
 * @param {String} url
 * @param {Object} options
 */
async function fetchText(url, options) {
    try {
        let response = await fetch(url, options)
        let text = await response.text()
        return text
    } catch (error) {
        return Logger.error(error)
    }
}

/**
 * Fetch buffer from url
 * @param {String} url
 */

async function fetchBuffer(url){
    try {
        let response = await fetch(url)
        const _buffer = await response.buffer()
        return _buffer
    } catch (error) {
        return Logger.error(error)
    }
}

/**
 * Fetch base64 from url
 * @param {String} url
 */

async function fetchBase64(url, mimetype){
    try {
        let response = await fetch(url)
        const _mimetype = mimetype || response.headers.get('content-type')
        const _buffer = await response.buffer()
        return (`data:${_mimetype};base64,` + _buffer.toString('base64'))
    } catch (error) {
        return Logger.error(error)
    }
}

module.exports = {
    fetchJson,
    fetchText,
    fetchBuffer,
    fetchBase64
}