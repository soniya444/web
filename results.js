document.addEventListener('DOMContentLoaded', function() {
    // Get the destination from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const destination = urlParams.get('destination');

    // Set the title of the results page
    document.getElementById('resultsTitle').innerText = `Results for ${destination}`;

    // Simulated data for flights, buses, and hotels (replace with actual API calls or data)
    const flights = ['Flight A123 - 9:00 AM', 'Flight B456 - 12:00 PM', 'Flight C789 - 6:00 PM'];
    const buses = ['Bus X - 8:00 AM', 'Bus Y - 1:00 PM', 'Bus Z - 5:00 PM'];
    const hotels = ['Hotel Alpha', 'Hotel Beta', 'Hotel Gamma'];

    // Display the flights
    const flightList = document.getElementById('flightList');
    flights.forEach(flight => {
        const li = document.createElement('li');
        li.innerText = flight;
        flightList.appendChild(li);
    });

    // Display the buses
    const busList = document.getElementById('busList');
    buses.forEach(bus => {
        const li = document.createElement('li');
        li.innerText = bus;
        busList.appendChild(li);
    });

    // Display the hotels
    const hotelList = document.getElementById('hotelList');
    hotels.forEach(hotel => {
        const li = document.createElement('li');
        li.innerText = hotel;
        hotelList.appendChild(li);
    });
});
