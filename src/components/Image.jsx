import { IKImage } from "imagekitio-react";

// eslint-disable-next-line react/prop-types
const Image = ({ src, className, w, h }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      loading="lazy"
      className={className}
      width={w}
      height={h}
      transformation={[
        {
          width: w,
          height: h,
        },
      ]}
    />
  );
};

export default Image;
