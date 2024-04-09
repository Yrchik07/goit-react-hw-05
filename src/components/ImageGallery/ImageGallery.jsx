import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const  ImageGallery=({results,openModal}) =>{
  console.log('results: ', results);
  return (
   
      <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map(({id, poster_path, title
        }) => {
          return (
            <li key={id} className={css.galleryItem}>
            <ImageCard urls={poster_path}
            description={title
            }
            onClick={() => openModal({poster_path, alt_description: title
            })} />
            </li>
          )
        })}
        </ul> 
   
  );
}

export default ImageGallery;
