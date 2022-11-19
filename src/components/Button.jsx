import React from 'react';
import { css } from '@emotion/react';

export const Button = ({ text, ...props }) => (
  <button
    {...props}
    css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
    `}>{text}</button>
)
