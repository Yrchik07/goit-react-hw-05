import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const  ImageGallery=({results,openModal}) =>{
  return (
   
      <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map(({id, urls, description}) => {
          return (
            <li key={id} className={css.galleryItem}>
            <ImageCard urls={urls}
            description={description}
            onClick={() => openModal({urls, alt_description: description})} />
            </li>
          )
        })}
        </ul> 
   
  );
}

export default ImageGallery;
