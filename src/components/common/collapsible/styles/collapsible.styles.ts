import styled from 'styled-components';

export const CollapsibleItemContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #e5e5e5;
  background: #fff;
`;
export const CollapsibleItemTitle = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  width: 100%;
  background: #fff;
  cursor: pointer;
  span {
    padding-left: 14px;
  }
`;
export const ItemTitle = styled.div`
  padding-left: 12px;
`;
export const CollapsibleItemContent = styled.div({
  paddingLeft: 4,
});

export const FilterItemCount = styled.div(({ theme }) => ({
  marginLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 1,
  width: 25,
  height: 25,
  borderRadius: 40,
  background: theme.palette.common.black,
  color: theme.palette.common.white,
}));
