var audio = document.querySelector(".audio");
audio.innerHTML=`<audio autoplay controls    class="audio2">
<source src="https://carina.streamerr.co:2020/stream/OnSportFM"  type="audio/mpeg" >
<source src="https://carina.streamerr.co:2020/stream/OnSportFM"  type="audio/ogg" >
</audio>`;
//https://carina.streamerr.co:2020/stream/OnSportFM
//<source src="http://41.33.11.25:8000/;"  type="audio/mpeg" >
var elms = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < elms.length; i++ ) {
  new Splide( elms[ i ] ).mount();
}