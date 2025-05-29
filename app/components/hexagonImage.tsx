import React from 'react';
import Svg, {
    ClipPath,
    Defs,
    LinearGradient,
    Polygon,
    Stop,
    Image as SvgImage,
} from 'react-native-svg';

const HexagonImageWithBorder = ({
  imageSource,
  size = 120,
  borderWidth = 8,
  gradientColors = ['#A73EE7', '#00EBFF'],
}:any) => {
  const getHexPoints = (s:number) => {
    const half = s / 2;
    const short = s * 0.25;
    const long = s * 0.75;
    return `${half},0 ${s},${short} ${s},${long} ${half},${s} 0,${long} 0,${short}`;
  };

  const outerSize = size;
  const innerSize = size - borderWidth * 2;

  return (
    <Svg height={outerSize} width={outerSize}>
      <Defs>
        <LinearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0%" stopColor={gradientColors[0]} />
          <Stop offset="100%" stopColor={gradientColors[1]} />
        </LinearGradient>

        <ClipPath id="clipHex">
          <Polygon points={getHexPoints(innerSize)} x={borderWidth} y={borderWidth} />
        </ClipPath>
      </Defs>

      <Polygon points={getHexPoints(outerSize)} fill="url(#hexGradient)" />

      <SvgImage
        href={imageSource}
        width={innerSize}
        height={innerSize}
        x={borderWidth}
        y={borderWidth}
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#clipHex)"
      />
    </Svg>
  );
};

export default HexagonImageWithBorder;
