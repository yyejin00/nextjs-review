// navigation.css.ts
import { style, globalStyle } from '@vanilla-extract/css';

export const globalNavigationBar = style({
  position: 'sticky',
  top: 0,
});

export const innerNav = style({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '9px 200px',
  backgroundColor: 'var(--color_white)',

  '@media': {
    '(max-width: 1200px)': {
      padding: '5px 160px',
    },
    '(max-width: 600px)': {
      padding: '2px 120px',
    },
  },
});

export const logoImg = style({
  marginLeft: '20px',
  width: '153px',
  height: 'auto',
});

export const menuContent = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const menuStyle = style({
  width: '160px',
  display: 'flex',
  marginLeft: '20px',
  marginRight: '20px',
  justifyContent: 'space-between',

  '@media': {
    '(max-width: 1200px)': {
      width: '120px',
      marginLeft: '15px',
    },
    '(max-width: 600px)': {
      width: '80px',
      marginLeft: '9px',
    },
  },
});

export const menu = style({
  fontWeight: 'var(--font_content_weight)',
  color: 'var(--font_color_title)',
  fontSize: 'var(--font_highlight_size)',
});

export const loginButton = style({
  textDecoration: 'none',
  color: 'var(--color_white)',
  backgroundColor: 'var(--color_highlight)',
  padding: '12px 32px',
  borderRadius: '8px',
  fontSize: 'var(--font_blue_size)',
});

globalStyle('a', {
  textDecoration: 'none',
});
