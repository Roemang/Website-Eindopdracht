document.addEventListener('DOMContentLoaded', function () {
    const flexItems = document.querySelectorAll('.flex-item');

    flexItems.forEach(item => {
        const img = item.querySelector('.thumbnail');
        const video = item.querySelector('.video');

        item.addEventListener('mouseover', () => {
            img.style.display = 'none';
            video.style.display = 'block';
            video.play();
        });

        item.addEventListener('mouseout', () => {
            video.style.display = 'none';
            img.style.display = 'block';
            video.pause();
            video.currentTime = 0;
        });
    });
});