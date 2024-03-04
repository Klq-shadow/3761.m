var header = `<div class="headwrap">
<a href="/" class="home"><img src="static/images/logo@2x.png" alt="logo" /></a>
<span  class="home_r"><img/ src="static/images/icon @2x.png"></span>
</div>
<div class="navwrap">
<ul>
  <li class="on"><a href="index.html">首页</a></li>
  <li class=""><a href="games.html">安卓游戏</a></li>
  <li class=""><a href="apps.html">安卓软件</a></li>
  <li class=""><a href="heji.html">合集专题</a></li>
  <li class=""><a href="news.html">资讯攻略</a></li>
</ul>
</div>`;
//@牛超 底下这段js代码可以删除
document.addEventListener("DOMContentLoaded", function () {
  var currentUrl = window.location.href;

  var navItems = document.querySelectorAll(".navwrap li a");

  navItems.forEach(function (item) {
    if (item.href === currentUrl) {
      item.parentElement.classList.add("on");
    } else {
      item.parentElement.classList.remove("on");
    }
  });
});
