import styled from "styled-components";

const StyledTime = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  color: ${({light, theme}) => light ? theme.color.light : theme.color.dark};
  font-weight: normal;
  font-size: 1.4rem;
  font-family: "Audiowide", monospace;
`

const Time = (props) => {
  const { ...rest } = props
  const margin_bottom = `2rem`
  return (
    <StyledTime margin_bottom={margin_bottom} {...rest} >
    </StyledTime>
  )
}

export default Time;