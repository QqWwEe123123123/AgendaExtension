import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledButton = styled.div`
  width: ${(style) => style.width};

  height: ${(style) => style.height};
  padding: ${(style) => style.padding};
  margin: ${(style) => style.margin};
  border: ${(style) => style.border};
  border-radius: ${(style) => style.borderRadius};

  background-color: ${(style) => style.backgroundColor};
  box-shadow: ${(style) => style.boxShadow};

  // always center text
  display: ${(style) => style.display};
  align-items: ${(style) => style.alignItems};
  justify-content: ${(style) => style.justifyContent};

  // fonts
  color: ${(style) => style.color};
  font-size: ${(style) => style.fontSize};
  font-weight: ${(style) => style.fontWeight};

  cursor: ${(style) => style.cursor};
`;

const Button = ({ props }) => {
  const LogoLeft = () => {
    return (
      <StyledButton style={props.style}>
        {props.logoComponent}
        {props.text}
      </StyledButton>
    );
  };
  const LogoRight = () => {
    return (
      <StyledButton style={props.style}>
        {props.text}
        {props.logoComponent}
      </StyledButton>
    );
  };

  const NormalButton = () => {
    return <StyledButton style={props.style}>{props.text}</StyledButton>;
  };
  return (
    <>
      {props.isLogo ? (
        props.LogoLeft ? (
          <LogoLeft />
        ) : (
          <LogoRight />
        )
      ) : (
        <NormalButton />
      )}
    </>
  );
};

Button.propTypes = {
  style: propTypes.object,
  text: propTypes.string,
  isLogo: propTypes.bool,
  logoLeft: propTypes.bool,
  logoComponent: propTypes.element,
};

export default Button;
