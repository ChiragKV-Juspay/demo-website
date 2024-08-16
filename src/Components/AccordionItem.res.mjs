// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as ExpandMoreIcon from "../Icons/ExpandMoreIcon.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function AccordionItem(props) {
  var detailsClassName = props.detailsClassName;
  var summaryClassName = props.summaryClassName;
  return JsxRuntime.jsxs(Accordion, {
              children: [
                JsxRuntime.jsx(AccordionSummary, {
                      "aria-controls": "panel-content",
                      className: summaryClassName !== undefined ? summaryClassName : "",
                      id: "panel-header",
                      children: Caml_option.some(props.summary),
                      expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                    }),
                JsxRuntime.jsx(AccordionDetails, {
                      className: detailsClassName !== undefined ? detailsClassName : "",
                      children: Caml_option.some(props.detailsContent)
                    })
              ]
            });
}

var make = AccordionItem;

export {
  make ,
}
/* ExpandMoreIcon Not a pure module */
