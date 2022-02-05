const output = document.querySelector('.output');

async function getISSInfo() {
    const res = await fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
                .then(res => res.json())
                .then(data => output.innerHTML = `<ul class="list-group p-5">
                                                <li class="list-group-item"> id: ${data.id}</li>
                                                <li class="list-group-item"> name: ${data.name}</li>
                                                <li class="list-group-item"> day number: ${data.daynum}</li>
                                                <li class="list-group-item"> longitude: ${data.longitude}</li>
                                                <li class="list-group-item"> latitude: ${data.latitude}</li>
                                                <li class="list-group-item"> altitude: ${data.altitude}</li>
                                                </ul>
                `);
}

setInterval(() => {
    getISSInfo();
}, 1000);