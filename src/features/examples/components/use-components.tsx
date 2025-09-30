"use client";

import { useFormLib } from "@/hooks/use-form-lib";
import {
  columnsDynamic,
  data,
  signinFormDefaultValues,
} from "./components.data";
import { useRef } from "react";

export const useComponents = () => {
  const column = columnsDynamic;
  const renderData = data;

  const { methods } = useFormLib({
    defaultValues: signinFormDefaultValues,
  });

  const printRef: any = useRef<any>(null);

  const handlePrint = () => {
    window.print();
  };

  return { column, renderData, methods, handlePrint, printRef };
};
