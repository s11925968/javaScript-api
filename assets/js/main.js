
var posts=[];
var httpRequest =new XMLHttpRequest();
function news(name){
  httpRequest.open('GET',`https://forkify-api.herokuapp.com/api/search?q=${name}`);
  httpRequest.send();
  httpRequest.onreadystatechange = function(){
    if(httpRequest.readyState==4){
      posts=JSON.parse(httpRequest.response).recipes;
      //console.log(posts);
      display();
    }
  }
}
// عنوان URL الحالي في صفحة "read.html": http://example.com/read.html?id=123
function display(){
  var data="";
  for(var i=0;i<posts.length;i++){
    data+=`
  <div class="col-md-3">
  <h1>${posts[i].publisher}</h1>
  <h2>${posts[i].title}</h2>
  
  <img src="${posts[i].image_url==null?'/assets/img/independnt.jpg':posts[i].image_url}"class="img-fluid"/>
  <a href="read.html?id=${posts[i].recipe_id}">read more</a>  </div>
    `
  }
  document.getElementById('display').innerHTML=data;
}

var namePost=document.querySelectorAll('.nav-item');
for(var i=0; i<namePost.length; i++){
  namePost[i].addEventListener('click',function(e){
    news(e.target.innerHTML)
    console.log(e);
  })
}