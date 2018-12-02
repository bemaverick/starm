/*
* @flow
*/

import React from 'react';
import { Image } from 'react-native';
import { METRICKS } from '../../constants';


const { SCREEN_WIDTH } = METRICKS;

type _t_props = {
  right: ?number,
  left: ?number,
  uri: string,
};

type _t_state = {
  width: number,
  height: number,
};


class ResponsiveImage extends React.Component<_t_props, _t_state> {
  constructor(props: _t_props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };

    Image.getSize(props.uri, this.widthMode);
  }

  widthMode = (width: number, height: number) => {
    const maxWidth = SCREEN_WIDTH - (this.props.left || 0) - (this.props.right || 0);

    const aspectRatio = width / height;
    const measuredHeight = maxWidth / aspectRatio;

    this.setState(() => ({
      width: maxWidth,
      height: measuredHeight
    }));
  }

  render() {
    return (
      <Image
        source={{
          uri: this.props.uri
        }}
        style={{
          width: this.state.width,
          height: this.state.height,
        }}
      />
    );
  }
}

export default ResponsiveImage;
