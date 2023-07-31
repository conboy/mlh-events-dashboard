async function load() {
  // Fetch data from google appscript API Endpoint
  const response = await fetch('https://script.google.com/macros/s/AKfycbwpPmdbIAvx7SY3nrht0ZjTKlUqSLDqrBCJe5Iyiz1K6v1gRT39Iid-fAFdu-88Nt-i/exec');

  const events = await response.json();

  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';

  // Loop through events and display them in html
  for (let event of events) {
    eventsContainer.innerHTML += `
    <div class="card w-72 glass">
      <figure><img src="${event.Image}" alt="${event.Name}"/></figure>
      <div class="card-body">
        <h2 class="card-title">${event.Name}</h2>
        <p>${event.Location}</p>
        <p>${event.Date}</p>
        <div class="card-actions justify-end">
          <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
        </div>
      </div>
    </div>`
  }

}

load();
