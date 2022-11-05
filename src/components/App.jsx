import { Component } from 'react';
// import * as basicLightbox from 'basiclightbox';
import api from './Api/Api';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    photoArray: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      api.fetchPhoto(searchQuery, page).then(newCards => {
        this.setState(prevState => ({
          photoArray: [...prevState.photoArray, ...newCards.hits],
        }));
      });
    }
  }

  handleSubmit = inputValue => {
    console.log('INPUTVALUE: ', inputValue);
    this.setState({
      searchQuery: inputValue,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery photoArray={this.state.photoArray} />
        <Button children={'Load more'} />
      </div>
    );
  }
}

export default App;
