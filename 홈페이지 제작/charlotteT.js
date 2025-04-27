/* 상단 스크롤바 */
let rollgame = document.querySelector(".gameinfo").offsetTop; /* offsetTop을 이용해 클래스가 gameinfo인 top위치를 가져온다. */
let rollmedia = document.querySelector(".media").offsetTop; /* offsetTop을 이용해 클래스가 media인 top위치를 가져온다. */
let rollnotice = document.querySelector(".notice").offsetTop; /* offsetTop을 이용해 클래스가 notice인 top위치를 가져온다. */
let rollnews = document.querySelector(".news").offsetTop; /* offsetTop을 이용해 클래스가 news인 top위치를 가져온다. */
let rollfooter = 6600; /* footer의 top 위치이다. */
$(function(){
    let rollHeader = 40; /* top 로고의 높이 */
     $(window).scroll(function() {
       let scroll = getCurrentScroll();
         if ( scroll < rollHeader ) { /* 사용자의 scroll이 top로고의 높이보다 낮을때 ? */
                $('header').removeClass('roll'); /* header의 roll이라는 클래스를 제거해 배경색을 투명으로 되돌림 */
                $('.charlotte_logo2').css("display", "none"); /* 샬롯 로고 2의 display를 none으로 만들어 로고를 되돌림 */
                $('.header_img').css("display", "none"); /* 다운로드 경로를 none으로 만들어 감춘다 */
                /* 상단바의 글자들을 흰색으로 되돌림 */
                $('.header_p1').css("color", "#fff");
                $('.header_p2').css("color", "#fff");
                $('.header_p3').css("color", "#fff");
                $('.header_p4').css("color", "#fff");
                $('.header_p5').css("color", "#fff");
                $('#cat').css('bottom', '40px');
                /* bottomTop의 모습을 감춘다 (메인 위로 올라올 수 있게해주는 버튼) */
                $('.bottomTop').css('display', 'none');
                /* 밑의 fixed 바를 되돌림 */
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollHeader && scroll < rollgame) {/* 사용자의 scroll이 top로고의 높이보다 높고 gameinfo보다 낮을때 ? */
                $('header').addClass('roll'); /* header의 roll이라는 클래스를 추가해 배경색을 흰색으로 만든다. */
                $('.charlotte_logo2').css("display", "block"); /* 샬롯 로고2를 block으로 설정하면서 검은색 로고로 만든다. */
                $('.header_img').css("display", "block"); /* 다운로드 경로를 block으로 설정해 나타나게 만든다. */
                $('.header_p2').removeClass('header_plus');
                $('.header_p1').removeClass('header_plus1'); /* opacity 를 0.55로 만드는 클래스를 지운다. */
                $('.header_p1').css("color", "rgba(17,17,17,.65)");
                $('.header_p2').css("color", "rgba(17,17,17,.65)");
                $('.header_p3').css("color", "rgba(17,17,17,.65)");
                $('.header_p4').css("color", "rgba(17,17,17,.65)");
                $('.header_p5').css("color", "rgba(17,17,17,.65)");
                $('.bottomTop').css('display', 'block'); /* bottomTop의 모습을 나타나게함 */
                $('#cat').css('bottom', '119px');
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollgame && scroll < rollmedia) {
                $('.charlotte_logo2').css("display", "block");
                $('.header_img').css("display", "block");
                $('.header_p1').addClass('header_plus1');
                $('.header_p2').addClass('header_plus');
                $('.header_p3').removeClass('header_plus');
                $('.bottomTop').css('display', 'block');
                $('#cat').css('bottom', '119px');
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollmedia && scroll < rollnotice) {
                $('.charlotte_logo2').css("display", "block");
                $('.header_img').css("display", "block");
                $('.header_p2').removeClass('header_plus');
                $('.header_p3').addClass('header_plus');
                $('.header_p4').removeClass('header_plus');
                $('.bottomTop').css('display', 'block');
                $('#cat').css('bottom', '119px');
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollnotice && scroll < rollnews) {
                $('.charlotte_logo2').css("display", "block");
                $('.header_img').css("display", "block");
                $('.header_p3').removeClass('header_plus');
                $('.header_p4').addClass('header_plus');
                $('.header_p5').removeClass('header_plus');
                $('.bottomTop').css('display', 'block');
                $('#cat').css('bottom', '119px');
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollnews && scroll < rollfooter) {
                $('.charlotte_logo2').css("display", "block");
                $('.header_img').css("display", "block");
                $('.header_p4').removeClass('header_plus');
                $('.header_p5').addClass('header_plus');
                $('.bottomTop').css('display', 'block');
                $('#cat').css('bottom', '119px');
                $('.bot_fixed').css("position", "fixed");
           } else if(scroll >= rollfooter) {
                $('.bot_fixed').css("position", "absolute");
                $('.bottomTop').css('display', 'block');
                $('#cat').css('bottom', '119px');
           }
     });
   function getCurrentScroll() {  /* window 페이지의 y 좌표를 가져옴 (스크롤한) */
       return window.pageYOffset || document.documentElement.scrollTop;
       }
   });

