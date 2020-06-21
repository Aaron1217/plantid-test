$(document).ready()
/** 
 * 隨機序列函式序
 * 參考自kChen老師
 * 0.1
*/
var RandomInt = (start, end) => {
    // 計算放大的倍數
    let n = end - start + 1
    // 放大
    r = Math.random() * n
    // 無條件捨去
    r = Math.floor(r)
    // 位移到 start
    r = r + start
    return r
}

/**
 * 產生從 start 到 end 的整數亂數，每次執行打亂 Times 次
 * @param {number} start 亂數起始數值
 * @param {number} end  亂數結束數值
 * @param {number} Times 打亂的次數
 * @returns {number} 一個從start到end的整數亂數
 */
var RandomArray = (start, end, Times)=>{
    var randomArray = []
    for (let i = 0; i <end + 1; i++) {
        randomArray.push(i)
    }
    for (let i = 0; i < Times; i++) {
        // 隨機取出[r] 並與[0]交換
        let r = RandomInt(start, end)
        let temp = randomArray[r]
        randomArray[r] = randomArray[0]
        randomArray[0] = temp
    }
    return  randomArray;
}

//=======================================================================
//==============================出題與作答設定==============================
//=======================================================================
// =======儲存使用者的回答紀錄=======
var N = 0; //題號
var score = 0; //答對題數
var guestAns = []; //使用者所選之項目
var time =100000; //時間設定100秒
var timeUse = 0; //花費時間

// ============題庫============
var ansName = ["桔梗","蓮霧","地錦（爬牆虎）","錫蘭橄欖","杜英","山櫻花","薜荔","金露花","使君子","變葉木","槭（青楓）","煙火樹","軟枝黃蟬","仙客來","藍雪花","鐵線蓮","麗格海棠","美女櫻","鳥尾花","唐棉（釘頭果）","楊桃","萱草（金針花）","西印度醋栗","金葉木","孤挺花","玫瑰","新幾內亞鳳仙花","藍星花","天竺葵","白千層","珊瑚藤","忍冬（金銀花）","紫薇","蘆筍","竹葉蘭","紫苞舌蘭","黃蝦花","芍藥","雞冠刺桐","銀葉樹","大花波斯菊","大理花","含笑花","赤道櫻草","立鶴花","紅花石蒜","神秘果","蕺菜(魚腥草)","流蘇","虎耳草","山茼蒿","水蓮木(紫花補魚木)","蝶豆","杜虹花(臺灣紫珠)","紅花檵木(紅彩木)","可可","霹靂果(婁林果)","羅比親王海棗","羅比梅","瓊崖海棠","櫟葉櫻桃","攀緣蘭(樹蘭)","鵝掌藤","雞屎藤","紫紅羅勒","藍花楹","藍地柏","陰香","繖楊","檸檬羅勒","檸檬桉","檸檬天竺葵","檸檬","叢立孔雀椰子","黛粉葉","闊葉油點百合","黑板樹","蕹菜(空心菜)","穗花棋盤腳","櫛瓜","龍眼","龍貢","錫蘭葉下珠","錫葉藤(許願藤)","錦屏藤","貓柳","諾麗","蕙蘭","積水鳳梨","燈籠扶桑","澳洲鴨腳木","澳洲茶樹","橄欖","樹蘭","樹牽牛","魯花樹","蝴蝶蘭","蔥蘭","蔓綠絨","蔓性蘆莉","蔓性野牡丹","蔓性馬纓丹"];

// ============產生本次的新題庫順序(目前的圖庫有56張圖片)============
var randomImg=[]; //隨機的出題順序(0-55)
var randomImg=RandomArray(0,55,200); //打亂題庫中的編號順序


// =======更換題目的圖片位址=======
function changeURL(){
    randomImg[N];
    $('.imgplace').remove();
    let $div = $('.answer')
    $img = $('<img>').attr('class', 'imgplace')
    $div.append($img);
    $('.imgplace').attr('src', './img/' + randomImg[N] + '.jpg').attr('class', 'imgplace');  //產生第N題的圖片
}


