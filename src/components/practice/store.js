import React from "react";
import create from "zustand";

const useStore = create(() => ({
  count: 0,
}));

export default useStore;
