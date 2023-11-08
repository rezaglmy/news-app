import { UseHeaderResult } from "@/features/articles";
import { useGlobalStore } from "@/store";

export const useHeader = (): UseHeaderResult => {
  const { setCategory, setSearchTerm } = useGlobalStore();

  const handleSelectCategory = (value: string) => {
    setCategory(value.toLowerCase());
    setSearchTerm("");
  };

  return {
    handleSelectCategory,
  };
};
