document.getElementById('userfile').addEventListener('change', checkFile, true);
  function checkFile(e) {
   var file_list = e.target.files;
   for (var i = 0, file; file = file_list[i]; i++) {
     var sFileName = file.name;
     var sFileExt = sFileName.slice((sFileName.lastIndexOf(".") - 1 >>> 0) + 2);
     var iFileSize = file.size;
         //console.log(sFileExt);
         if (sFileExt != "doc" && 
          sFileExt != "docx" && 
              sFileExt != "ppt" &&  //  ************ Files allowed ***************
              sFileExt != "pptx" &&
              sFileExt != "odt" &&
              sFileExt != "odp" &&
              sFileExt != "rtf" &&
              sFileExt != "jpeg" &&
              sFileExt != "jpg" &&
              sFileExt != "png") { 
          document.getElementById("wrongFile").style.color = "red";                     
              document.getElementById("wrongFile").innerHTML ="File type is not supported"; // Error message if file ext. is not supported
              ClearInputField();
            }
          if (iFileSize > 20971520){ // *********** MAXIMAL File Size allowed in bytes 20971520 = 20mb ***********
              document.getElementById("wrongFile").style.color = "red";
              document.getElementById("wrongFile").innerHTML ="Document is bigger than 20Mb"; // Error message if file is bigger than 20mb
              ClearInputField();
            }
          if (iFileSize < 2000){  // *********** MINIMAL File Size allowed in bytes 2000 = 2kb ***********
              document.getElementById("wrongFile").style.color = "red";
              document.getElementById("wrongFile").innerHTML ="Document is too small"; // Error message if file is smaller then 2kg
              ClearInputField();
            }
        }
      }
     function ClearFields() {
      document.getElementById("wrongFile").innerHTML = "";
    }
    function ClearInputField() {
      document.getElementById("userfile").value = null;
    }