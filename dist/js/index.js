// 打开模态框
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];
openModalBtn.addEventListener("click", function () {
    modal.style.display = "block";
});
closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});
// 进度条
function uploadFile() {
    var progressBar = document.querySelector('.progress');
    var fileInput = document.querySelector('input[type="file"]');
    var fileNames = document.querySelector('#file-names');

    var file = fileInput.files[0];
    var fileSize = file.size;
    var chunkSize = 1024 * 1024; // 1MB
    var offset = 0;

    var reader = new FileReader();
    // reader.onloadend = function () {
    //     if (offset < fileSize) {
    //         var blob = file.slice(offset, offset + chunkSize);
    //         offset += chunkSize;
    //         // 模拟上传进度
    //         setTimeout(function () {
    //             reader.readAsArrayBuffer(blob);
    //             var progress = (offset / fileSize) * 100;
    //             progressBar.style.width = progress + '%';
    //         }, 1000);
    //     }
    // };

    // reader.readAsArrayBuffer(file.slice(offset, offset + chunkSize));

    // 显示已选择的文件名
    var fileNamesText = '';
    for (var i = 0; i < fileInput.files.length; i++) {
        fileNamesText += fileInput.files[i].name + "、";
    }
    fileNames.innerHTML = "已经选择的文件：<br>" + fileNamesText;
}
document.querySelector('input[type="file"]').addEventListener('change', uploadFile);
// 隐藏选择的文件名
let submit = document.getElementById("submit");
let fileNmae = document.getElementById("file-names");
submit.addEventListener('click', function () {
    fileNmae.setAttribute('class', 'none')
})
// 文件上传请求
document.getElementById('submit').addEventListener('click', function() {
    var files = document.getElementById('file-upload').files;
    var formData = new FormData();
    for (var i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    
    var baseUrl = 'http://127.0.0.1:8080';
      var xhr = new XMLHttpRequest();
      xhr.open('POST', baseUrl + '/upload', true);
      xhr.onload = function () {
          if (xhr.status === 200) {
              // 上传成功的处理逻辑
              alert("上传成功啦")
          } else {
              // 上传失败的处理逻辑
              console.log("上传失败");
          }
      };
      xhr.send(formData);
  });