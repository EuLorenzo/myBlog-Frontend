import React, { useContext } from "react";
import TokenContext from "~/context/TokenContext";

const useTokenValue = () => {
  return useContext(TokenContext);
};

export default useTokenValue;
