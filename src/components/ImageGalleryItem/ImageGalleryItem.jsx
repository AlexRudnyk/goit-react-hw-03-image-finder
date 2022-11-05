import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ photoArray }) => {
  return photoArray.map(({ id, largeImageURL, webformatURL, tags }) => {
    return (
      <Item key={id}>
        <a href={largeImageURL}>
          <Image src={webformatURL} alt={tags} />
        </a>
      </Item>
    );
  });
};

ImageGalleryItem.propTypes = {
  photoArray: PropTypes.arrayOf(PropTypes.shape({})),
};

export default ImageGalleryItem;
