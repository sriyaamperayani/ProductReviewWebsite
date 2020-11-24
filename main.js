//Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) { 
  if(this.hash !== '') { 
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
    {
      scrollTop: $(hash).offset().top -80
    }, 
    800
    );
  }
});




/*<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
    integrity="sha384-fnmoCqbTtwIlj8LyTjo7moustjsKC4pOpQbqy17RrhN7udi9RwhKkMHpvLbHG9Sr"
    crossorigin="anonymous"> 
    <link rel="stylesheet" href="css/style.css">


<section id="Testimonials">
  <div class="testimonials-bg"> 
    <div class="container"> 
      <h2>What My clients Say <span class="text-primary">About Me</span></h2> 
      <div class="boxes"> 
        <div class="box"> 
          <img src="https://images.thestar.com/b6Z2Vs06iWaX4HMoycPZNEq7pag=/1086x1086/smart/filters:cb(1580160959852)/https://www.thestar.com/content/dam/thestar/opinion/contributors/2020/01/27/torontos-black-community-faces-far-greater-risk-of-having-serious-mental-health-problems/kwame_mckenzie.jpg" alt="Customer 1 Photo" width="7%"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
        </div> 
        <div class="box"> 
          <img src="https://res.cloudinary.com/demo/image/upload/g_face,c_thumb,w_150,h_150/woman.jpg" alt="Customer 2 Photo" width="7%"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
        </div> 
        <div class="box">   
          <img src="https://mediaslide-europe.storage.googleapis.com/tfm/pictures/1065/2088/profile-1507205318-17fd8d48c2db8f8a5d3f4b04bc53b409.jpg" alt="Customer 3 Photo" width="7%"> 
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique recusandae soluta, praesentium cum nobis doloremque sunt rerum optio error iure, illum odit, dolorum obcaecati commodi!</p>
        </div>
      </div>
    </div>
  </div>
</section>







#testimonials { 
  background: url(https://img.wallpapersafari.com/desktop/1600/900/91/70/tQ4oBk.jpg) no-repeat center center/cover; 
  height: 100vh;
}

.testimonials-bg { 
  position: absolute; 
  height: 100%; 
  width: 100%; 
  background: rgba(0,0,0,0.6); 
  padding: 5rem 0;
}

#testimonials h2 { 
  text-align: center; 
  font-size: 3rem; 
  margin-bottom: 3rem; 
  color: #fff;
}

#testimonials .boxes { 
  display: flex; 
  flex-direction: column; 
}

#testimonials .box { 
  background: rgba(54,147,255,0.7); 
  display: flex; 
  padding: 2rem; 
  align-items: center; 
  border-radius: 15px;
}

#testimonials .box:first-child, #testimonials .box:nth-child(2) { 
  margin-bottom: 3rem;
}

#testimonials .box img { 
  border-radius: 50%; 
  margin-right: 2rem;
}

#testimonials p { 
  color: #fff;
}









<h3>My Insights <span class="text-primary">About Airpods</span></h3>





















<!DOCTYPE html>
<html>
<head>
 <title>Cards</title>
</head>

<style type="text/css">






</style>
<body>

<div class="main">




 <section id="specs">
    
 
