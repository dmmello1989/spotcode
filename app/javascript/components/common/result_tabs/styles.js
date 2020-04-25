import styled, { css } from 'styled-components';
import { Tabs } from 'react-bulma-components';

export const CustomTab = styled(Tabs.Tab)`
  &&& {
    a{
      color: white;
      ${({ active }) => active && css`
        font-weight: 800;
        color: hsl(171, 100%, 41%);
        border-color: hsl(171, 100%, 41%);
      `}
    }
  }
`;