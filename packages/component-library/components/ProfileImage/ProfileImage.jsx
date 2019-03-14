import React from 'react';
import { Image } from 'react-primitives';

const ProfileImage = props => {
  return (
    <Image
      style={{
        width: 40,
        height: 40,
        borderRadius: 20
      }}
      resizeMode="cover"
      source={{ uri: props.uri }}
    />
  );
};
ProfileImage.defaultProps = {
  uri: 'http://www.lucasmcgartland.com/profile_photo.jpg'
};

export default ProfileImage;
