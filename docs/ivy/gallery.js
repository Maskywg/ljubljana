const chapters = [
  {id:'market',no:'01',title:'市場的早晨',intro:'城市醒來時，最先有聲音的是市場。菇類、鮮奶、磅秤與甜點，讓旅行從生活尺度開始。',photos:[
    ['01-market-mushrooms.jpg','森林的收成','一籃籃新鮮菇類把森林氣味帶進中央市場。先看形狀與色澤，這張照片記錄的是攤位當下的豐富。','tall'],
    ['08-milk-vending.jpg','城市裡的鮮奶站','市場裡的自動販售設備，讓日常採買與在地農產直接相遇。',''],
    ['25-market-scale.jpg','老磅秤的時間','「Kontrolna tehtnica」意為檢查磅秤。金屬刻度留下市場交易講求公允重量的痕跡。',''],
    ['30-market-tables.jpg','攤桌之間','木箱、遮棚與一張張桌面，組成中央市場最平凡、也最真實的城市節奏。','wide'],
    ['07-kavalir.jpg','綠色的 Kavalir','行人區裡的免費電動接駁車，主要服務長者與行動不便者；它是城市交通，不是觀光遊園車。',''],
    ['05-dessert-sign.jpg','甜點的路標','手寫招牌把腳步引向斯洛維尼亞甜點，旅途也在這裡暫時離開建築史。',''],
    ['15-dessert-close.jpg','一口之間','糖粉、奶油與層次分明的切面，是走了一上午之後最直接的記憶。','tall'],
    ['18-cream-cake.jpg','櫥窗裡的奶油層','隔著玻璃看一塊方正甜點：酥皮與柔軟內餡，把城市散步切成一段休息。','']
  ]},
  {id:'river',no:'02',title:'河岸與柱廊',intro:'Plečnik 設計的中央市場柱廊沿著盧比亞納河展開。從對岸、轉角與柱間重複觀看，建築開始像一段節拍。',photos:[
    ['09-market-colonnade-river.jpg','從河對岸閱讀市場','連續拱廊順著水面延伸；市場不只是攤位，也是一整段城市河岸。','wide'],
    ['16-colonnade-facade.jpg','窗與柱的秩序','立面以重複的開口框住河景，日常買賣因此有了莊重的背景。',''],
    ['17-colonnade-perspective.jpg','走進透視線','柱列把人的視線引向遠處。建築的節奏，需要用步伐才能完整感受。','tall'],
    ['29-colonnade-corner.jpg','河岸轉角','市場建築在轉角處改變方向，也提醒人：Plečnik 思考的從來不只是一棟房子。','']
  ]},
  {id:'bridge',no:'03',title:'屠夫橋的兩種情緒',intro:'這座 2010 年開放的橋，一邊是旅人留下的愛情鎖，一邊是 Jakov Brdar 不安而有力的雕塑。甜蜜與怪誕，在同一段過河路上並存。',photos:[
    ['04-love-locks-close.jpg','鎖上的名字','密集的鎖把欄杆變成私人記憶牆；每一枚都小，疊在一起卻改變了橋的表情。',''],
    ['06-love-locks-market.jpg','愛情鎖與市場','鏡頭越過鎖群，看見對岸的中央市場柱廊；旅人的儀式與城市日常被放進同一格畫面。','wide'],
    ['14-prometheus.jpg','橋頭的 Prometheus','Petkovškovo 河岸一側的大型雕塑指向 Prometheus。扭轉的身體，讓古典神話顯得粗獷而不安。','tall'],
    ['26-small-sculptures.jpg','石板路上的小生物','橋邊的小型怪誕雕塑貼近腳步；官方說明指出，它們也呼應這一帶從前的屠肉攤位。',''],
    ['28-bridge-figures.jpg','過橋的人與雕塑','巨大人物與來往行人共享空間。作品不被基座隔離，而是直接闖進日常。','wide'],
    ['21-faces-sculpture.jpg','Faces','銘牌寫著 Jakov Brdar 的《Faces》。層層面孔堆起一種難以忽視的凝視。','tall'],
    ['11-bridge-creature.jpg','無名的怪誕細節','一個近距離的生物形象：不急著替它命名，先看材質、表情與城市表面如何彼此摩擦。','']
  ]},
  {id:'dragon',no:'04',title:'龍不只在橋上',intro:'龍是盧比亞納最醒目的城市符號。它從橋頭走到腳下的窨井蓋，也進入櫥窗與紀念品。',photos:[
    ['19-dragon-bridge.jpg','龍橋的守望者','龍橋建於 1900 至 1901 年。低角度讓銅綠色龍像站上城市天際線。','wide'],
    ['02-dragon-manhole.jpg','腳下也有一隻龍','城市徽章藏進窨井蓋；旅行有時要低頭，才會看見地方身分如何進入基礎設施。',''],
    ['20-winged-creature.jpg','翅翼的局部','一段金屬翅翼與爪的特寫。畫面保留了龍城想像，卻不替未確認的物件補上名稱。','tall'],
    ['23-dragon-souvenirs.jpg','被帶走的城市符號','綠色小龍在紀念品架上大量複製，城市傳說也因此進入旅人的行李。','']
  ]},
  {id:'memory',no:'05',title:'石頭、門與城市記憶',intro:'老城最後一段散步，把市政、信仰、橋梁與知識空間串起來。那些宏大的歷史，常以門把、招牌與階梯被記住。',photos:[
    ['03-old-town-street.jpg','老城的縱深','狹長街道把視線帶向市政中心。招牌、窗台與石板路，讓歷史成為仍在使用的空間。',''],
    ['12-town-hall.jpg','市政廳的立面','今日所見立面帶有巴洛克改建留下的樣貌；旗幟與鐘面提示這裡仍是城市治理的場所。','tall'],
    ['13-robba-fountain.jpg','三河噴泉','市政廳前的 Robba 噴泉以三位河神象徵卡尼奧拉的河流；廣場現地展示的是複製品。',''],
    ['22-robba-square.jpg','噴泉、教堂與廣場','把鏡頭拉遠，Robba 噴泉與主教座堂一同進入城市舞台，建築之間的關係比單一地標更清楚。','wide'],
    ['10-cathedral-door.jpg','青銅門上的人群','主教座堂的青銅門以浮雕承載宗教與地方記憶。近看時，手掌與時間留下的磨亮痕跡格外醒目。','tall'],
    ['24-locksmith-street-sign.jpg','鑰匙街的暗號','Ključavničarska ulica 意為「鎖匠街」。石頭上的鑰匙，讓街名變成可以用眼睛解讀的線索。',''],
    ['27-triple-bridge.jpg','三條路一起過河','Plečnik 在原有中央橋兩側加入行人橋，讓過河的動作向廣場展開；粉紅色教堂成為遠端焦點。','wide'],
    ['31-nuk-staircase.jpg','走向知識的階梯','NUK 的深色大理石樓梯向上收束，光線從高處引入。建築把進入圖書館設計成一段由暗至明的過程。','wide']
  ]}
];

