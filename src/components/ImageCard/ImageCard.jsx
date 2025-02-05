const ImageCard = ({ photo, openModal }) => {
  return (
    <div>
      <a href={photo.urls.small} rel="noreferrer noopener">
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          onClick={() => openModal(photo.urls.regular, photo.alt_description)}
        ></img>
      </a>
    </div>
  );
};

export default ImageCard;
