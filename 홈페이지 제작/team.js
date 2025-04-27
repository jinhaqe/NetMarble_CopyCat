function op() {
    document.querySelector(".hero").style.display='none';
    document.querySelector(".main").style.display='block';
}
let cnt = 1;
document.querySelector(".game").addEventListener('click', function() {
    if(cnt%2==1) {
        document.querySelector(".main_img").style.background="url(이미지/머지쿵야아일랜드.jpg) 0 0 no-repeat";
        document.querySelector(".main_img").style.backgroundSize="100% 100%";
        document.querySelector(".main_img").style.transform="rotateY(150deg)";
        document.querySelector(".main_p").style.display="none";
        document.querySelector(".main_p1").style.display="inline-block";
        document.querySelector(".game").innerHTML="경험치조 소개";
    } else {
        document.querySelector(".main_img").style.background="url(경험치.png) 0 0 no-repeat";
        document.querySelector(".main_img").style.backgroundSize="100% 100%";
        document.querySelector(".main_p1").style.display="none";
        document.querySelector(".main_p").style.display="inline-block";
        document.querySelector(".game").innerHTML="경험치조의 추천 게임";
    }
    cnt++;
})