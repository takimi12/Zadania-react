import { ReactNode, useState } from "react";
import styled from "styled-components"


interface ParagraphProps {
    children: ReactNode;
  }

  const StyledText = styled.p`
    color: ${props => props.theme.colors.textBackground}
    `



export const Text = ({children}:ParagraphProps) => {






return (
    <>
    <StyledText>{children}</StyledText>

        </>
    )
}