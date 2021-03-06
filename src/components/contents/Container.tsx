import React from "react";
import {
  StyledInput,
  StyledText,
} from "../../styles/containerstyle";
import { ReactComponent as GitLogoWhite } from "../svgs/githubwhite.svg";

interface Props {
  input_handler: any;
}

const Container: React.FC<Props> = ({ input_handler }) => {
  return (
      <>
      <GitLogoWhite width="64px" />
      <StyledText>Find your profile</StyledText>
      <StyledInput
        onChange={(e: any) => input_handler(e.target.value)}
      ></StyledInput>
      </>
  );
};

export default Container;
