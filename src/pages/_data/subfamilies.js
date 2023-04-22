/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function getSubfamilies() {
    const url = 'https://api.meganemccartycollection.com/api/taxonomy/nested-subfamilies/';

    return EleventyFetch(url, {
        duration: '1d',
        type: 'json',
    });
};
