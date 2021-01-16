import styled from "styled-components/macro"
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`
export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`
export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`
export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;
  &:hover ${Name} {
    font-weight: bold;
    color: white;
  }
  &:hover > ${Picture} {
    border: 3px solid white;
  }
  &:last-of-type {
    margin-right: 0;
  }
`
