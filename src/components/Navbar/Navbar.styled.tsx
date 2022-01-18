import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    padding: 16px;
`;

export const ToggleContainer = styled.div`
    display: table;
    margin-left: auto;
    background-color: ${({ theme }) => theme.buttonCanvas}
`;