import styled from 'styled-components';

export const FeedbackList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: center;
    gap: 18px;
`

export const FeedbackBtn = styled.button`
    cursor: pointer;
    padding: 10px 20px;
    border: none;
    border-radius: 12px;

    background-color: white;
    color: darkblue;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);

    text-transform: capitalize;
    font-size: 25px;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: #145974;
    color: #eee;
    box-shadow: 1px 0px 1px rgba(255, 255, 255, 0.2);
  }
`;