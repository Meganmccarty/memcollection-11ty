export function transformData(data: Array<object>) {
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
                        : ''}
                    ${label.display_determiner
                        ? `<span>${label.display_determiner} ${label.determined_year}</span>`
                        : ''}
                </div>
            </div>
        `;
    });

    const labelOutput = document.getElementById('label-output');
    if (labelOutput && labelOutput.previousElementSibling) {
        labelOutput.previousElementSibling.innerHTML = `${transformedData.length} labels generated for the above data`
        transformedData.forEach((label: any) => {
            labelOutput.innerHTML += label;
        });
    }
}
