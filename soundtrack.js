
//https://stackoverflow.com/questions/12953928/immediate-play-sound-on-button-click-in-html-page

var snd = new Audio("./music/Mouth-Pop.mp3");
var btnHover = new Audio("./music/zapsplat_cartoon_pop_mouth_014.mp3")
var meow = new Audio("./music/meow.mp3")

$(()=>{
    // $('.btn').hover(function () {
    //     btnHover.play();
    //     btnHover.currentTime=0;
    //     },function () {
    // })

    $('.btn').on('click', ()=>{
        snd.play();
        snd.currentTime=0;
      })      
    // $('.btn').mouseover(function(){
    //     btnHover.play();
    //     btnHover.currentTime=0;
    // })
    $('#cat').on('click',()=>{
      snd.play();
      meow.play();
      alert('(=ↀωↀ=)');
    })
    $('#dog').on('click',()=>{
      snd.play();
      alert('(▽◕ ᴥ ◕▽)');
    })
    $('#pig').on('click',()=>{
      snd.play();
      alert(' (╯·⚇·╰)');
    })
    $('#chicken').on('click',()=>{
      snd.play();
      alert('(｡・ө・｡)');
    })
})