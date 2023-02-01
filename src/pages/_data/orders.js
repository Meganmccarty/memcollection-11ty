const EleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function() {
    const url = `http://api.meganemccartycollection.com/api/taxonomy/orders/`;

    return EleventyFetch(url, {
        duration: "1d",
        type: "json"
    });
};