/* 상단 스크롤 클릭 이동 */
function click1() {
    let main = document.querySelector(".main");
    let location = main.offsetTop;
    window.scrollTo({top:location, behavior:'smooth'}); /* scrollTo 함수를 이용하여 클릭하면 원하는 위치로 이동하도록 설정 (behavior:'smooth'를 쓰면 부드럽게 이동시켜준다.) */
}
function click2() {
    let gameinfo = document.querySelector(".gameinfo");
    let location = gameinfo.offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
}

function click3() {
    let media = document.querySelector(".media");
    let location = media.offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
}
function click4() {
    let notice = document.querySelector(".notice");
    let location = notice.offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
}
function click5() {
    let news = document.querySelector(".news");
    let location = news.offsetTop;
    window.scrollTo({top:location, behavior:'smooth'});
}

/* 게임소개 슬라이드 클릭 */
function slideClick1() { /* 클릭하면 지정한 위치의 배경이 바뀌고 지정한 클래스의 display를 바꿔 나타나고 사라지게한다. */
    document.querySelector(".tit_1").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/63c027cd9e39.png)";
    document.querySelector(".tit_2").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/f3a20fc493b6.png)";
    document.querySelector(".tit_3").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5cc08e566dd0.png)";
    document.querySelector(".tit_4").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5e34f716038c.png)";

    document.querySelector(".slide1").style.display="block";
    document.querySelector(".slide2").style.display="none";
    document.querySelector(".slide3").style.display="none";
    document.querySelector(".slide4").style.display="none";
}
function slideClick2() {
    document.querySelector(".tit_2").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/d9d191609816.png)";
    document.querySelector(".tit_1").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/b24fc7405a5b.png)";
    document.querySelector(".tit_3").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5cc08e566dd0.png)";
    document.querySelector(".tit_4").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5e34f716038c.png)";

    document.querySelector(".slide1").style.display="none";
    document.querySelector(".slide2").style.display="block";
    document.querySelector(".slide3").style.display="none";
    document.querySelector(".slide4").style.display="none";
}
function slideClick3() {
    document.querySelector(".tit_3").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/7db724782f56.png)";
    document.querySelector(".tit_1").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/b24fc7405a5b.png)";
    document.querySelector(".tit_2").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/f3a20fc493b6.png)";
    document.querySelector(".tit_4").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5e34f716038c.png)";

    document.querySelector(".slide1").style.display="none";
    document.querySelector(".slide2").style.display="none";
    document.querySelector(".slide3").style.display="block";
    document.querySelector(".slide4").style.display="none";
}
function slideClick4() {
    document.querySelector(".tit_4").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/0dd741ebb542.png)";
    document.querySelector(".tit_1").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/b24fc7405a5b.png)";
    document.querySelector(".tit_2").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/f3a20fc493b6.png)";
    document.querySelector(".tit_3").style.backgroundImage="url(https://sgimage.netmarble.com/mobile/game/tab/brand/v1/img/5cc08e566dd0.png)";
    
    document.querySelector(".slide1").style.display="none";
    document.querySelector(".slide2").style.display="none";
    document.querySelector(".slide3").style.display="none";
    document.querySelector(".slide4").style.display="block";
}

