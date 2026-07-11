


document.addEventListener('DOMContentLoaded', () => {
    console.log("site loaded")

   
    const player = document.querySelector(".video-player");
    const thumbnail = document.querySelector(".video-thumbnail");


    const recommendedVideos = [
        {
            title: "How I met your mother | Season 2 | Episode 1",
            href: "./index.html?v=how-i-met-your-mother-s2-e1",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/video.jpg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 2",
            href: "./index.html?v=how-i-met-your-mother-s2-e2",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/video.jpg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 3",
            href: "./index.html?v=how-i-met-your-mother-s2-e3",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/video.jpg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 4",
            href: "./index.html?v=how-i-met-your-mother-s2-e4",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/video.jpg"
        }
    ];


    const loadRecommendedVideos = () => {
        recommendedVideos.forEach(video => {
            const videoElement = document.createElement("div");
            videoElement.className = "recommended-video-card";

            const videoTitle = document.createElement("p");
            videoTitle.textContent = video.title;
        
            videoElement.appendChild(videoTitle);
        
            videoElement.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title}" width="400" height="400" class="card-thumbnail" />
        
            <div>
                <p>${video.title}</p>

                <div class="video-card-btns">
                    <a href="${video.href}" class="watch-btn">watch now</a>
                    <a href"#like" class="like-btn">like it</a>
                </div>
            </div>
            `
            videoElement.addEventListener('click', () => {        
                thumbnail.src = video.thumbnail;
                thumbnail.style.display = "block";
            
                loadVideo(video);
            })

            document.querySelector(".recommended-videos").appendChild(videoElement);
        });
    }

    const loadVideo = (video) => {
        setTimeout(() => {
            player.src = video.videoUrl; 
            player.load();
        }, 3000)
    }

    player.addEventListener('play', () => {
        thumbnail.style.display = "none";
    })

    thumbnail.classList.add("thumb-hidden");

    loadRecommendedVideos();
    loadVideo(recommendedVideos[0]);
});

