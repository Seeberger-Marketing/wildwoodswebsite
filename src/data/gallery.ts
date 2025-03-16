export const galleryData = {
  gallery2024: Array.from({ length: 247 }, (_, i) => 
    `/assets/images/Image_Gallery/2024/WildWoods_20240810-${i + 1}.jpg`
  ),
  gallery2022: Array.from({ length: 100 }, (_, i) => 
    `/assets/images/Image_Gallery/2022/Wyld_Woods_06_08_2022_${String(i).padStart(4, '0')}.jpg`
  )
};