const gallery = document.querySelector('#gallery');
const allPhotos = chapters.flatMap(chapter => chapter.photos.map(photo => ({...Object.fromEntries(['file','title','caption','layout'].map((key,i)=>[key,photo[i]])),chapter:chapter.title})));
gallery.innerHTML = chapters.map(chapter => `
  <section class="chapter" id="${chapter.id}">
    <header class="chapter-head"><span class="chapter-index">${chapter.no}</span><div><p class="chapter-no">CHAPTER ${chapter.no}</p><h2>${chapter.title}</h2><p>${chapter.intro}</p></div></header>
    <div class="photo-grid">${chapter.photos.map((photo,i) => {
      const index = allPhotos.findIndex(item => item.file === photo[0]);
      return `<figure class="photo-card ${photo[3] || ''}"><button class="photo-button" type="button" data-index="${index}" aria-label="放大：${photo[1]}"><img src="photos/${photo[0]}" alt="${photo[1]}" loading="lazy" decoding="async"></button><figcaption><span class="photo-count">${chapter.no} / ${String(i+1).padStart(2,'0')}</span><h3>${photo[1]}</h3><p>${photo[2]}</p></figcaption></figure>`;
    }).join('')}</div>
  </section>`).join('');

const lightbox = document.querySelector('#lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxTitle = lightbox.querySelector('strong');
const lightboxCaption = lightbox.querySelector('figcaption span');
let current = 0;
function showPhoto(index){current=(index+allPhotos.length)%allPhotos.length;const photo=allPhotos[current];lightboxImage.src=`photos/${photo.file}`;lightboxImage.alt=photo.title;lightboxTitle.textContent=`${String(current+1).padStart(2,'0')} / ${allPhotos.length}　${photo.title}`;lightboxCaption.textContent=photo.caption;if(!lightbox.open)lightbox.showModal()}
document.querySelectorAll('.photo-button').forEach(button=>button.addEventListener('click',()=>showPhoto(Number(button.dataset.index))));
lightbox.querySelector('.close').addEventListener('click',()=>lightbox.close());
lightbox.querySelector('.previous').addEventListener('click',()=>showPhoto(current-1));
lightbox.querySelector('.next').addEventListener('click',()=>showPhoto(current+1));
lightbox.addEventListener('click',event=>{if(event.target===lightbox)lightbox.close()});
document.addEventListener('keydown',event=>{if(!lightbox.open)return;if(event.key==='ArrowLeft')showPhoto(current-1);if(event.key==='ArrowRight')showPhoto(current+1)});
