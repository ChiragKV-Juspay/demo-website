// Generated by ReScript, PLEASE EDIT WITH CARE

import * as React from "react";
import * as Colors from "../../Utilities/Colors.res.mjs";
import * as BankOption from "../../Components/BankOption.res.mjs";
import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as ExampleData from "../../Utilities/ExampleData.res.mjs";
import * as HeaderWithBack from "../../Components/HeaderWithBack.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import * as SecuredByFinterest from "../../Components/SecuredByFinterest.res.mjs";

function SelectBankForLoan(props) {
  var handleNavigate = props.handleNavigate;
  var option = ExampleData.bankOptions[0];
  var firstBankId = option !== undefined ? option.id : "";
  var match = React.useState(function () {
        return firstBankId;
      });
  var setSelectedBank = match[1];
  var selectedBank = match[0];
  var match$1 = React.useState(function () {
        return Belt_Array.map(ExampleData.bankOptions, (function (option) {
                      return [
                              option.id,
                              true
                            ];
                    }));
      });
  var setLoadingStates = match$1[1];
  console.log(match$1[0]);
  React.useEffect((function () {
          var ids = Belt_Array.map(ExampleData.bankOptions, (function (option) {
                  return option.id;
                }));
          var timeoutIds = ids.map(function (id) {
                return setTimeout((function () {
                              setLoadingStates(function (loadingStates) {
                                    return loadingStates.map(function (state) {
                                                var stateId = state[0];
                                                if (stateId === id) {
                                                  return [
                                                          stateId,
                                                          false
                                                        ];
                                                } else {
                                                  return state;
                                                }
                                              });
                                  });
                            }), 500);
              });
          return (function () {
                    timeoutIds.forEach(function (timeoutId) {
                          clearTimeout(timeoutId);
                        });
                  });
        }), []);
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx(HeaderWithBack.make, {
                                    title: "Select an offer",
                                    backButtonStrokeColor: Colors.colors.propertyBlue
                                  }),
                              className: "flex flex-col gap-10"
                            }),
                        JsxRuntime.jsx("div", {
                              children: JsxRuntime.jsx("div", {
                                    children: Belt_Array.map(ExampleData.bankOptions, (function (option) {
                                            var isSelected = selectedBank === option.id;
                                            return JsxRuntime.jsxs("div", {
                                                        children: [
                                                          JsxRuntime.jsx(BankOption.make, {
                                                                onClick: (function (param) {
                                                                    setSelectedBank(function (param) {
                                                                          return option.id;
                                                                        });
                                                                  }),
                                                                isSelected: isSelected,
                                                                options: {
                                                                  TAG: "BankOptions",
                                                                  _0: option
                                                                },
                                                                showBankDetails: true
                                                              }),
                                                          isSelected ? JsxRuntime.jsx("button", {
                                                                  children: "View Loan Offer",
                                                                  className: "bg-[" + Colors.colors.propertyBlue + "] text-white rounded-lg w-full h-10 mt-4",
                                                                  onClick: (function (param) {
                                                                      handleNavigate();
                                                                    })
                                                                }) : null,
                                                          JsxRuntime.jsx("div", {
                                                                className: "border-t border-dashed w-full mt-6 border-[#E6E6E6]"
                                                              })
                                                        ],
                                                        className: "mt-6"
                                                      }, option.id);
                                          }))
                                  }),
                              className: "flex flex-col w-full "
                            })
                      ]
                    }),
                JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsx("img", {
                              alt: "Description of image",
                              src: "/Info.svg"
                            }),
                        JsxRuntime.jsx("div", {
                              children: "By clicking continue, I agree to share any additional property documents to the selected bank, as may be required.",
                              className: "text-xs font-light text-[" + Colors.colors.gray + "]"
                            })
                      ],
                      className: "flex flex-row gap-2 w-11/12 bg-white p-2 rounded-xl drop-shadow-md self-center"
                    }),
                JsxRuntime.jsx(SecuredByFinterest.make, {
                      color: Colors.colors.propertyBlue
                    })
              ],
              className: "flex flex-col h-full justify-between"
            });
}

var make = SelectBankForLoan;

export {
  make ,
}
/* react Not a pure module */
