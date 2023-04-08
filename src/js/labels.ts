let formData = {
    order: '',
    family: '',
    subfamily: '',
    tribe: '',
    genus: '',
    species: '',
    subspecies: '',
    determiner_firstname: '',
    determiner_lastname: '',
    determined_year: '',
    usi: '',
    preparer_firstname: '',
    preparer_lastname: '',
    preparation: '',
    preparation_date: '',
    sex: '',
    stage: '',
    labels_printed: '',
    labeled: '',
    photographed: '',
    identified: '',
    country: '',
    state: '',
    county: '',
    locality: '',
    gps_lat: '',
    gps_long: '',
    elevation: '',
    collecting_trip: '',
    day: '',
    month: '',
    year: '',
    collector_firstname: '',
    collector_lastname: '',
    method: '',
    weather: '',
    temperature: '',
    time_of_day: '',
    habitat: '',
    notes: ''
};

document.addEventListener('DOMContentLoaded', initializeForm);

function initializeForm() {
    const form = document.getElementById('label-form');
    const inputs = form?.querySelectorAll('input');
    const selects = form?.querySelectorAll('select');
    const submitBtn = form?.querySelector('button');
    const textareas = form?.querySelectorAll('textarea');

    if (inputs && selects && textareas) {
        [inputs, selects, textareas].forEach((array) => {
            addChangeEvent(array);
        });
    }

    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Turn the form data object into an array of strings in format '${key}=${value}&'
        let formArray: Array<string> = [];
        let key: keyof typeof formData;

        for (key in formData) {
            formArray = [...formArray, `${key}=${formData[key]}&`];
        }

        // Convert the array of strings into just one string, and remove the '&' character on the last string
        let formString = formArray.join("");
        formString = formString.slice(0, formString.length - 1);

        const url = `https://api.meganemccartycollection.com/api/specimens/specimen-records?${formString}`;
        const options = {
            method: 'get',
            'content-type': 'application/json',
        }

        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const transformedData = data.map((label: any) => {
                    return `
                        <div class="single-label">
                            <div class="label-locality">
                                <span>
                                    ${label.country ? label.country.abbr : ''}
                                    ${label.state ? label.state.abbr : ''}
                                    ${label.county ? label.county.county_abbr : ''}
                                </span>
                                <span>
                                    ${label.locality ? label.locality.range : ''}
                                    ${label.locality ? label.locality.town : ''}
                                </span>
                                <span>
                                    ${label.locality ? label.locality.name : ''}
                                </span>
                                <span>
                                    ${label.gps && label.gps.latitude ? `${label.gps.latitude}°N` : ''}
                                    ${label.gps && label.gps.longitude ? `${Math.abs(label.gps.longitude)}°W` : ''}
                                    ${label.gps && label.gps.elevation ? `${label.gps.elevation}m` : ''}
                                </span>
                                <span>
                                    ${label.collected_date} ${label.display_collectors}
                                </span>
                                <span>
                                    ${label.usi}
                                </span>
                            </div>
                            <div class="label-notes">
                                <span>
                                    ${label.method}
                                </span>
                                <span>
                                    ${label.weather} ${label.temp_C} ${label.temp_F ? `(${label.temp_F})` : ''}
                                    ${label.time_of_day}
                                </span>
                                <span>
                                    ${label.habitat}
                                </span>
                            </div>
                            <div class="label-taxonomy">
                                ${label.taxon_json.name
                                    ? `
                                        <span>
                                            ${label.genus.name
                                                ? `<i>${label.taxon_json.name}</i>`
                                                : label.taxon_json.name}
                                        </span>
                                        <span>
                                            ${label.taxon_json.authority}
                                        </span>
                                    `
                                    : null}
                                ${label.display_determiner
                                    ? `<span>${label.display_determiner} ${label.determined_year}</span>`
                                    : null}
                            </div>
                        </div>
                    `;
                });

                const labelOutput = document.getElementById('label-output');
                if (labelOutput) {
                    labelOutput.innerHTML = `<p>${transformedData.length} labels generated for the above data</p>`
                    transformedData.forEach((label: HTMLElement) => {
                        labelOutput.innerHTML += label;
                    });
                }
            });
    });
}

export function addChangeEvent(elements: NodeListOf<HTMLInputElement> | NodeListOf<HTMLSelectElement> | NodeListOf<HTMLTextAreaElement>) {
    return elements.forEach((element) => {
        element.addEventListener('change', () => {
            return formData = {
                ...formData,
                [element.name]: element.value,
            };
        });
    });
}