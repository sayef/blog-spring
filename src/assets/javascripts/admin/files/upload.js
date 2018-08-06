function uploadMultipleFiles(files) {
  var formData = new FormData();
  for (var index = 0; index < files.length; index++) {
    formData.append("files", files[index]);
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/admin/files/upload");

  xhr.onload = function () {
    console.log(xhr.responseText);
    var response = JSON.parse(xhr.responseText);
    if (xhr.status == 200) {
      document.querySelector('#multipleFileUploadError').style.display = "none";
      var content = "<p>All Files Uploaded Successfully</p>";
      for (var i = 0; i < response.length; i++) {
        content += "<p>DownloadUrl : <a href='" + response[i].fileDownloadUri + "' target='_blank'>" + response[i].fileDownloadUri + "</a></p>";
      }
      document.querySelector('#multipleFileUploadSuccess').innerHTML = content;
      document.querySelector('#multipleFileUploadSuccess').style.display = "block";
    } else {
      document.querySelector('#multipleFileUploadSuccess').style.display = "none";
      document.querySelector('#multipleFileUploadError').innerHTML = (response && response.message) || "Some Error Occurred";
    }
  }

  xhr.send(formData);
}


function upload(event) {
  var files = document.querySelector('#multipleFileUploadInput').files;
  if (files.length === 0) {
    document.querySelector('#multipleFileUploadError').innerHTML = "Please select at least one file";
    document.querySelector('#multipleFileUploadError').style.display = "block";
  }
  uploadMultipleFiles(files);
  event.preventDefault();
}

