document.addEventListener('DOMContentLoaded', function () {
    var darkModeToggle = document.querySelector('.modal-body ul li');
    var modalHeader = document.querySelector('.modal-header');
    var dropdown = document.querySelector('.dropdown-menu');
    var navbar = document.querySelector('.navbar');
    const btn_close = document.getElementById("modal_title_side2")
    const modal_add_feed = document.getElementById("modal_add_feed");
    const buttonAddFeed = document.getElementById("add_feed");

    buttonAddFeed.addEventListener("click", e => {
      modal_add_feed.style.top = window.pageYOffset + 'px';
      modal_add_feed.style.display = "flex";
      document.body.style.overflowY = "hidden";
    });

    close_modal.addEventListener("click", e => {
      modal_add_feed.style.display = "none";
      document.body.style.overflowY = "visible";
    });

    darkModeToggle.addEventListener('click', function () {
      var toggleText = document.querySelector('.toggle-text');
      var isDarkMode = document.body.classList.toggle('dark-mode');

      if (isDarkMode) {
        modalHeader.setAttribute('data-bs-theme', 'dark');
        dropdown.setAttribute('data-bs-theme', 'dark');
        navbar.setAttribute('data-bs-theme', 'dark');
        btn_close.setAttribute('data-bs-theme', 'dark');
      }
      else {
        modalHeader.removeAttribute('data-bs-theme');
        dropdown.setAttribute('data-bs-theme');
        navbar.setAttribute('data-bs-theme');
        btn_close.setAttribute('data-bs-theme');
      }

      toggleText.textContent = isDarkMode ? "라이트모드" : "다크모드";
    });
  });

  $(document).ready(function () {
      $('.modal_image_upload')
          .on("dragover", dragOver)
          .on("dragleave", dragOver)
          .on("drop", uploadFiles);

      function dragOver(e){
          e.stopPropagation();
          e.preventDefault();
          
          if (e.type == "dragover") {
              $(e.target).css({
                  "background-color": "black",
                  "outline-offset": "-20px"
              });
          } else {
              $(e.target).css({
                  "background-color": "white",
                  "outline-offset": "-10px"
              });
          }
      }

      function uploadFiles(e){
          e.stopPropagation();
          e.preventDefault();
          
          e.dataTransfer = e.originalEvent.dataTransfer; 
          var files =  e.dataTransfer.files;

          if (files.length > 1) {
              alert('하나만 올려라.');
              return;
          }

          if (files[0].type.match(/image.*/)) {
              $(e.target).css({
                  "background-image": "url(" + window.URL.createObjectURL(files[0]) + ")",
                  "outline": "none",
                  "background-size": "100% 100%"});
          } else {
              alert('이미지가 아닙니다.');
              return;
          }
      }
  });