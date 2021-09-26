window.onload = () => {
    let elems = document.getElementsByClassName("progress");
    for(let elem of elems) {
        let width = 0;
        let percentage = parseInt(elem.innerHTML);
        let id = setInterval(frame, 30);
        function frame() {
            if (width >= percentage) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
                elem.innerHTML = width + '%';
            }
        }
    }
}