<#-- @ftlvariable name="postPage" type="org.springframework.data.domain.Page<com.bianjp.blog.entity.Post>" -->
<#-- @ftlvariable name="pageLink" type="java.lang.String" -->
<#import "components/post.ftl" as components>
<#import "../helper/pagination.ftl" as pagination>
<div class="banner" style="background-image: url(${assetPath('banner.jpg')});">
  <div class="banner-text">
    <h1></h1>
    <h1>I AM SAYEF</h1>
    <h4>AI Enthusiast, Computer Vision &amp; NLP Freak</h4>
    <!--<button>Hire me</button>-->
  </div>
</div>
<@layout.layout pageTitle='' showSidebar=true>
  <main class="post-list">
    <@components.postList postPage.content/>

    <div class="pagination-container">
      <@pagination.pagination postPage.number + 1, postPage.totalPages, pageLink/>
    </div>
  </main>
</@layout.layout>
