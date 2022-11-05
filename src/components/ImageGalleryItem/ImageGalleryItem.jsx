const ImageGalleryItem = ({ photoArray }) => {
  return photoArray.map(photo => {
    return (
      <li key={photo.id}>
        <img src={photo.previewURL} alt="" />
      </li>
    );
  });
};

export default ImageGalleryItem;
