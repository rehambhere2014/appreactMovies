import styled from "styled-components/macro"

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`
export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 851px;
  padding: 70px 45px;
  margin: auto;
`
export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 35px;
  }
`
export const Frame = styled.div`
  margin-bottom: 40px;
`
export const Item = styled.div`
  color: white;
  max-width: 728px;
  width: 100%;
  margin: auto;
  margin-bottom: 10px;
  &:first-of-type {
    margin-top: 3em;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  background: #303030;
  padding: 0.8em 1.2em;
  margin-bottom: 1px;
  font-weight: normal;
  user-select: none;
  cursor: pointer;
  img {
    filter: brightness(0) invert(1);
    width: 26px;
    user-select: none;
    @media (max-width: 600px) {
      width: 16px;
    }
  }
  @media (max-width: 600px) {
    font-size: 16px;
  }
`
export const Body = styled.div`
  font-size: 26px;
  line-height: normal;
  font-weight: normal;
  user-select: none;
  background: #303030;
  white-space: pre-wrap;
  overflow: hidden;
  &.close {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  &.open {
    max-height: 1200px;
    transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  }
  span {
    display: block;
    padding: 0.8em 1.2em;
  }
  @media (max-width: 600px) {
    line-height: 22px;
    font-size: 16px;
  }
`
