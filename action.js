document.getElementById('seeAnswer').addEventListener('click', () => {
    window.location.href = './questionPage.html';
});

[...document.querySelectorAll('.gotoLecture')].map(lecture => {
   lecture.addEventListener('click', () => {
    //console.log(document.getElementById('gotoLecture').dataset.videoid)
    const videoId = lecture.dataset.videoid;
    window.location.href = `./questionPage.html?id=${videoId}`;
}) 
});



[...document.querySelectorAll('.course > li')].forEach((course, i) => {
    course.addEventListener('click', () => {
        const item = document.querySelectorAll('.course > li > ul')[i];
        if(item.style.display === ''){
            item.style.display = 'block';
        }
        else{
            item.style.display = '';
        }
    })
});