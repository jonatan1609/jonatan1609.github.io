function show(doc) {
    let req = new XMLHttpRequest();
    req.open('GET', `/jonatan1609.github.io/blogs/${doc}`);
    req.onreadystatechange = () => {
        let div = document.getElementById('content');
        div.innerHTML = req.responseText;
    }
    req.send();
}
