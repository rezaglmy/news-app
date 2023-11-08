import { breakpoints } from "@/ui/breakpoints";
import { create } from "zustand";

export type ViewportType = {
  width: number;
  height: number;
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
};

type GlobalStoreType = {
  category: string;
  setCategory: (value: string) => void;
  pageNumber: number;
  setPageNumber: (value: number) => void;
  windowSize: ViewportType;
  setWindowSize: (value: ViewportType) => void;
  handleResizeWindow: () => void;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
};

export const useGlobalStore = create<GlobalStoreType>((set) => ({
  category: "all",
  setCategory: (value: string) => {
    set(() => ({ category: value }));
  },
  pageNumber: 1,
  setPageNumber: (value: number) => {
    set(() => ({ pageNumber: value }));
  },
  windowSize: {
    width: 0,
    height: 0,
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  } as ViewportType,
  setWindowSize: (value: ViewportType) => {
    set(() => ({ windowSize: value }));
  },
  handleResizeWindow: () => {
    set(() => ({
      windowSize: {
        width: window.innerWidth,
        height: window.innerHeight,
        xs: window.innerWidth < breakpoints.xs,
        sm: window.innerWidth < breakpoints.sm,
        md: window.innerWidth < breakpoints.md,
        lg: window.innerWidth < breakpoints.lg,
        xl: window.innerWidth < breakpoints.xl,
        xxl: window.innerWidth < breakpoints.xxl,
      },
    }));
  },
  searchTerm: "",
  setSearchTerm: (value: string) => {
    set(() => ({ searchTerm: value }));
  },
}));
