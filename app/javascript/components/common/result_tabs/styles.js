import styled, { css } from 'styled-components';
import { Tabs } from 'react-bulma-components';

export const CustomTab = styled(Tabs.Tab)`
  a{
    color: white;
    ${({ active }) => active && css`
      color: hsl(171, 100%, 41%);
      background: green;
      border-color: hsl(171, 100%, 41%);
    `}
  }
`