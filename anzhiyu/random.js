var posts=["2025/03/23/bilibili/","2025/03/23/hello-world/","2025/03/23/网站地址/","2025/03/23/lmx/","2025/03/23/网站说明/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };