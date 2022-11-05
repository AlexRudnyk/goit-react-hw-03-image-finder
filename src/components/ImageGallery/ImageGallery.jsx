import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

const ImageGallery = ({ photoArray }) => {
  return (
    <div className="gallery">
      <List>
        <ImageGalleryItem photoArray={photoArray} />
      </List>
    </div>
  );
};

ImageGallery.propTypes = {
  photoArray: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ImageGallery;
