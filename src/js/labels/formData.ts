import { transformData } from './transformData';

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

export function addChangeEvent(
    elements: NodeListOf<HTMLInputElement> | NodeListOf<HTMLSelectElement>,
) {
    return elements.forEach((element) => {
        element.addEventListener('change', () => {
            return formData = {
                ...formData,
                [element.name]: element.value,
            };
        });
    });
}

export function handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    /* Turn the form data object into an array of strings
       in format '${key}=${value}&' */
    let formArray: Array<string> = [];
    let key: keyof typeof formData;

    for (key in formData) {
        formArray = [...formArray, `${key}=${formData[key]}&`];
    }

    /* Convert the array of strings into just one string
       Remove the '&' character on the last string */
    let formString = formArray.join("");
    formString = formString.slice(0, formString.length - 1);

    const url = `https://api.meganemccartycollection.com/api/specimens/specimen-records?${formString}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => transformData(data));
}