import { NavLink } from 'react-router-dom';
import css from './ImageCard.module.css'

const ImageCard =({urls,description,onClick}) =>{
  return (<div>
    <a href="{urls}"  onClick={onClick} target="_blank" rel="noreferrer">{description}</a>
  </div>
          //   <>
          //     <NavLink  to='{urls}'>{description}</NavLink>
          //   {/* <Routes>
          //   <Route path="/" element={<HomePage />} />
          //   <Route path="*" element={<NotFoundPage />} />
          // </Routes> */}
          //   </>
  );
}

export default ImageCard;