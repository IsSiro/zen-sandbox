document.onmousemove = function(evt) {
  var e = evt || window.event,
    div = document.getElementById('x-ray');
  var scrollX = document.documentElement.scrollLeft ||
  document.body.scrollLeft,
    scrollY = document.documentElement.scrollTop ||
    document.body.scrollTop
  var x = e.clientX + scrollX - 80,
    y = e.clientY + scrollY - 80;
  div.style.left = x + 'px';
  div.style.top = y + 'px';
  div.style.backgroundPosition = '' + -x + 'px ' + -y + 'px';
}
