import { memo } from "react";

import { StyledGlobalWrapper } from "./styles";

function GlobalWrapper({ children }: { children?: React.ReactNode }) {
  return <StyledGlobalWrapper>{children}</StyledGlobalWrapper>;
}

export default memo(GlobalWrapper);
