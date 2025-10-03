"use client";

import { useFormLib } from "@/hooks/use-form-lib";
import {
  columnsDynamic,
  data,
  signinFormDefaultValues,
} from "./components.data";
import { useRef, useState } from "react";

export const useComponents = () => {
  const column = columnsDynamic;
  const renderData = data;
  const [fil, setFil] = useState({});

  const { methods, handleSubmit } = useFormLib({
    defaultValues: signinFormDefaultValues,
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  const printRef: any = useRef<any>(null);

  const handlePrint = () => {
    window.print();
  };

  return {
    column,
    renderData,
    methods,
    handlePrint,
    printRef,
    onSubmit,
    handleSubmit,
  };
};
