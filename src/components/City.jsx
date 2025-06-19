import styled from "styled-components";

const StyledCity = styled.div`
  color: ${({ light, theme }) => light ? theme.color.light : theme.color.dark};
  margin-bottom: ${props => props.margin_bottom};
  font-weight: normal;
  font-size: 1.8rem;
  font-family: "Audiowide", monospace;
`

const City = (props) => {
  const { light, children, ...rest } = props
  const margin_bottom = `2rem`
  return (
    <StyledCity margin_bottom={margin_bottom} light={light} {...rest} >
      {children}
    </StyledCity>
  )
}

export default City;