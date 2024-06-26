$(".reviews__slider--list").owlCarousel({
  items: 1, 
  // autoplay: true,
  // autoplaySpeed: 1000,
  autoWidth: true,
  smartSpeed: 700,
  margin: 120,
  loop: true,
  nav: true,
  navContainer: '.reviews__slider--arrow-box',
  navText: [
    `
    <i class="reviews__slider--arrow-prev reviews__slider--arrow">
      <svg
        width="51"
        height="16"
        viewBox="0 0 51 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
          fill="#616161"
        />
      </svg>
    </i>
    `,
    `
    <i class="reviews__slider--arrow-next reviews__slider--arrow">
      <svg
        width="51"
        height="16"
        viewBox="0 0 51 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50.7071 8.70711C51.0976 8.31659 51.0976 7.68342 50.7071 7.2929L44.3431 0.928936C43.9526 0.538412 43.3195 0.538412 42.9289 0.928936C42.5384 1.31946 42.5384 1.95263 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM-8.74228e-08 9L50 9L50 7L8.74228e-08 7L-8.74228e-08 9Z"
          fill="#616161"
        />
      </svg>
    </i>
    `
  ],  
  dots: true,
})