import React from "react";
import { InputText } from "../../components/input-text";
import { debounce } from "../../helpers/utils";

export function RefundSearch() {
  const [inputValue, setInputValue] = React.useState("");

  const debouncedSetValue = React.useCallback(
    debounce((value: string) => console.log("valor com debounce", value), 200),
    [],
  );

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    console.log(value);
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      placeholder="Pesquisar pelo nome"
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
