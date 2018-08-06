<@adminLayout.layout pageTitle="Upload Files">
<h2>Upload Files</h2>
<div class="upload-container">
  <div class="upload-content">
    <div class="multiple-upload">
      <form id="multipleUploadForm" name="multipleUploadForm" onsubmit="upload()" method="POST" enctype="multipart/form-data">
        <input id="multipleFileUploadInput" type="file" name="files" class="file-input" multiple required />
        <button type="submit" class="primary submit-btn">Submit</button>
      </form>
      <div class="upload-response">
        <div id="multipleFileUploadError"></div>
        <div id="multipleFileUploadSuccess"></div>
      </div>
    </div>
  </div>
</div>


<table class="ui table">
  <thead>
  <tr>
    <th>File</th>
    <th>Mimetype</th>
    <th>Modified</th>
    <th>Size</th>
    <th>Operations</th>
  </tr>
  </thead>

  <#--<tfoot>-->
  <#--<tr>-->
    <#--<th class="pagination-container" colspan="6">-->
      <#--<@helper.pagination currentPage=filePage.number + 1-->
      <#--totalPages=filePage.totalPages-->
      <#--pageLink=pageLink/>-->
    <#--</th>-->
  <#--</tr>-->
  <#--</tfoot>-->
</table>

</@adminLayout.layout>
