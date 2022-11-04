import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
// import { App } from './App.styled';

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Button children={'Load more'} />
    </div>
  );
};
