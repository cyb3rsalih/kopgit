import React from 'react';
import { ImageStyle } from 'react-native';
import { Icon, IconElement,useTheme } from '@ui-kitten/components';

export const ArrowForwardIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-forward-outline'/>
);

export const GoogleIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='google'/>
);

export const FacebookIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='facebook'/>
);

export const TwitterIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='twitter'/>
);

export const HeartIconFill = (style: ImageStyle): IconElement => (
  <Icon {...style} name='heart'/>
);

export const EmailIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='email'/>
);

export const EyeIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye'/>
);

export const EyeOffIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='eye-off'/>
);

export const PersonIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='person'/>
);

export const ArrowIosBackIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='arrow-ios-back'/>
);

export const DoneAllIcon = (style: ImageStyle): IconElement => {
  const theme = useTheme();
  return (
    <Icon {...style} width={16} height={16} fill={theme['color-primary-default']} name='done-all'/>
  );
};

export const SearchIcon = (style: ImageStyle): IconElement => (
  <Icon {...style} name='search'/>
);