/* 미디어 클릭 */
function mediaClick1() { /*클릭하면 큰 비디오의 배경이미지가 변하고 */
    document.querySelector(".media_video").style.backgroundImage="url(https://sgimage.netmarble.com/images/netmarble/tab/20220916/sqhp1663309915350.jpg)";
    document.getElementById("swiper1").classList.add("active"); // 클래스 active를 추가함으로써 선택한 효과를 준다
    document.getElementById("swiper2").classList.remove("active");
    document.getElementById("swiper3").classList.remove("active");
    document.getElementById("swiper4").classList.remove("active");
}
function mediaClick2() {
    document.querySelector(".media_video").style.backgroundImage="url(https://sgimage.netmarble.com/images/netmarble/tab/20220916/baj01663310145066.png)";
    document.getElementById("swiper2").classList.add("active");
    document.getElementById("swiper1").classList.remove("active");
    document.getElementById("swiper3").classList.remove("active");
    document.getElementById("swiper4").classList.remove("active");
}
function mediaClick3() {
    document.querySelector(".media_video").style.backgroundImage="url(https://sgimage.netmarble.com/images/netmarble/tab/20221013/agxd1665640736129.jpg)";
    document.getElementById("swiper3").classList.add("active");
    document.getElementById("swiper1").classList.remove("active");
    document.getElementById("swiper2").classList.remove("active");
    document.getElementById("swiper4").classList.remove("active");
}
function mediaClick4() {
    document.querySelector(".media_video").style.backgroundImage="url(https://sgimage.netmarble.com/images/netmarble/tab/20221013/ux2t1665640849353.jpg)";
    document.getElementById("swiper4").classList.add("active");
    document.getElementById("swiper1").classList.remove("active");
    document.getElementById("swiper2").classList.remove("active");
    document.getElementById("swiper3").classList.remove("active");
}

/* 공지사항 더보기 */
let cnt = 1;
let plus = document.querySelector(".btn_more");
plus.addEventListener('click', function() { // btn_more 의 버튼에 click 함수 추가
    if (cnt == 1) { // 한번클릭할때 
        for(let i = 1; i<=6; i++) {
            document.getElementById("1hide"+i).classList.remove("hide1"); //(hide1 -> display : none;이 되어있음)
            // 클래스 hide1을 지움으로써 1hide1 ~ 1hide6가 나오게함.
        }
    } else if (cnt == 2) { //두번 클릭할때
        for(let i = 1; i<=6; i++) {
            document.getElementById("2hide"+i).classList.remove("hide2");//(hide2 -> display : none;이 되어있음)
            // 클래스 hide2을 지움으로써 2hide1 ~ 2hide6가 나오게함.
        }
    } else if (cnt == 3) {
        for(let i = 1; i<=6; i++) {
            document.getElementById("3hide"+i).classList.remove("hide3");
        }
    } else if (cnt == 4) {
        for(let i = 1; i<=6; i++) {
            document.getElementById("4hide"+i).classList.remove("hide4");
        }
    } else if (cnt == 5) {
        for(let i = 1; i<=2; i++) {
            document.getElementById("5hide"+i).classList.remove("hide5");
        }
        document.querySelector(".btn_more").style.display="none"; // btn_more에 display none을 줌으로써 버튼을 숨긴다 (더이상 보여줄것이 없기 때문)
    }
    cnt++;
})

/* 뉴스 클릭 */
let newsClick1 = document.getElementById("c_ico1");
newsClick1.addEventListener('click', function() { // 클릭하면 새로운 이미지로 바뀌게 한다.
    document.getElementById("c_ico1").classList.toggle("c_icoP"); //토글을 씀으로써 한번클릭 새로운 이미지 두번클릭 원래의 이미지 (되돌림)
})
let newsClick2 = document.getElementById("c_ico2");
newsClick2.addEventListener('click', function() {
    document.getElementById("c_ico2").classList.toggle("c_icoP");
})
let newsClick3 = document.getElementById("c_ico3");
newsClick3.addEventListener('click', function() {
    document.getElementById("c_ico3").classList.toggle("c_icoP");
})