/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function getSpecimens() {
    const url = 'http://api.meganemccartycollection.com/api/specimens/specimen-records/';

    return EleventyFetch(url, {
        duration: '1d',
        type: 'json',
    });
};
