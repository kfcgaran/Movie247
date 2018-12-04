export default (urls) => {
    return urls.map(url => fetch(url)
        .then(response => response.json()))
}