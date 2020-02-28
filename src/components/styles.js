import styled from "styled-components";

export const MyButton = styled.button`
  width: 100%;
  margin: 30px auto;
  text-align: center;
  border: 0;
  background: white;

  .search-type {
    padding: 10px 30px;
    color: black;
    text-decoration: none;
    border: 1px solid black;
    border-radius: 3px;
    font-size: 1.4rem;
    transition: 0.3s ease;
  }

  .search-type:hover {
    background: #e6e6e6;
  }
`;

export const PickleRick = styled.button`
  font-size: 1.4rem;
  background: #fff;
  border: 0;
  padding: 10px;
  border-radius: 3px;
  width: 100%;
  margin: 10px auto 0;
  outline-color: green;

  &:hover {
    cursor: pointer;
  }
`;

export const TheCharacterCard = styled.div`
text-align: center;
padding: 20px;
box-shadow: 0 0 0 1px rgba(0,0,0,0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
border-radius: 3px;

  img {
    width: 66%;
    border-radius: 3px;
  }

  h2 {
    margin-top: 15px;
    font-size: 2rem;
  }

  h3 {
    margin-top: 15px;
    font-size: 1.6rem;
  }

  p {
    margin-top: 7px;
    font-size: 1.4rem;
  }
`;