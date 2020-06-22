**目前版本：v1.2** 
*版本紀錄：*  
* v1.0  建立練習模式與網頁主要結構  
* v1.1  
    * v1.11  
      * 新增首頁背景音效選項  
      * 新增作答預備畫面部分功能 
      * 提早答題完畢後關閉倒數十秒音效
    * v1.12  修正時間函數  
* v1.2  
  * 新增進階模式  
  * 新增題庫至100題
  * 新增判斷行動裝置或PC，修改背景音樂格式  

本網頁為108-2前端程式設計期末專案報告，有鑒於系上朋友對植物識別有所需求，  
希望透過此網頁達到加強植物識別能力。  
本網頁內的圖片與植物名稱均為本人拍攝與整理，絕無網路圖片XD  

<h3>Html</h3>  
(1) 所有模板均為自己設計與製作，並有套用Bootstrap的樣式（如modal）  
(2) 跑馬燈格式 參考：https://www.wibibi.com/info.php?tid=68  
(3) 透過css的display與jquery的.attr()方法創造main.html作答結果的隱藏或顯示  
(4) 開啟後播放背景音樂參考https://www.itread01.com/content/1541140444.html  
  ＊

<h3>Css</h3>  
(1) 均為自己設計的樣式  
(2) @media的應用參考https://www.ucamc.com/e-learning/css/102-rwd-css-media-type  
(3) 首頁標題動畫特效參考https://tobiasahlin.com/  
(4) 淡入(fade-in)效果參考：https://blog.hubspot.com/website/css-fade-in  
(5) 應用.attr()的方式隱藏或顯示html文件  

<h3>JavaScript</h3>  
略為修改老師上課的整數亂數函式與隨機發牌的函式，創造一個隨機的出題順序，應用如下:  
(1) 產生隨機出題順序(randomImg[])  
(2) 產生0-99的隨機整數(otherChoice[])  
(3) 以RandomFour()產生4個順序打亂的選項代號(含答案)  
(4) 以insertChoice()依序將打亂的選項代號對應的名稱填入選項中  

<h4>JQuery語法的應用：</h4>  
(5) .on()  
(6) .attr()  
(7) .remove()  
(8) .text()
(9) .Play()  
(10) .Pause()  
  
其他...  
(11) .document.getElementById()的應用參考自https://blog.csdn.net/erdouzhang/article/details/73274605  
(12) 倒數計時的語法參考https://ccckaass.pixnet.net/blog/post/191126086-%5Bjavascript%5D-%E5%80%92%E6%95%B8%E8%A8%88%E6%99%82%E5%99%A8  
(13) 建立音樂觸發程序的語法參考//https://stackoverflow.com/questions/12953928/immediate-play-sound-on-button-click-in-html-page
(14) 判斷裝置為PC或行動裝置參考https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/271150/  

