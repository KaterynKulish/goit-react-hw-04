import { Audio } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Audio
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="three-dots-loading"
      wrapperStyle
    />
  );
};
export default Loader;
