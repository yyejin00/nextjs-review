// button.css.ts
import { style } from '@vanilla-extract/css';

export const button = style({
  textDecoration: 'none',
  color: 'var(--color_white)',
  backgroundColor: 'var(--color_highlight)',
  padding: '12px 32px',
  borderRadius: '8px',
  fontSize: 'var(--font_blue_size)',

  '@media': {
    '(max-width: 1200px)': {
      padding: '8px 26px',
    },
    '(max-width: 600px)': {
      padding: '2px 20px',
    },
  },
});

export const buttonDisabled = style({
  backgroundColor: 'var(--color-darkgrey)',
});

export const content = style({
  width: '100px',
});
