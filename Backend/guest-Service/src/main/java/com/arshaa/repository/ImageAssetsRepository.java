package com.arshaa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.arshaa.entity.ImageAssets;


@Repository

public interface ImageAssetsRepository extends JpaRepository<ImageAssets, Integer> {
	
// List<ImageAssets> fetchImages();
}
