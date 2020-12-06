$(function () {
  $('#page-wrapper').fadeIn(1000);

  const $mouseStyle = $('.extra1');
  const $bannerTitle = $('#banner h1');
  const $bannerSubtitle = $('#banner h2');
  const $articleTitles = $('h3');

  // 各區塊
  const $zenSummary = $('#zen-summary');
  const $zenPreamble = $('#zen-preamble');
  const $zenExplanation = $('#zen-explanation');
  const $zenParticipation = $('#zen-participation');
  const $zenBenefits = $('#zen-benefits');
  const $zenRequirements = $('#zen-requirements');

  let centerX = window.innerWidth / 2;
  let centerY = window.innerHeight / 2;

  $(window).on('resize', function () {
    if (window.innerWidth < 992) {
      $bannerTitle.removeAttr('style');
      $bannerSubtitle.removeAttr('style');
      return;
    }
    centerX = window.innerWidth / 2;
    centerY = window.innerHeight / 2;
  });

  $(window).on('mousemove', function (e) {
    if (window.innerWidth < 992) return;

    const moveX = e.clientX - centerX;
    const moveY = centerY - e.clientY;

    $mouseStyle.css({
      top: e.clientY + 'px',
      left: e.clientX + 'px'
    });

    $bannerTitle.css({
      'text-shadow': `${(moveX / 30) * -1}px ${moveY / 20}px 10px #f8f9fa41`,
      transform: `rotateY(${moveX / 100}deg)  rotateX(${moveY / 30}deg)`
    });
    $bannerSubtitle.css({
      'text-shadow': `${(moveX / 30) * -1}px ${moveY / 20}px 3px #f8f9fa41`,
      transform: `rotateY(${moveX / 100}deg)  rotateX(${moveY / 30}deg)`
    });
  });

  $(window).on('scroll', function () {
    if (window.innerWidth < 992) return;
    console.log(123);
    const $scrollIndex = $(window).scrollTop() + window.innerHeight;

    $zenSummary.removeClass('active');
    $zenPreamble.removeClass('active');
    $zenExplanation.removeClass('active');
    $zenParticipation.removeClass('active');
    $zenBenefits.removeClass('active');
    $zenRequirements.removeClass('active');

    if ($scrollIndex > $zenRequirements.offset().top + $zenRequirements.height() + 100) {
      $zenRequirements.addClass('active');
    } else if ($scrollIndex > $zenBenefits.offset().top + $zenBenefits.height()) {
      $zenBenefits.addClass('active');
      $zenParticipation.addClass('active');
    } else if ($scrollIndex > $zenParticipation.offset().top + $zenParticipation.height() + 200) {
      $zenParticipation.addClass('active');
    } else if ($scrollIndex > $zenExplanation.offset().top + $zenExplanation.height()) {
      $zenPreamble.addClass('active');
      $zenExplanation.addClass('active');
    } else if ($scrollIndex > $zenPreamble.offset().top + $zenPreamble.height() + 300) {
      $zenPreamble.addClass('active');
      $zenSummary.addClass('active');
    } else if ($scrollIndex > $zenSummary.offset().top + $zenSummary.height()) {
      $zenSummary.addClass('active');
    }
  });

  $articleTitles.hover(
    function () {
      if (window.innerWidth < 992) return;

      $mouseStyle.css({
        'backdrop-filter': 'invert(1)',
        width: '28px',
        height: '28px'
      });
    },
    function () {
      if (window.innerWidth < 992) return;

      $mouseStyle.css({
        'backdrop-filter': 'none',
        width: '24px',
        height: '24px'
      });
    }
  );
});
