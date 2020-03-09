import { light } from 'config/themes';

export type Theme = typeof light & {
  mode: 'light' | 'dark';
};

export type ThemeProp = {
  theme: Theme;
};