//=======產生0-99的隨機整數於otherChoice=======
var otherChoice = []; //隨機的出題選項(0-99)
var otherChoice = RandomArray(0,99,500);


//=======在MC產生4個選項(含答案)=======
var MC =[];//含有答案的四個選項代號
function RandomFour(){
    // MC.splice(0,MC.length);
    MC = [];//清空上一題的選項
    MC.push(randomImg[N]);
    otherChoice = RandomArray(0,99,500);
    for(i=0; i<100;i++){
        if(MC.length<4){
            if(otherChoice[i]!=randomImg[N]){
                MC.push(otherChoice[i]);   
            }   else{
                continue;
            }
        }   else if(MC.lenght=4){
            return MC;
        }
    }  
};  


// ================隨機排列選項================//
var choiceArray = ["A","B","C","D"]; //選項順序
var randomChoice = []; //0-3隨機整數陣列
var randomMC = []; //暫留4個隨機排列的選項名稱（包含答案）
var randomChoice = RandomArray(0,3,10)

function insertChoice(){
    randomChoice = RandomArray(0,3,10)
    for(i=0; i<4; i++){
        randomMC = choiceArray[randomChoice[i]];
        $('#'+choiceArray[randomChoice[i]]).text(ansName[MC[i]]);
    }
}


//===================================================================
//==============================呈現結果==============================
//===================================================================
function RESULT(){
    $('#test-area').remove('');
    $('#TIME').remove('');
    let $div = $('#alert-text');
    $btn = $('<button>').attr('class', 'btn').attr('id', 'result').text('查看結果');
    $div.append($btn);
    $('#left').remove();
    //===============檢視答題結果===============
    $('#result').on('click',()=>{
        Sound();
        Anssnd();
        $('#result').remove();
        // 延遲顯示答案
        !function MyCounter(){
            if(wait<=0){
                $('#allResult').attr('class','showResult');
                $('#test-area').remove();
                $('#summary').text('您答對：'+score+'題；作答時間：'+ timeUse +'秒')
                $('#HOME').attr('class','showResult');
                $('#AGAIN').attr('class','showResult');
                
                for(i=0; i<20;i++){
                    $('#' +i).attr('src', './img/' + randomImg[i] + '.jpg').attr('class', 'answerimg card-img-top');
                    $('#detail'+i).text(('正確答案是：'+ansName[randomImg[i]]));
                    $('#guest'+i).text('(您的答案：'+ guestAns[i] +')');
                    if(guestAns[i]!=ansName[randomImg[i]]){
                        $('#guest'+i).attr('style', 'color:red;');
                    }
                    if(document.getElementById('guest'+i).textContent=='(您的答案：undefined)'){
                        $('#guest'+i).text('您尚未作答本題').attr('style', 'color:red;');
                    }
                }
    
                //答題結果評價
                if(score==20){
                    $('#grade').text('全對...識別小達人非您莫屬！')
                }else if(score<=19&&score>=17){
                    $('#grade').text('太強了！認識這麼多植物！')
                } else if(score<=16&&score>=13){
                    $('#grade').text('很厲害喔！繼續保持吧～')
                } else if(score<=12&&score>=9){
                    $('#grade').text('您的植物辨識還不錯喔！') 
                } else if(score<=8&&score>=5){
                    $('#grade').text('放心吧！多練幾次就會進步了！') 
                } else{
                    $('#grade').text('別氣餒，再接再厲吧！') 
                } 
                $('#answering').attr('class', 'fade-in')  
            }else{
                setTimeout(MyCounter, 1000);
            }
            wait-=1000; 
        }();

        
    });
    
}
//======================================================================
//================================音效設定================================
//======================================================================
//音效來自http://tw.yisell.com/
//按鈕音效
var snd = new Audio("music/Mouth-Pop.mp3");
function Sound(){
    snd.play();
    snd.currentTime=0;
}
// //倒數
var count = new Audio("music/count.mp3");
function Count(){
    count.play();
    count.currentTime=0;
}
//停止播放count
function myStop(){
    count.pause();
    count.currentTime = 0;
}
//倒數十秒
var countten = new Audio("music/10sec.mp3");
function CountTen(){
    countten.play();
    countten.currentTime=0;
}
// //時間到警示
// var Timesup = new Audio("./music/Timesup.mp3");
// function TimesUp(){
//     Timesup.play();
//     Timesup.currentTime=0;
// }
//答案揭曉
var wait=1000;
var anssnd = new Audio("music/answer.mp3")
function Anssnd(){
    anssnd.play();
    anssnd.currentTime=0;
}

