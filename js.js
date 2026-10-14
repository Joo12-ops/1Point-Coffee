document.addEventListener("DOMContentLoaded", function() {
const anim = document.getElementById("animasi");
    const main = document.getElementById("konten-utama");

    setTimeout(() => {
        anim.style.opacity = "0";
        
        setTimeout(() => {
            anim.style.display = "none";
            main.classList.add("show");
        }, 500)
        
    }, 600)
})

document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("vid");
  if (!video) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(error => {
          console.log("Autoplay was prevented by the browser:", error);
        });
      } else {
        video.pause();
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(video);
});

document.addEventListener("DOMContentLoaded", () => {
  const tersembunyi = document.getElementById("hidden-items");
  if (!tersembunyi) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        tersembunyi.classList.remove("hidden-items");
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(tersembunyi);
});
