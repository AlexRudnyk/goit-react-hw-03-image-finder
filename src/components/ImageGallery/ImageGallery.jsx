import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ photoArray }) => {
  return (
    <ul className="gallery">
      <ImageGalleryItem photoArray={photoArray} />
    </ul>
  );
};

export default ImageGallery;
