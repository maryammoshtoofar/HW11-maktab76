const setImages = () => {
  const picURLs = [
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
    "https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg",
  ];

  const images = document.getElementsByTagName("img");
  for (let i = 0; i < 7; i++) {
    images[i].setAttribute("src", picURLs[i]);
  }
};

setImages();
