import css from './ImageCard.module.css'

const ImageCard=({urls,description,onClick}) =>{
  console.log('urls: ', urls);
  
  console.log('description: ', description);
  
  
  return (
            <div onClick={onClick}>
              <img className={css.galleryImage} src={urls} alt={description} />
            </div>
  );
}

export default ImageCard;
