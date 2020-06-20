
//https://stackoverflow.com/questions/12953928/immediate-play-sound-on-button-click-in-html-page

var snd = new Audio("./music/Mouth-Pop.mp3");
// var btnHover = new Audio("./music/Pop-Low-Pitch-Up-02.mp3")

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
})