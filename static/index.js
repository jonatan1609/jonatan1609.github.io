function show(doc) {
    let req = new XMLHttpRequest();
    req.open('GET', `/blogs/${doc}`);
    req.onreadystatechange = () => {
        let div = document.getElementById('content');
        div.innerHTML = req.responseText;
    }
    req.send();
}