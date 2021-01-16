import styled from "styled-components/macro"
export const Item = styled.div`
  padding: 50px 5%;

  border-bottom: 8px solid #222;
  color: white;
  overflow: hidden;
`
export const Container = styled.div`
  @media (max-width: 1000px) {
    ${Item}:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
`

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${(props) => props.direction};
  max-width: 1100px;
  width: 100%;
  margin: auto;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
`
export const Pane = styled.div`
  width: 50%;
  @media screen and (max-width: 1000px) {
    width: 100%;
    text-align: center;
  }
`
export const Image = styled.img`
  max-width: 100%;
  margin: auto;
`
export const Title = styled.h1`
  font-size: 45px;
  line-height: 1.1;
  margin-bottom: 8px;
  text-transform: capitalize;
  @media screen and (max-width: 600px) {
    font-size: 25px;
  }
`
export const SubTitle = styled.h2`
  font-size: 28px;
  font-weight: normal;
  line-height: normal;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
