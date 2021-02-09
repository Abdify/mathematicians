
const displayVideo = () => {
    const key = 'AIzaSyA6xp2DpSffrB6JdfgucgwaVVriUcccTRE';
    //const id = 'N8HOn3K49Pg';
    const id = window.location.href.match(/id=(.+)/)[1];

    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${key}`)
    .then(resopnse => resopnse.json())
    .then(data => {
        console.log(data);
        document.getElementById('videoPlayer').setAttribute('src', `https://www.youtube.com/embed/${id}?loop=1&rel=0`);
        const videoTitle = data.items[0].snippet.title;
        document.getElementById('videoTitle').innerText = videoTitle;
    })
}
// displayVideo();

[...document.querySelectorAll('.showTestAnswerBtn')].forEach((answer, i) => {
    answer.addEventListener('click', () => {
        [...document.querySelectorAll('.testAnswer')][i].style.display = 'block';
    })
});

[...document.querySelectorAll('.reaction')].forEach((reaction,i,array) => {
    reaction.addEventListener('click', () => {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            element.classList.remove('active');
        }
        reaction.classList.add("active");
    })
})