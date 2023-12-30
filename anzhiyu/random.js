var posts=["2023/12/11/hello-world/","2023/12/18/product/","2023/12/30/algorithm/","2023/12/18/psychopy/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };