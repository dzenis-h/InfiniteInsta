import React, { Component } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from './Image';


export class Images extends Component {
  state = {
    images: [],
    count: 30,
    start: 1
  };


  componentDidMount() {
    const { count, start } = this.state;
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res => this.setState({ images: res.data }));
  }

  fetchImages = () => {
    const { count, start } = this.state;
    this.setState({ start: this.state.start + count });
    axios
      .get(`/api/photos?count=${count}&start=${start}`)
      .then(res =>
        this.setState({ images: this.state.images.concat(res.data) })
      );
  };

  render() {
    return (
      <div className="container p-mg-5 bg-info">
      <div className="row m-md-n5 bg-light text-white">
      <div className="col p-3 p-md-5 bg-light text-white">
      <div className='images'>
        <InfiniteScroll
          onClick={this.test}
          dataLength={this.state.images.length}
          next={this.fetchImages}
          hasMore={true}
          loader={<h4 className="text-light font-italic">Loading...</h4>}
          className="bg-danger rounded x-auto p-2" >
          
          {this.state.images.map(image => (
            <Image key={image.id} image={image} />
          ))}

        </ InfiniteScroll>
        
      </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Images;