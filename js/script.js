
$(document).ready(function(){

   $('#header').load('../components/header.html', function (){
        
       
    // 경로에 따라 헤더 스타일 활성화
        let pathname = location.pathname;
        let gnbs = $(".gnb-item a");

        gnbs.each((index, gnb) => {
            if (!$(gnb).attr("href").includes("prepare") && pathname.includes($(gnb).attr("href"))) {
                $(gnb).addClass("active");
                $(gnb).parents(".sub-gnb-item").addClass("active");
                $(gnb).closest(".item-default").addClass("active");
            }
        });

        document.querySelectorAll('.item-default').forEach(item => {
            item.addEventListener('click', function () {

                this.classList.toggle('active');  
            });
        });
       
        const currentPage = window.location.pathname; 

        document.querySelectorAll('.sub-gnb-item').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                const parentGnbItem = link.closest('.gnb-item');
                const itemDefault = parentGnbItem.querySelector('.item-default');

                parentGnbItem.classList.add('active'); 
                itemDefault.classList.add('active');  
                link.closest(".item-default").add('acitve');
            }
        });
       
    });

    $('#pagination').load('../components/pagination.html');

})




  //  버튼 클릭 시 해당 모달 열기
    document.querySelectorAll('.submit-btn').forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target'); 
        const modal = document.getElementById(targetId);

        if (modal) {
          modal.classList.add('open'); 
        }
      });
    });
  // 모달 닫기 버튼 클릭 시 모든 모달의 'open' 클래스 제거
    document.querySelectorAll('.modal-close-btn').forEach(button => {
      button.addEventListener('click', function () {
        document.querySelectorAll('.modal.open').forEach(modal => {
          modal.classList.remove('open');
        });
      });
    });
