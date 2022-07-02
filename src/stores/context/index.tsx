import React, { createContext, useContext } from "react";

import { store, StoreType } from "../store";

const StoreContext = createContext<StoreType>(store);

export function StoreProvider({ children }: { children?: React.ReactNode }): React.ReactElement {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreType {
  return useContext(StoreContext);
}
