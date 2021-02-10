import React, { FunctionComponent } from 'react';

interface OwnProps {
  photoURL: string
}

type Props = OwnProps;

const PhotoViewer: FunctionComponent<Props> = (props) => {

  return (<img src="" alt=""/>);
};

export default PhotoViewer;
