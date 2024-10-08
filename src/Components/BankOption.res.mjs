// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Colors from "../Utilities/Colors.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";

function BankOption(props) {
  var __showCardNumber = props.showCardNumber;
  var __showBankDetails = props.showBankDetails;
  var options = props.options;
  var showBankDetails = __showBankDetails !== undefined ? __showBankDetails : false;
  var showCardNumber = __showCardNumber !== undefined ? __showCardNumber : false;
  var radioButtonPath = props.isSelected ? (
      showBankDetails ? "/RadioButtonSelectedBlue.svg" : "/RadioButtonSelected.svg"
    ) : "/RadioButtonUnselected.svg";
  var tmp;
  tmp = options.TAG === "ContactOptions" ? JsxRuntime.jsx("img", {
          className: "border border-white rounded-md",
          alt: "Description of image",
          src: options._0.imagePath
        }) : JsxRuntime.jsx("img", {
          alt: "Description of image",
          src: options._0.imagePath
        });
  var tmp$1;
  if (options.TAG === "ContactOptions") {
    tmp$1 = JsxRuntime.jsx("div", {
          children: options._0.finternetId,
          className: "text-xs text-[" + Colors.colors.gray + "] "
        });
  } else if (showBankDetails) {
    var bank = options._0;
    tmp$1 = JsxRuntime.jsxs("div", {
          children: [
            JsxRuntime.jsxs("div", {
                  children: [
                    JsxRuntime.jsx("div", {
                          children: "LTV ratio:",
                          className: "text-xs text-[" + Colors.colors.gray + "] font-medium"
                        }),
                    JsxRuntime.jsx("div", {
                          children: bank.ltvRatio,
                          className: "text-xs text-[" + Colors.colors.propertyBlue + "] font-bold"
                        })
                  ],
                  className: "flex flex-row gap-1"
                }),
            JsxRuntime.jsxs("div", {
                  children: [
                    JsxRuntime.jsx("div", {
                          children: "Interest:",
                          className: "text-xs text-[" + Colors.colors.gray + "] font-medium"
                        }),
                    JsxRuntime.jsx("div", {
                          children: bank.interestRate,
                          className: "text-xs text-[" + Colors.colors.propertyBlue + "] font-bold"
                        })
                  ],
                  className: "flex flex-row justify-between gap-1"
                })
          ],
          className: "flex flex-row justify-between"
        });
  } else {
    tmp$1 = null;
  }
  var tmp$2;
  tmp$2 = showCardNumber && options.TAG !== "ContactOptions" ? JsxRuntime.jsx("div", {
          children: options._0.cardNumber
        }) : null;
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs("div", {
                              children: [
                                tmp,
                                JsxRuntime.jsx("div", {
                                      className: "w-px h-4 bg-[#E6E6E6] self-center"
                                    })
                              ],
                              className: "flex flex-row gap-2"
                            }),
                        JsxRuntime.jsxs("div", {
                              children: [
                                JsxRuntime.jsx("div", {
                                      children: options._0.name,
                                      className: "font-bold text-sm"
                                    }),
                                tmp$1,
                                tmp$2
                              ],
                              className: "flex flex-col w-9/12"
                            })
                      ],
                      className: "flex flex-row gap-3 w-11/12"
                    }),
                JsxRuntime.jsx("img", {
                      alt: "Description of image",
                      src: radioButtonPath
                    })
              ],
              className: "flex flex-row justify-between mx-1 cursor-pointer",
              onClick: props.onClick
            });
}

var make = BankOption;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
