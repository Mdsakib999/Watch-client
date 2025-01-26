import React, { useState } from "react";

const ImageGallery = ({ images }) => {
  const [bigImage, setBigImage] = useState(images[0]);

  const handleThumbnailClick = (image) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Thumbnails */}
      <div className="order-last flex gap-4 overflow-x-scroll no-scrollbar lg:order-none lg:flex-col p-1">
        {images.map((image, id) => (
          <div
            key={id}
            className={`overflow-hidden rounded-lg bg-gray-100 cursor-pointer ${
              image === bigImage
                ? "ring-2 ring-blue-500"
                : "hover:opacity-80 transition-opacity"
            }`}
            onClick={() => handleThumbnailClick(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${id + 1}`}
              className="h-30 w-30 object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Main Display Image */}
      <div className="relative rounded-lg overflow-hidden bg-gray-100 lg:col-span-4 shadow-sm">
        <img
          src={bigImage}
          alt="Selected Image"
          className="h-full w-full object-cover object-center "
        />
        {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span> */}
      </div>
    </div>
  );
};

export default ImageGallery;
