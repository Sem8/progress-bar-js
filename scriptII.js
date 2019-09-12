const progress = () => {
    let prg = document.getElementById('progress');
    let counter = document.getElementById('percentCount');
    let count = 5;
    let progress = 25;    

    const frame = () => {
        if (progress == 500 && count == 100) {
            clearInterval(id);
        } else {
            progress += 5;
            count++;
            prg.style.width = progress + 'px';
            counter.innerHTML = count + '%';
        }

    }
    let id = setInterval(frame, 50);
}

progress();