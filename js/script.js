var $mouse=document.querySelector(".ch_img01");
function call_ch01(){
    $mouse.setAttribute("src", "img/tree-2-thumb.jpg");
}
function call_ch02(){
    $mouse.setAttribute("src", "img/tree-1-thumb.jpg");
}
/* ---------------------------------------------------- */
var $click=document.querySelector(".ch_img02");
var $num=1;
function prev(){
    $num--;
    if($num<1){
        $num=4;
    }
    $click.setAttribute("src", "img/pic-"+$num+".jpg");
}
function next(){
    $num++;
    if($num>4){
        $num=1;
    }
    $click.setAttribute("src", "img/pic-"+$num+".jpg");
}
/* ---------------------------------------------------- */
// 객체 + 매개변수
// 게임 캐릭터의 진행
var $hero={
    name:"영웅",
    level:1,
    hp:100 // 게임 캐릭터의 생명체
};
var $cur_state=document.querySelector(".cur_state");
function move(){
    $hero.hp-=5;
    if($hero.hp<=0){
        $hero.hp=0;
        $cur_state.innerText="현재 나의 캐릭터 생명치가 모두 소진되었습니다.";
    }else{
    $cur_state.innerText="현재 나의 캐릭터 생명치는 "+$hero.hp+"이(가) 되었습니다.";
    }
}
function add_hp(){
    $hero.hp+=10;
    if($hero.hp>=100){
        $hero.hp=100;
        $cur_state.innerText="현재 나의 캐릭터 생명치가 모두 채워졌습니다.";
    }else{
    $cur_state.innerText="현재 나의 캐릭터 생명치는 "+$hero.hp+"이(가) 되었습니다.";
    }
}
/* ---------------------------------------------------- */
// 반려동물 키우기
var $mypet={
    type : "cat",
    name : "순돌이",
    address : "성남시 분당구",
    img : "img/pet.png"
}
var $info=document.querySelector(".pet_info");
var $img=document.querySelector(".pet_img");
function pet(a, b, c, d){
    $info.innerText="나의 반려동물은 "+a+"이며, 이름은 "+b+"이고, 사는 곳은 "+c+"입니다.";
    $img.setAttribute("src", d);
}
pet($mypet.type, $mypet.name, $mypet.address, $mypet.img);
/* ---------------------------------------------------- */
var $menu=document.querySelector(".menu_box");
var $dark=document.querySelector(".dark_bg");
function open_menu(){
    $menu.setAttribute("class", "menu_box active"); /* menu_box(기존의 클래스명) 그대로 두고 active(새로운 클래스명) 추가 */
    $dark.setAttribute("class", "dark_bg active");
}
function close_menu(){
    $menu.setAttribute("class", "menu_box");
    $dark.setAttribute("class", "dark_bg");
}

// 전체 이벤트 - resize 이벤트
var $cur_txt=document.querySelector(".cur_size span");
function change_size(){
    var $cur_width=window.innerWidth; // 브라우저의 가로값;padding값 포함
    console.log("현재 브라우저의 가로 크기 "+$cur_width);
    // 1200px 이상 : pc 구간
    // 992px 이상 : tablet-h 구간
    // 768px 이상 : tablet-v 구간
    // 568px 이상 : moblie-h 구간
    // 568px 미만 : moblie-v 구간
    if($cur_width<1200){ // tablet-h 구간, tablet-v 구간, moblie-h 구간, moblie-v 구간
        if($cur_width<992){ // tablet-v 구간, moblie-h 구간, moblie-v 구간
            if($cur_width<768){
                if($cur_width<568){// moblie-v 구간
                    $cur_txt.innerText="moblie 세로 구간"
                }else{   // moblie-h 구간
                    $cur_txt.innerText="moblie 가로 구간"
                }    
            }else{  // tablet-v 구간
                $cur_txt.innerText="tablet 세로 구간"
            }
        }else{ // tablet-h 구간
            $cur_txt.innerText="tablet 가로 구간"
        }
    }else{ // pc 구간
        $cur_txt.innerText="pc 구간"
    }
}
change_size(); // 브라우저가 처음 로딩되면서 함수 호출
function resizeEvt(){ // 브라우저의 사이즈가 조정되는 과정상 이벤트가 발생
    change_size(); // 이벤트 발생에 의한 실행문으로 함수문을 재호출
}
/* ---------------------------------------------------- */
var $header=document.querySelector("#scroll_header");
var $img=document.querySelector(".scroll_img");
function scrollEvt(){
    var $scrollTop=window.scrollY;
    // scrollY 속성 : 현재 스크롤 바의 상단 위치를 브라우상의? 절대위치값으로 반환시킬 수 있는 도구
    console.log("현재 스크롤바의 상단 위치 : "+$scrollTop);
    if($scrollTop>100){
        $header.setAttribute("class", "sticky");
        $img.setAttribute("class", "scroll_img active")
    }else{
        $header.setAttribute("class", "");
        $img.setAttribute("class", "scroll_img")
    }
}
