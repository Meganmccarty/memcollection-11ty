/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function getFamilies() {
    const url = 'https://api.meganemccartycollection.com/api/taxonomy/nested-families/';

    return EleventyFetch(url, {
        duration: '1d',
        type: 'json',
    });
};
