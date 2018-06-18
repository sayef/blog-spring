package com.bianjp.blog.exception;


public class FileServiceException extends RuntimeException{
    public FileServiceException(String message){
        super(message);
    }

    public FileServiceException(String message, Throwable cause){
        super(message, cause);
    }
}
