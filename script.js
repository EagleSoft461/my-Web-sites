// JSON verisini doğrudan gömdük
document.addEventListener("DOMContentLoaded", function() {
  // Navbar scroll efekti
  const navbar = document.querySelector('nav');
  window.addEventListener('scroll', function(){
    if(window.scrollY > 50){
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Yazılar dizisi
  const posts = [
    {
      title: "İlk Yazım",
      content: "Merhabalar! Bu benim blogumdaki ilk yazım, öncelikle blogumu ziyaret ettiğiniz için teşekkür ederim :)",
      link: "#",
      image: "https://files.kick.com/images/channel/63967663/banner_image/449090ee-6158-49db-9913-3a8682b6cfa6"
    },
    {
      title: "Hesap Makinesi Projem",
      content: "Bu projede; dil=Python , kütüphane=kivy kullanılmıştır. Özellikleri: Klavye desteği, gelişmiş hesaplama yapabilir.",
      link: "hesapmakinesi.html", 
      image: "https://clipart-library.com/new_gallery/214-2140028_png-file-svg-calculator-icon-free.png"
    },
    {
      title: "Diğer projelerim",
      content: "Diğer projelerim için :https://github.com/EagleSoft461/.",
      link: "#",
      image: "https://via.placeholder.com/400x200"
    },
    {
      title: "coming soon",
      content: "coming soon!!!!",
      link: "#",
      image: "https://via.placeholder.com/400x200"
    }
  ];

  const postContainer = document.querySelector("#posts .row");

  posts.forEach(post => {
    const col = document.createElement("div");
    col.classList.add("col-md-4", "fade-in");

    col.innerHTML = `
      <div class="card shadow">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.content}</p>
        </div>
      </div>
    `;

    postContainer.appendChild(col);
  });

  // Scroll ile fade-in efekti
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.1 };
  const appearOnScroll = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});


