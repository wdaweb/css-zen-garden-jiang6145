let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

const $banner = $('#banner');
const $bannerTitle = $('#banner h1');
const $bannerSubtitle = $('#banner h2');

$(window).on('mousemove', function (e) {
  const moveX = e.clientX - centerX;
  const moveY = centerY - e.clientY;
  const color = parseInt(Math.random() * (256 * 256 * 256 - 1)).toString(16);

  $banner.css({
    transform: `translate(-50%, -50%) rotateY(${moveX / 100}deg)  rotateX(${moveY / 30}deg)`
  });

  $bannerTitle.css({
    'text-shadow': `${(moveX / 30) * -1}px ${moveY / 20}px 10px #${color}`
  });
  $bannerSubtitle.css({
    'text-shadow': `${(moveX / 30) * -1}px ${moveY / 20}px 3px #${color}`
  });
});

$(window).on('resize', function () {
  centerX = window.innerWidth / 2;
  centerY = window.innerHeight / 2;
});
