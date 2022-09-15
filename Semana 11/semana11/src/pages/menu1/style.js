import styled from 'styled-components';

export const MenuItem = styled.li`
  text-align: center;
  line-height: 32px;
  list-style: none;
  color: ${props => (props.active === '1' ? 'blue' : 'grey')};
`;
