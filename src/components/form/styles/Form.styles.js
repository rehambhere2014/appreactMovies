import styled from "styled-components"
import { Link as ReachRouterLink } from "react-router-dom"
export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  min-height: 660px;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.75);
  padding: 60px 68px 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`
export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`
export const Base = styled.form`
  display: flex;
  flex-direction: column;
`
export const Input = styled.input`
  border: none;
  margin-bottom: 20px;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
  background: #333;
  font-size: 15px;
  padding: 5px 20px;
  color: #fff;
`
export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  border: none;
  color: white;
  padding: 16px;
  cursor: pointer;
  outline: none;
  font-size: 16px;
  font-weight: bold;
`
export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`
export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`
export const Link = styled(ReachRouterLink)`
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`
export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`
