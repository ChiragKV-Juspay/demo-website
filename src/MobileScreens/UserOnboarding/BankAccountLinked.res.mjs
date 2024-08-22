// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";
import * as SuccessStatusWithText from "../../Components/SuccessStatusWithText.res.mjs";

function BankAccountLinked(props) {
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx(SuccessStatusWithText.make, {
                      text: "Bank account linked Successfully!"
                    }),
                JsxRuntime.jsx("div", {
                      children: JsxRuntime.jsx("button", {
                            children: "Next",
                            className: " bg-[#00B76A] text-white rounded-lg w-full h-10 text-sm"
                          })
                    })
              ],
              className: "flex flex-col justify-between py-10 h-full "
            });
}

var make = BankAccountLinked;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
