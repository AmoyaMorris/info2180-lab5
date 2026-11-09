document.addEventListener('DOMContentLoaded', function () {

    const lookupButton = document.getElementById('lookup');
    const citiesButton = document.getElementById('lookup-cities');

    lookupButton.addEventListener('click', function () {
        const country = document.getElementById('country').value;

        fetch('world.php?country=' + encodeURIComponent(country))
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            });
    });

    citiesButton.addEventListener('click', function () {
        const country = document.getElementById('country').value;

        fetch('world.php?country=' + encodeURIComponent(country) + '&lookup=cities')
            .then(response => response.text())
            .then(data => {
                document.getElementById('result').innerHTML = data;
            });
    });

});
