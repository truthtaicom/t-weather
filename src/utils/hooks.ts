/* eslint-disable consistent-return */
import { useEffect, useRef, useCallback, useState } from "react";
import { debounce } from "lodash";

export function useDebouncedCallback(
  callback: (value: any) => void,
  delay: number,
  options?: {}
) {
  
  return useCallback(debounce(callback, delay, options), [ // eslint-disable-line react-hooks/exhaustive-deps
    callback,
    delay,
    options,
  ]);
}

export function useDebounce(value: any, delay: number, options?: {}) {
  const previousValue = useRef(value);
  const [current, setCurrent] = useState<any>(value);
  const debouncedCallback = useDebouncedCallback(
    (value: any) => setCurrent(value),
    delay,
    options
  );
  useEffect(() => {
    // does trigger the debounce timer initially
    if (value !== previousValue.current) {
      debouncedCallback(value);
      previousValue.current = value;
      // cancel the debounced callback on clean up
      return debouncedCallback.cancel;
    }
  }, [value, debouncedCallback]);

  return current;
}

export interface UseDebouncedInputModel {
  value: string;
  onChange: (val: string) => any;
}
export const useDebouncedInput = ({
  value,
  onChange,
}: UseDebouncedInputModel) => {
  const [tmpValue, setTmpValue] = useState<string>(value);
  const debouncedValue = useDebounce(tmpValue, 300);

  useEffect(() => {
    setTmpValue(value);
  }, [value]);

  useEffect(() => {
    if (debouncedValue !== value) {
      onChange(debouncedValue);
    }
  }, [debouncedValue, onChange, value]);
  return [tmpValue, setTmpValue] as [string, (val: string) => any];
};
