import styled from "styled-components/macro"

export const Container = styled.div`
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 1000px;
  @media screen and (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`
export const Link = styled.a`
  color: gray;
  text-decoration: none;
  margin-bottom: 20px;
  font-size: 15px;
`
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
`
