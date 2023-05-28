const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

function getCountryCodesFromHTML() {
    return new Promise((resolve, reject) => {
        fs.readFile('../html/world-map.html', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const dom = new JSDOM(data, { resources: "usable", runScripts: "outside-only", url: "file://" });
                const document = dom.window.document;
                var paths = document.getElementsByTagName('path');
                var countryCodes = [];

                for (var i = 0; i < paths.length; i++) {
                    var classes = paths[i].className.baseVal.split(' ');
                    for (var j = 0; j < classes.length; j++) {
                        if (classes[j].startsWith('sm_state_')) {
                            var countryCode = classes[j].substring(9);
                            countryCodes.push(countryCode);
                        }
                    }
                }
                resolve(countryCodes);
            }
        });
    });
}

function getCountryNamesFromWeb(codes) {
    return axios.get('https://www.iban.com/country-codes')
        .then((response) => {
            if (response.status === 200) {
                const html = response.data;
                const $ = cheerio.load(html);
                let countryNames = {};
                $('table').first().find('tbody tr').each(function (index, element) {
                    const code = $(element).find('td').eq(1).text();
                    let name = $(element).find('td').eq(0).text();

                    // Remove "(the)" from the country name
                    name = name.replace(/\(the\)/g, '').trim();

                    if (codes.includes(code)) {
                        countryNames[code] = name;
                    }
                });
                return countryNames;
            }
        });
}

getCountryCodesFromHTML()
    .then(getCountryNamesFromWeb)
    .then(countries => {
        fs.writeFile('./countries.json', JSON.stringify(countries, null, 2), 'utf8', function (err) {
            if (err) {
                console.error(err);
            } else {
                console.log('Country codes have been successfully saved to countries.json');
            }
        });
    })
    .catch(console.error);
