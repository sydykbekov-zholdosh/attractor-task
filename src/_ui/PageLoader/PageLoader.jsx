import React from 'react';
import { useTheme } from '@material-ui/core';

import { CssBox } from './PageLoaderStyle';

export default function PageLoader({ className, position, opacity }) {
  const { palette } = useTheme();
  return (
    <CssBox
      palette={palette}
      position={position || 'fixed'}
      className={className}
      opacity={opacity}
    >
      <div id="cube-loader">
        <div className="caption">
          <div className="cube-loader">
            <div className="cube loader-1" />
            <div className="cube loader-2" />
            <div className="cube loader-4" />
            <div className="cube loader-3" />
          </div>
        </div>
      </div>
    </CssBox>
  );
}
