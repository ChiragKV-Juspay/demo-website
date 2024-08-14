// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Belt_Array from "rescript/lib/es6/belt_Array.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import Box from "@mui/material/Box";
import * as JsxRuntime from "react/jsx-runtime";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";

function Drawer$1(props) {
  var handleDrawerSelection = props.handleDrawerSelection;
  var setOpenDrawer = props.setOpenDrawer;
  var toggleDrawer = function ($$event, reason) {
    setOpenDrawer(function (param) {
          return false;
        });
  };
  var moneyUseCases = [
    "User Onboarding",
    "Domestic Money Transfer"
  ];
  var propertyUseCases = [
    "User Onboarding",
    "Loan Against Property"
  ];
  var renderSection = function (title, items) {
    return JsxRuntime.jsxs("div", {
                children: [
                  JsxRuntime.jsxs(List, {
                        children: [
                          JsxRuntime.jsx(ListSubheader, {
                                children: Caml_option.some(title)
                              }),
                          Belt_Array.map(items, (function (item) {
                                  return JsxRuntime.jsx(ListItem, {
                                              children: Caml_option.some(JsxRuntime.jsx(ListItemButton, {
                                                        children: Caml_option.some(JsxRuntime.jsx(ListItemText, {
                                                                  primary: Caml_option.some(item)
                                                                })),
                                                        onClick: (function (param) {
                                                            handleDrawerSelection(item);
                                                            setOpenDrawer(function (param) {
                                                                  return false;
                                                                });
                                                          })
                                                      })),
                                              disablePadding: true
                                            }, item);
                                }))
                        ]
                      }),
                  JsxRuntime.jsx(Divider, {})
                ]
              });
  };
  var drawerContent = JsxRuntime.jsx("div", {
        children: JsxRuntime.jsxs(Box, {
              children: [
                renderSection("Money use cases", moneyUseCases),
                renderSection("Property use cases", propertyUseCases)
              ]
            }),
        role: "presentation",
        onClick: (function (param) {
            setOpenDrawer(function (param) {
                  return false;
                });
          })
      });
  return JsxRuntime.jsx(Drawer, {
              children: Caml_option.some(drawerContent),
              onClose: toggleDrawer,
              open: props.openDrawer
            });
}

var make = Drawer$1;

export {
  make ,
}
/* @mui/material/Box Not a pure module */
