var posts=["2024/05/26/hello-world/","2024/05/26/我的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };