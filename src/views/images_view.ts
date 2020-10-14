import path from 'path';

import Image from "../models/Image";

const imagesView = {
  render(image: Image) {
    const {
      id,
      path,
    } = image;
    return {
      id,
      url: `http://localhost:3333/uploads/${path}`, // TODO .env
    }
  }, renderMany(images: Image[]) {
    return images.map(this.render);
  }
};

export default imagesView;
