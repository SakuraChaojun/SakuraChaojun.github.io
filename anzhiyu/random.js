var posts=["2023/12/11/hello-world/","2023/12/18/psychopy/","2023/12/18/product/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };