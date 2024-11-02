javascript:(function() {
    const gifUrl = 'https://media.tenor.com/6m3I1g_WiokAAAAM/fish-spin-sha.gif';

    const replaceTextWithFish = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            if (node.nodeValue.trim()) {
                node.nodeValue = 'fish';
            }
        } else {
            node.childNodes.forEach(replaceTextWithFish);
        }
    };

    const replaceContent = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            img.src = gifUrl;
        });

        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
            const bgImage = window.getComputedStyle(el).backgroundImage;
            if (bgImage && bgImage !== 'none') {
                el.style.backgroundImage = `url(${gifUrl})`;
            }
        });

        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            video.src = gifUrl;
            video.load();
        });

        replaceTextWithFish(document.body);
    };

    setInterval(replaceContent, 200);
})();
