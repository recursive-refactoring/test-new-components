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

  // const handlePrint = () => {
  //   const content: any = printRef.current.innerHTML;
  //   const printWindow: any = window.open("", "", "width=600,height=600");
  //   printWindow.document.write(`
  //     <html>
  //       <head>
  //         <title>Print</title>
  //       </head>
  //       <body>
  //         ${content}
  //       </body>
  //     </html>
  //   `);
  //   printWindow.document.close();
  //   printWindow.print();
  // };

  const handlePrint = () => {
    window.print();
  };

  return { column, renderData, methods, handlePrint, printRef };
};
