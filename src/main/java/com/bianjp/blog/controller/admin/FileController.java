package com.bianjp.blog.controller.admin;

import com.bianjp.blog.dto.JSONReplyDTO;
import com.bianjp.blog.entity.Post;
import com.bianjp.blog.exception.FileServiceException;
import com.bianjp.blog.exception.InvalidTagException;
import com.bianjp.blog.form.PostForm;
import com.bianjp.blog.helper.PaginationHelper;
import com.bianjp.blog.service.FileService;
import com.bianjp.blog.service.PostService;
import com.bianjp.blog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StreamUtils;
import org.springframework.util.StringUtils;
import org.springframework.validation.Errors;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
@RequestMapping("/admin/files")
public class FileController {

  private final FileService fileService;

  @Autowired
  public FileController(FileService fileService) {
    this.fileService = fileService;
  }

  /** Handle file service exception when uploading file */
  @ExceptionHandler(FileServiceException.class)
  @ResponseBody
  public JSONReplyDTO handleFileException(FileServiceException exception) {
    return JSONReplyDTO.fail(exception.getMessage());
  }

  @GetMapping("")
  public String index(HttpServletRequest request, Model model, Pageable pageable) {
//    pageable =
//      new PageRequest(
//        pageable.getPageNumber(), pageable.getPageSize(), new Sort(Sort.Direction.DESC, "id"));
//
//    Page<Post> postPage = postService.findNormalPosts(pageable);
//
//    model.addAttribute("postPage", postPage);
//    PaginationHelper.setPageLink(model, request);
    return "admin/files/index";
  }


//  @GetMapping("/drafts")
//  public String drafts(
//    HttpServletRequest request,
//    Model model,
//    Pageable pageable
//  ) {
//    pageable =
//      new PageRequest(
//        pageable.getPageNumber(), pageable.getPageSize(), new Sort(Sort.Direction.DESC, "id"));
//
//    Page<Post> postPage = postService.findDrafts(pageable);
//
//    model.addAttribute("postPage", postPage);
//    PaginationHelper.setPageLink(model, request);
//    return "admin/posts/drafts";
//  }

  @PostMapping("/upload")
  @ResponseBody
  public JSONReplyDTO upload(@RequestParam("files") MultipartFile[] files) {
    for (MultipartFile file: files) {
      fileService.store( StringUtils.cleanPath(file.getOriginalFilename()), file);
    }
    return JSONReplyDTO.success("Created successfully");
  }
}
