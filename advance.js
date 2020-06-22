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
var is_end=false;

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
var time =5000; //時間設定5秒

// ============題庫============([99]=天堂鳥,共[0]-[130])
var ansName = ["桔梗","蓮霧","地錦（爬牆虎）","錫蘭橄欖","杜英","山櫻花","薜荔","金露花","使君子","變葉木","槭（青楓）","煙火樹","軟枝黃蟬","仙客來","藍雪花","鐵線蓮","麗格海棠","美女櫻","鳥尾花","唐棉（釘頭果）","楊桃","萱草（金針花）","西印度醋栗","金葉木","孤挺花","玫瑰","新幾內亞鳳仙花","藍星花","天竺葵","白千層","珊瑚藤","忍冬（金銀花）","紫薇","蘆筍","竹葉蘭","紫苞舌蘭","黃蝦花","芍藥","雞冠刺桐","銀葉樹","大花波斯菊","大理花","含笑花","赤道櫻草","立鶴花","紅花石蒜","神秘果","蕺菜(魚腥草)","流蘇","虎耳草","山茼蒿","水蓮木(紫花補魚木)","蝶豆","杜虹花(臺灣紫珠)","紅花檵木(紅彩木)","可可","苦楝","天人菊","金盞花","番石榴(芭樂)","黃槿","月橘(七里香)","香雪球","金蓮花","麥桿菊","大岩桐","平戶杜鵑","龍吐珠","緬梔(雞蛋花)","錫葉藤(許願藤)","紫雲杜鵑(假杜鵑)","穗花棋盤腳","日日春","土丁桂(人字草)","山茶花","西番蓮(百香果)","百子蓮(愛情花)","繁星花","聖誕紅","曼陀羅","咖啡","馬利筋","桂花","血萼花(紅玉葉金花)","非洲菊","阿勃勒（波斯皂莢)","荷包花(蒲包花)","文心蘭(跳舞蘭)","向日葵","金英樹","鬱金香","錫蘭水梅(白娟梅)","法國(大紅)秋海棠","大果西番蓮","牽牛花","葡萄風信子","馬鞍藤","藍鯨(金)花","矮牽牛","天堂鳥","龍眼","龍貢","錫蘭葉下珠","翠雲柏","錦屏藤","貓柳","諾麗","蕙蘭","積水鳳梨","燈籠扶桑","澳洲鴨腳木","澳洲茶樹","橄欖","樹蘭","樹牽牛","魯花樹","蝴蝶蘭","蔥蘭","蔓綠絨","蔓性蘆莉","蔓性野牡丹","蔓性馬纓丹","赤苞花","豆柿","芒果","沙漠玫瑰","李氏櫻桃","李","希望之光","呂宋毛蕊木","火鶴花"];

// ============產生本次的新題庫順序(目前的圖庫有100張圖片)============
var randomImg=[]; //隨機的出題順序(0-99)
var randomImg=RandomArray(0,99,500); //打亂題庫中的編號順序


// =======更換題目的圖片位址=======
function changeURL(){
    randomImg[N];
    $('.imgplace').remove();
    let $div = $('#imgplace')
    $img = $('<img>').attr('class', 'imgplace')
    $div.append($img);
    $('.imgplace').attr('src', './img/' + randomImg[N] + '.jpg').attr('class', 'imgplace');  //產生第N題的圖片
}


//=======產生0-99的隨機整數於otherChoice=======
var otherChoice = []; //隨機的出題選項(0-110)
var otherChoice = RandomArray(0,130,500);


//=======在MC產生6個選項(含答案)=======
var MC =[];//含有答案的6個選項代號
function RandomSix(){
    // MC.splice(0,MC.length);
    MC = [];//清空上一題的選項
    MC.push(randomImg[N]);
    otherChoice = RandomArray(0,130,500);
    for(i=0; i<200;i++){
        if(MC.length<6){
            if(otherChoice[i]!=randomImg[N]){
                MC.push(otherChoice[i]);   
            }   else{
                continue;
            }
        }   else if(MC.lenght=6){
            return MC;
        }
    }  
};  


// ================隨機排列選項================//
var choiceArray = ["A","B","C","D","E","F"]; //選項順序
var randomChoice = []; //0-5隨機整數陣列
var randomMC = []; //暫留6個隨機排列的選項名稱（包含答案）
var randomChoice = RandomArray(0,5,10)

