package com.bianjp.blog.service;

import com.bianjp.blog.config.UploadProperties;
import com.bianjp.blog.exception.FileServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileSystemUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

@Service
public class FileService {

  private final Path root;

  /**
   * Constructor to get the service started
   */
  @Autowired
  public FileService(UploadProperties uploadProperties) throws IOException {
    root = Paths.get(uploadProperties.getStorageDir());
    if (!Files.exists(root)) {
      Files.createDirectory(root);
    }
  }

  public void store(String filename, MultipartFile file) {
    if(file.isEmpty()) throw new FileServiceException("Failed to store empty file: " + file.getName());
    if(Files.exists(Paths.get(root.toString()+ "\\" + file.getOriginalFilename()))) throw new FileServiceException("File Already Exists");
    try {
      Files.copy(file.getInputStream(), root.resolve(filename));
    } catch (IOException e) {
      throw new FileServiceException(e.getMessage(), e);
    }
  }

  public Stream<Path> loadAll() throws IOException {
    return Files.walk(root).filter(p -> !p.equals(root)).map(p -> root.relativize(p));
  }

  public Path load(String filename) {
    return root.resolve(filename);
  }

  public Resource loadAsResource(String filename){
    Path path = root.resolve(filename);
    // log.info(path.toUri());
    Resource resource = null;
    try {
      resource = new UrlResource(path.toUri());
      // log.info(resource.getFilename());
    } catch (MalformedURLException e) {
      throw new FileServiceException("Could not read file " + filename, e);
    }
    if(resource.exists() || resource.isReadable())
      return resource;
    else
      throw new FileServiceException("Could not read file " + filename +
        " exists: " + resource.exists() + " isreadable: " + resource.isReadable());
  }

  public void deleteAll() {
    FileSystemUtils.deleteRecursively(root.toFile());
  }
}
