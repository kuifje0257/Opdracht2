window.addEventListener('load', (event) => {
    console.log('page is fully loaded');

    fetch('data.json')
        .then(response => response.json())
        .then(data => console.log(data));
});