function insertChoice(){
    randomChoice = RandomArray(0,5,10)
    for(i=0; i<6; i++){
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
        $('#alert-text').remove();
        // 延遲顯示答案
        !function ANSDELAY(){
            if(wait<=0){
                $('#allResult').attr('class','showResult');
                $('#test-area').remove();
                $('#summary').text('您答對：'+score+'題！');
                $('#HOME').attr('class','showResult');
                $('#AGAIN').attr('class','showResult');
                $('#PRACTICE').attr('class','showResult');
                
                for(i=0; i<20;i++){
                    $('#' +i).attr('src', './img/' + randomImg[i] + '.jpg').attr('class', 'answerimg card-img-top');
                    $('#detail'+i).text(('正確答案是：'+ansName[randomImg[i]]));
                    $('#guest'+i).text('(您的答案：'+ guestAns[i] +')');
                    if(guestAns[i]!=ansName[randomImg[i]]){
                        $('#guest'+i).attr('style', 'color:red;');
                    }
                }
                //答題結果評價
                if(score==15){
                    $('#grade').text('太厲害了！很會認植物喔！')
                }else if(score<=14&&score>=11){
                    $('#grade').text('你的植物識別能力很厲害！')
                } else if(score<=10&&score>=6){
                    $('#grade').text('還不錯！繼續保持！')
                } else {
                    $('#grade').text('到「練習模式」裡多練幾次吧！') 
                } 
                $('#answering').attr('class', 'fade-in')
            }else{
                setTimeout(ANSDELAY, 1000);
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
//停止播放count
function myStop(){
    countten.pause();
    countten.currentTime = 0;
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

// //btn-hover音效
// var sndHov = new Audio("music/SoundHov.mp3");
// function SoundHov(){
//     sndHov.play();
//     sndHov.currentTime=0;
// }

// 顯示題目
function ShowChoice(){
    // $('#imgAnswer').attr('class', 'hideResult');
    // $('#Choice').attr('class', 'showResult');
    // $('#TIME').attr('class', 'hideResult');
    time = 10000;
    // ChoiceCounter();
    $('#imgAnswer').attr('class', 'hideResult');
    $('#Choice').attr('class', 'showResult');
    $('#TIME').attr('class', 'hideResult');
}
//========== 圖片倒數計時 ==========
function ImgCounter(){ 
    time = 5000; //重設時間為5秒
    CountTen();
    !function MyCounter(){
        // console.log(is_end);
        if(!is_end){
            if(time==0){
                $('#TIME').text("倒數" + (time/1000) + "秒");
                is_end =true;
                ShowChoice();
                myStop();
                return;
            } else {
                $('#TIME').attr('class', 'alertTen');
                $('#TIME').text("倒數" + (time/1000) + "秒");
                setTimeout(MyCounter, 1000);
            }
            time-=1000;
        }
    }();
}
//========== 選項倒數計時 ==========
// function ChoiceCounter(){ 
//     !function MyCounter(){
//         // console.log(is_end);
//         if(!is_end){
//             if(time==10000){
//                 myStop();
//                 CountTen();
//                 $('#TIME').attr('class', 'alertTen');
//                 $('#TIME').text("倒數" + (time/1000) + "秒");
//                 setTimeout(MyCounter, 1000);

//             }else if(time==0){
//                 is_end =true;

//                 return;
//             } else if(time>10000){
//                 $('#TIME').text("倒數" + (time/1000) + "秒");
//                 setTimeout(MyCounter, 1000);
//             } else{
//                 $('#TIME').attr('class', 'alertTen');
//                 $('#TIME').text("倒數" + (time/1000) + "秒");
//                 setTimeout(MyCounter, 1000);
//             }
//             time-=1000;
//         }
//     }();
// }
//===============================================================
//==================function1_按下開始練習時執行====================
//===============================================================
$(() => {
    // $('#S').on('click',() =>{$('#About').fadeIn(3000);});
    $('#start').on('click',() => {
        Sound();
        alert('注意！中途離開頁面將會重新開始。');
        $('#start').remove();
        $('#Choice-test').remove();
        $('#info').attr('class','hideResult');
        $('#alert-text').text('');
        $('#left').text('第1/15題');
        // myTimeout(400000, TIME, STOP);
        changeURL();  //產生下一張圖片
        RandomSix();  //產生6個順序打亂的選項代號(含答案)
        insertChoice();  //依序將打亂的選項代號對應的名稱填入選項中
        ImgCounter();

    });

    // ============偵測選擇的內容是否正確，順便換題目============
    $('.btn-choice').on('click',(e)=>{
        Sound();
        if(N<14){
            let ida=e.target.id;
            if($('#'+ida).html()==ansName[randomImg[N]]){
                guestAns.push($('#'+ida).html());
                score=score+1; //答對加一分
                N=N+1; //加題號，換下一題
            } else{
                guestAns.push($('#'+ida).html());
                N=N+1; //加題號，換下一題
            }
            changeURL();  //產生下一張圖片
            RandomSix();  //產生6個順序打亂的選項代號(含答案)
            insertChoice();  //依序將打亂的選項代號對應的名稱填入選項中
            $('#left').text("第"+(N+1)+"/15題");   // 改變上方題號數
            $('#Choice').attr('class', 'hideResult');//隱藏選項
            let $div = $('#alert-text');//產生下一題的按鈕
            $btn = $('<button>').attr('class', 'btn').attr('id', 'Next').text('下一題');
            $div.append($btn);
            $('#left').attr('class', 'hideResult');
            $('#Next').on('click', ()=>{
                $('#imgAnswer').attr('class', 'showResult');
                $('#left').attr('class', 'showResult');
                $('#TIME').attr('class', 'showResult');
                $('#Next').remove();
                is_end =false;  //開啟時間函數
                ImgCounter();
            })
        }else if(N=14){
            let ida=e.target.id;
            if($('#'+ida).html()==ansName[randomImg[N]]){
                guestAns.push($('#'+ida).html());
                score=score+1; //答對加一分
            } else{
                guestAns.push($('#'+ida).html());
            }
            //==================作答完畢呈現答題結果==================
            $('#Next').remove();
            $('#test-area').remove('');
            $('#TIME').remove('');
            $('#left').remove();
            time =0;
            RESULT();
        }
    });

})



