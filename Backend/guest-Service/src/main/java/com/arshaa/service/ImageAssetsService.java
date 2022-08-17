package com.arshaa.service; 

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.arshaa.entity.ImageAssets;
import com.arshaa.repository.ImageAssetsRepository;

@Service
public class ImageAssetsService {
	
	@Autowired
	ImageAssetsRepository imgRepo;
	
	public List<ImageAssets>  storeImages(MultipartFile imagefile) throws IOException{
		
		ImageAssets newImage = new ImageAssets();
		newImage.setData(imagefile.getBytes());
		
		 imgRepo.save(newImage);
		 List<ImageAssets> getList = fetchImages();
		 return getList;
	}
	
	public List<ImageAssets> fetchImages() {
		
		return imgRepo.findAll();
		
	}

}
