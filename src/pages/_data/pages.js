/* eslint-disable @typescript-eslint/no-var-requires */
const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function getSpeciesPages() {
    const url = 'https://api.meganemccartycollection.com/api/pages/species-pages/';

    return EleventyFetch(url, {
        duration: '1d',
        type: 'json',
    });
};
