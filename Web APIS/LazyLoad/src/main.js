import "./style.css";

window.addEventListener("scroll", function (evt) {
  lazyLoad();
});
function loadImage(url) {
  var img = new Image();
  return new Promise((resolve, reject) => {
    img.src = url;
    img.onload = function () {
      resolve(url);
    };

    img.onerror = function () {
      reject();
    };
  });
}
// 判断图片是否在可视区内
function lazyLoad() {
  // console.log('start')
  // 获取视口尺寸和布局卷去的距离
  var clientWidth = document.documentElement.clientWidth,
    clientHeight = document.documentElement.clientHeight;
  var images = document.images,
    length = images.length;
  // 遍历页面图片
  for (let i = 0; i < length; i++) {
    // 判断图片是否在可见区域中
    let img = images[i];
    if (img.getAttribute("loaded")) {
      break;
    }
    let rect = img.getBoundingClientRect(); //
    console.log(rect.bottom >= 0 && rect.top < clientHeight);
    if (rect.bottom >= 0 && rect.top < clientHeight) {
      let realUrl = img.getAttribute("data-src");
      loadImage(realUrl)
        .then((url) => {
          img.src = url;
          img.setAttribute("loaded", true);
        })
        .catch((err) => {
          console.log("图片加载失败");
        });
    }
  }
}
lazyLoad();

// 节流函数
function throttle(func, delay) {
  let timer;
  let prevTime;
  return function (...args) {};
}