//btn-hover音效
var sndHov = new Audio("music/SoundHov.mp3");
function SoundHov(){
    sndHov.play();
    sndHov.currentTime=0;
}

//===============================================================
//==================function1_按下開始練習時執行====================
//===============================================================
$(() => {
    // $('#S').on('click',() =>{$('#About').fadeIn(3000);});
    $('#start').on('click',() => {
        Sound();
        var yes = confirm('準備好了嗎？');
        if (yes) {
            alert('注意！中途離開頁面將會重新開始。');
            $('#start').remove();
            $('#Choice-test').remove();
            $('#Choice').attr('class','showResult');
            $('#info').attr('class','hideResult');
            $('#alert-text').text('');
            $('#left').text('第1/20題');
            Count();
            // myTimeout(400000, TIME, STOP);
            //========== 設定倒數計時 ==========
            !function MyCounter(){
                if(time==10000){
                    myStop();
                    CountTen();
                    $('#TIME').attr('class', 'alertTen');
                    $('#TIME').text("您還剩下" + (time/1000) + "秒");
                    setTimeout(MyCounter, 1000);
                    timeUse=timeUse+1;
                }else if(time<=0){
                    $('#TIME').text("時間到！");
                    var Timesup = new Audio("./music/Timesup.mp3");
                    Timesup.play();
                    Timesup.currentTime=0;
                    RESULT();
                } else if(time>10000){
                    $('#TIME').text("您還剩下" + (time/1000) + "秒");
                    setTimeout(MyCounter, 1000);
                    timeUse=timeUse+1;
                } else{
                    $('#TIME').attr('class', 'alertTen');
                    $('#TIME').text("您還剩下" + (time/1000) + "秒");
                    setTimeout(MyCounter, 1000);
                    timeUse=timeUse+1;
                }
                time-=1000; 
            }();
            
            changeURL();  //產生下一張圖片
            RandomFour();  //產生4個順序打亂的選項代號(含答案)
            insertChoice();  //依序將打亂的選項代號對應的名稱填入選項中
        }
    })

    // ============偵測選擇的內容是否正確，順便換題目============
    $('.btn-choice').on('click',(e)=>{
        Sound();
        if(N<20){
            // console.log(e.target.id);
            let ida=e.target.id;
            //console.log(ida);
            // console.log($('#'+ida).html());
            if($('#'+ida).html()==ansName[randomImg[N]]){
                // $('#alert-text').text('正確答案是：'+ $('#'+ansName[randomImg[N]]).html());
                // alert('恭喜您答對了！');
                guestAns.push($('#'+ida).html());
                score=score+1; //答對加一分
                N=N+1; //加題號，換下一題
            } else{
                guestAns.push($('#'+ida).html());
                // alert('答錯了，正確答案是'+ansName[randomImg[N]]);
                N=N+1; //加題號，換下一題
            }
            changeURL();  //產生下一張圖片
            RandomFour();  //產生4個順序打亂的選項代號(含答案)
            insertChoice();  //依序將打亂的選項代號對應的名稱填入選項中
            $('#left').text("第"+(N+1)+"/20題");   // 改變上方題號數
        } 

        //==================時限內作答完畢呈現答題結果==================
        if(document.getElementById('left').textContent=="第21/20題"){
            RESULT();
            myStop();
        }
    });
})



