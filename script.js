document.addEventListener('DOMContentLoaded', () => {
    console.log("site loaded")
    
    const recommendedVideos = [
        {
            title: "How I met your mother | Season 2 | Episode 1",
            slug: "how-i-met-your-mother-s2-e1",
            href: "./index.html?v=how-i-met-your-mother-s2-e1",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/e1.jpg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 2",
            slug: "how-i-met-your-mother-s2-e2",
            href: "./index.html?v=how-i-met-your-mother-s2-e2",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/e2.jpeg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 3",
            slug: "how-i-met-your-mother-s2-e3",
            href: "./index.html?v=how-i-met-your-mother-s2-e3",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/e3.jpeg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 4",
            slug: "how-i-met-your-mother-s2-e4",
            href: "./index.html?v=how-i-met-your-mother-s2-e4",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/e4.jpg"
        },
        {
            title: "How I met your mother | Season 2 | Episode 5",
            slug: "how-i-met-your-mother-s2-e5",
            href: "./index.html?v=how-i-met-your-mother-s2-e5",
            videoUrl: "./assets/video.mp4",
            thumbnail: "./assets/e5.jpeg"
        }
    ];

   
    const player = document.querySelector(".video-player");
    const thumbnail = document.querySelector(".video-thumbnail");
    const playBtn = document.querySelector(".play-icon");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const currentVideoSlug = urlParams.get("v");
    const currentVideo = recommendedVideos.find((v) => v.slug === currentVideoSlug);
    const videoTitle = document.querySelector(".video-title");
    

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
                loadVideo(video);
            })

            document.querySelector(".recommended-videos").appendChild(videoElement);
        });
    }

    const loadVideo = (video) => {
        thumbnail.src = video.thumbnail;
        thumbnail.style.display = "block";
        videoTitle.textContent = video.title;

        player.src = video.videoUrl;

        player.addEventListener('loaded', () => {
            thumbnail.style.display = "none";
            playBtn.style.display = "none";

            player.load();
        })
        
    }

    player.addEventListener('play', () => {
        thumbnail.style.display = "none";
        playBtn.style.display = "none";
    })

    player.addEventListener('pause', () => {
        thumbnail.style.display = "block";
        playBtn.style.display = "block";
    })
    
    playBtn.addEventListener('click', () => {
        thumbnail.style.display = "none";
        playBtn.style.display = "none";
        player.play();
    })

    loadRecommendedVideos();
    console.log(currentVideo);
    loadVideo(currentVideo || recommendedVideos[0]);
});

