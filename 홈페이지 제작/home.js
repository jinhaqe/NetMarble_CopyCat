/* 헤더 */
let file = ["세븐나이츠레볼루션", "나혼자레벨업상단", "제2의나라", "파라곤상단", "원조이포커상단"]; /* 배열에 이미지 이름을 넣어놓는다. */
let check = ["b1", "b2", "b3", "b4", "b5"]; /* 배열에 움직이는 광고 하단 아이디 이름을 적어놓는다 */
let inx = 0;
let inc = 0;
let cnt=1;
setTimeout(function () {
    function slideImage(){
        document.querySelector(".header_img").style.backgroundImage="url(이미지/상단/"+ file[inx] + ".jpg)"; /* header_img에 file 배열을 하나씩 대입 */
        inx++; /* 값을 늘림 (대입하는 값입니다) */
        inx %= file.length; /* file의 길이로 나누어서 무한 반복하게 만든다. */
        let width = 1; /* 프로그레스바 width 기본값을 1로 설정 */
        let id = setInterval(frame, 50); /* 5초마다 frame() 함수를 반복하게 함 */
        function frame() {
            if (width >=100) { /* 만약 width가 100이 넘으면 */
                document.getElementById(check[inc]).classList.remove("b1_move"); /* width가 100이 넘은 배열에 움직이는 광고 하단의 아이디에 b1_move의 class 를 지워 넘어가는 형식으로 보이게 한다. */
                inc++; /* 값을 늘림 */
                inc %= check.length; /* 무한반복하게 만든다. */
                clearInterval(id); /* width가 100이 넘었을 때 id의 setinterval가 멈추도록 한다. */
                /* setInterval라는 함수의 형식은 setInterval(함수이름, 초) == 함수이름을 초마다 무한반복하게 만듭니다. */
            } else {
                document.getElementById(check[inc]).setAttribute('class', 'b1_move');/* width가 100이 안넘을 때 해당하는 아이디에 b1_move라는 클래스를 추가하여 움직이는 효과를 주도록 함 */
                width++; /* width 값을 점점 늘려 프로그레스 바가 진행되도록 한다. */
                document.querySelector(".b1_move").style.width = width +"%"; /* b1_move 라는 클래스에 저장 */
            }
        }
    }
    slideImage(); /* slideImage 선언 */
    let a = setInterval(slideImage,5000); /* slideImage가 5초마다 반복되도록한다. */

    Dbutton = document.getElementById("Dbutton");
    Dbutton.addEventListener('click', function() {
        let img = document.getElementById("img1");
        let img1 = document.getElementById("img2");

        if(cnt%2==1) {
            img1.src="이미지/재생아이콘.png";
            clearTimeout(a);
        } else {
            img1.src="이미지/멈춤아이콘.png";
            a = setTimeout(slideImage,5000);
        }
        cnt++;
    })    
})
function random_img(){ /* 하단 광고 새로고침 랜덤이미지 */
    num=Math.floor(Math.random()*3); /* 랜덤함수를 이용해 0부터 2까지의 난수를 뽑아낸후에 */
    document.randomImage.src="이미지/하단광고"+num+".jpg"; /* randomImage에 넣는다 */
}
random_img(); /* random_img 함수 선언 */

