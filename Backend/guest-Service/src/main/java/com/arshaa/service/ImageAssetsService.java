package com.arshaa.service; 

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.arshaa.entity.GuestProfile;
import com.arshaa.entity.ImageAssets;
import com.arshaa.repository.ImageAssetsRepository;

@Service
public class ImageAssetsService {
	
	@Autowired
	ImageAssetsRepository imgRepo;
	
	public ImageAssets storeTag(ImageAssets tag) {
//		ImageAssets newtag = new ImageAssets();
//		newtag.setTag(tag.getTag());
//		newtag.setType(tag.getType());
		return imgRepo.save(tag);
		
	}
	
	public List<ImageAssets>  storeImages(MultipartFile imagefile , int id) throws IOException{
		String fileName = StringUtils.cleanPath(imagefile.getOriginalFilename());
		 ImageAssets getFile=imgRepo.getById(id);
		 
		 if(imgRepo.existsById(id)) {

		ImageAssets newImage = new ImageAssets();
		newImage.setData(imagefile.getBytes());
		newImage.setAssetName(fileName);
		newImage.setId(id);
		newImage.setTag(getFile.getTag());
		newImage.setType(getFile.getType());
//		newImage.setTag(imagefile.);
		
		 imgRepo.save(newImage);
		 List<ImageAssets> getList = fetchImages();
		 return getList;
		 
		 }else {
			 return null;
		 }
		
	}

	public List<ImageAssets> fetchImages() {
		
		return imgRepo.findAll();
		
	}

}
