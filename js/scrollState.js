// 滚动显示 上下箭头
$(function () {
  var p = 0, t = 0
  $(window).on('scroll', function (e) {
    p = $(this).scrollTop()
    if (t <= p) {
      $('#scroll_up').removeClass('scroll_show')
      $('#scroll_down').addClass('scroll_show')
      // 1s 后移除 显示
      setTimeout(() => {
        $('#scroll_down').removeClass('scroll_show')
      }, 1000)
    } else {
      $('#scroll_down').removeClass('scroll_show')
      $('#scroll_up').addClass('scroll_show')
      // 1s 后移除 显示
      setTimeout(() => {
        $('#scroll_up').removeClass('scroll_show')
      }, 1000)
    }
    t = p;
  })
})