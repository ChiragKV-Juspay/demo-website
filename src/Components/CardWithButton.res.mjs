// Generated by ReScript, PLEASE EDIT WITH CARE

import * as JsxRuntime from "react/jsx-runtime";

function CardWithButton(props) {
  var buttonClass;
  switch (props.buttonColor) {
    case "primaryBlue" :
        buttonClass = "bg-primaryBlue";
        break;
    default:
      buttonClass = "bg-disabledGray";
  }
  return JsxRuntime.jsxs("div", {
              children: [
                JsxRuntime.jsx("div", {
                      children: props.title,
                      className: "font-bold text-sm"
                    }),
                JsxRuntime.jsx("div", {
                      children: props.description,
                      className: "font-light text-[#797979] text-xs"
                    }),
                JsxRuntime.jsx("button", {
                      children: "Get Started",
                      className: buttonClass + " text-white rounded-lg w-2/6 h-9 text-xs",
                      onClick: props.onClick
                    })
              ],
              className: "flex flex-col justify-center gap-2 p-4 border border-gray-100  rounded-2xl"
            });
}

var make = CardWithButton;

export {
  make ,
}
/* react/jsx-runtime Not a pure module */
