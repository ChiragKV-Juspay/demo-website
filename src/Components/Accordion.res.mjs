// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Utils from "../Utilities/Utils.res.mjs";
import * as Caml_obj from "rescript/lib/es6/caml_obj.js";
import * as Caml_option from "rescript/lib/es6/caml_option.js";
import * as AccordionItem from "./AccordionItem.res.mjs";
import * as ExpandMoreIcon from "../Icons/ExpandMoreIcon.res.mjs";
import * as JsxRuntime from "react/jsx-runtime";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

function Accordion$1(props) {
  var propertyLoginAssertion = props.propertyLoginAssertion;
  var loginPropertyStartResponse = props.loginPropertyStartResponse;
  var assertion = props.assertion;
  var loginStartResponse = props.loginStartResponse;
  var attestation = props.attestation;
  var registerStartResponse = props.registerStartResponse;
  var transactionResult = props.transactionResult;
  var transactionsHistory = props.transactionsHistory;
  var userAssets = props.userAssets;
  var userData = props.userData;
  var tokenizePropertybody_property_details = {
    property_id: "1234",
    property_registrar: "Some Registrar"
  };
  var tokenizePropertybody_attestations = [
    {
      certificate: "NOC"
    },
    {
      certificate: "Ownership"
    },
    {
      certificate: "Value"
    }
  ];
  var tokenizePropertybody = {
    asset_type: "Property",
    property_details: tokenizePropertybody_property_details,
    attestations: tokenizePropertybody_attestations
  };
  var jwtBody_payload = {
    slMpcSetup: {
      keygen: {}
    },
    timeout: 60,
    time: "2024-08-09T18:06:07.581Z"
  };
  var jwtBody = {
    token: "[TOKEN_PLACEHOLDER]",
    payload: jwtBody_payload,
    uuid: "[USER_EMAIL_PLACEHOLDER]"
  };
  var bodyJson = Utils.toJson({
        sender: "siddharth@finternet",
        recipient: "nandan@finternet",
        asset: {
          currency: "INR",
          unit: 2000,
          token_manager: "ABC Bank"
        },
        signature: "AWoqX7bTaHtIyGQzgs9_c8jYdhN7sC2ascAE9hsC"
      });
  var accountTokenizeBodyJson = Utils.tokenizedBodyToJson({
        token_manager: "ABC Bank",
        asset_type: "Money",
        currency: "INR",
        account_details: {
          account_number: "1234 1234 1234 1234"
        }
      });
  var tokenizedPropertyBodyJson = Utils.tokenizedPropertyBodyToJson(tokenizePropertybody);
  var jwtBodyJson = Utils.toJsonJwtBody(jwtBody);
  var keygenResponseJson0 = Utils.toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108435,
        total_recv: 108864,
        total_wait: 1752,
        total_time: 2505
      });
  var keygenResponseJson1 = Utils.toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108371,
        total_recv: 108928,
        total_wait: 1135,
        total_time: 1906
      });
  var keygenResponseJson2 = Utils.toJsonKeyGenResponse({
        public_key: "03823d089f3612a3d4a22223d15283475c20526475cbdca733f9228a11495b9694",
        total_send: 108403,
        total_recv: 108896,
        total_wait: 208,
        total_time: 921
      });
  var prettyJson = JSON.stringify(userData, undefined, 2);
  var prettyTransactionsHistory = JSON.stringify(transactionsHistory, undefined, 2);
  var prettyAssets = JSON.stringify(userAssets, undefined, 2);
  var prettyTransactionResult = JSON.stringify(transactionResult, undefined, 2);
  var parsedTransactionResult = JSON.parse(prettyTransactionResult);
  var prettyPostBody = JSON.stringify(bodyJson, undefined, 2);
  var prettyRegisterStartResponse = JSON.stringify(registerStartResponse, undefined, 2);
  var prettyLoginStartResponse = JSON.stringify(loginStartResponse, undefined, 2);
  var prettyLoginPropertyStartResponse = JSON.stringify(loginPropertyStartResponse, undefined, 2);
  var prettyAttestation = JSON.stringify(attestation, undefined, 2);
  var prettyAssertion = JSON.stringify(assertion, undefined, 2);
  var prettyPropertyLoginAssertion = JSON.stringify(propertyLoginAssertion, undefined, 2);
  JSON.stringify(jwtBodyJson, undefined, 2);
  var prettyTokenizeAccountPostBody = JSON.stringify(accountTokenizeBodyJson, undefined, 2);
  var tokenizedPropertyBodyJson$1 = JSON.stringify(tokenizedPropertyBodyJson, undefined, 2);
  var prettyKeyGenResponse0 = JSON.stringify(keygenResponseJson0, undefined, 2);
  var prettyKeyGenResponse1 = JSON.stringify(keygenResponseJson1, undefined, 2);
  var prettyKeyGenResponse2 = JSON.stringify(keygenResponseJson2, undefined, 2);
  var accordionContent;
  switch (props.flowType) {
    case "Bank Account Tokenization" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(loginStartResponse, null) && Caml_obj.equal(assertion, null) ? JsxRuntime.jsx("div", {
                      children: "Start onboarding to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        Caml_obj.notequal(loginStartResponse, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "User Login",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: JsxRuntime.jsxs("div", {
                                            children: [
                                              "POST https://selfnode.codecrane.com/auth-0/issue_authentication_challenge?user-id=mywallet",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-1/issue_authentication_challenge?user-id=mywallet",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-2/issue_authentication_challenge?user-id=mywallet"
                                            ]
                                          }),
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyLoginStartResponse,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    })
                              }) : null,
                        Caml_obj.notequal(assertion, null) ? JsxRuntime.jsx("div", {
                                children: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "User Login Finish",
                                      detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                            summary: JsxRuntime.jsx("div", {
                                                  children: "POST https://selfnode.codecrane.com/store-result"
                                                }),
                                            detailsContent: JsxRuntime.jsx("pre", {
                                                  children: prettyAssertion,
                                                  className: "whitespace-pre-wrap"
                                                }),
                                            detailsClassName: "text-sm overflow-auto"
                                          })
                                    })
                              }) : null,
                        props.tokenizeAccount ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "Tokenization",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/ascWqX7bTaHtIyG/assets",
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyTokenizeAccountPostBody,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    }),
                                summaryClassName: ""
                              }) : null
                      ]
                    })
            });
        break;
    case "Domestic Money Transfer" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(userData, null) && Caml_obj.equal(userAssets, null) && Caml_obj.equal(transactionsHistory, null) ? JsxRuntime.jsx("div", {
                      children: "Initiate transaction to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs(Accordion, {
                              children: [
                                JsxRuntime.jsx(AccordionSummary, {
                                      "aria-controls": "panel1-content",
                                      id: "panel1-header",
                                      children: "Fetch User Details",
                                      expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                    }),
                                JsxRuntime.jsxs(AccordionDetails, {
                                      children: [
                                        Caml_obj.notequal(userData, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET user",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyJson,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null,
                                        Caml_obj.notequal(userAssets, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET assets",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyAssets,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null,
                                        Caml_obj.notequal(transactionsHistory, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET transactionsList",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyTransactionsHistory,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null
                                      ]
                                    })
                              ]
                            }),
                        props.showAuthInitiated ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "Auth Initiated (Wallet)",
                                detailsContent: "Transaction signed through the wallet",
                                summaryClassName: "",
                                detailsClassName: "text-sm overflow-auto"
                              }) : null,
                        props.showTransactionConfirm ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "Confirm Transaction",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/ascWqX7bTaHtIyG/assets/123/asset:transfer",
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyPostBody,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    }),
                                summaryClassName: ""
                              }) : null,
                        Caml_obj.notequal(transactionResult, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "GET Transaction Details",
                                detailsContent: JsxRuntime.jsxs("div", {
                                      children: [
                                        JsxRuntime.jsx("pre", {
                                              children: prettyTransactionResult,
                                              className: "whitespace-pre-wrap"
                                            }),
                                        JsxRuntime.jsx("a", {
                                              children: "View in Solana",
                                              className: "flex items-center text-blue-500  hover:text-blue-700 transition duration-300",
                                              href: "https://explorer.solana.com/tx/" + parsedTransactionResult.transaction_id + "?cluster=devnet",
                                              rel: "noopener noreferrer",
                                              target: "_blank"
                                            })
                                      ],
                                      className: "text-sm overflow-auto"
                                    }),
                                detailsClassName: "text-sm overflow-auto"
                              }) : null
                      ]
                    })
            });
        break;
    case "Finternet Onboarding" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(registerStartResponse, null) && Caml_obj.equal(attestation, null) ? JsxRuntime.jsx("div", {
                      children: "Start onboarding to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        Caml_obj.notequal(registerStartResponse, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "User Register",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: JsxRuntime.jsxs("div", {
                                            children: [
                                              "POST https://selfnode.codecrane.com/auth-0/issue_passkeys_challenge",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-1/issue_passkeys_challenge",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-2/issue_passkeys_challenge"
                                            ]
                                          }),
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyRegisterStartResponse,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    })
                              }) : null,
                        Caml_obj.notequal(attestation, null) ? JsxRuntime.jsxs("div", {
                                children: [
                                  JsxRuntime.jsx(AccordionItem.make, {
                                        summary: "User Register Finish",
                                        detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                              summary: JsxRuntime.jsxs("div", {
                                                    children: [
                                                      "POST https://selfnode.codecrane.com/auth-0/verify_passkeys_registration",
                                                      JsxRuntime.jsx("br", {}),
                                                      "POST https://selfnode.codecrane.com/auth-1/verify_passkeys_registration",
                                                      JsxRuntime.jsx("br", {}),
                                                      "POST https://selfnode.codecrane.com/auth-2/verify_passkeys_registration"
                                                    ]
                                                  }),
                                              detailsContent: JsxRuntime.jsx("pre", {
                                                    children: prettyAttestation,
                                                    className: "whitespace-pre-wrap"
                                                  }),
                                              detailsClassName: "text-sm overflow-auto"
                                            })
                                      }),
                                  JsxRuntime.jsx(AccordionItem.make, {
                                        summary: "Generate Public Key",
                                        detailsContent: JsxRuntime.jsxs("div", {
                                              children: [
                                                "Keygen response from party-0:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse0,
                                                      className: "whitespace-pre-wrap"
                                                    }),
                                                JsxRuntime.jsx("br", {}),
                                                "Keygen response from party-1:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse1,
                                                      className: "whitespace-pre-wrap"
                                                    }),
                                                JsxRuntime.jsx("br", {}),
                                                "Keygen response from party-2:",
                                                JsxRuntime.jsx("pre", {
                                                      children: prettyKeyGenResponse2,
                                                      className: "whitespace-pre-wrap"
                                                    })
                                              ]
                                            }),
                                        detailsClassName: "text-sm overflow-auto"
                                      })
                                ]
                              }) : null
                      ]
                    })
            });
        break;
    case "Loan Against Property" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(userData, null) && Caml_obj.equal(userAssets, null) && Caml_obj.equal(transactionsHistory, null) ? JsxRuntime.jsx("div", {
                      children: "Initiate loan request to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        JsxRuntime.jsxs(Accordion, {
                              children: [
                                JsxRuntime.jsx(AccordionSummary, {
                                      "aria-controls": "panel1-content",
                                      id: "panel1-header",
                                      children: "Fetch User Details",
                                      expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                    }),
                                JsxRuntime.jsxs(AccordionDetails, {
                                      children: [
                                        Caml_obj.notequal(userData, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET user",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyJson,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null,
                                        Caml_obj.notequal(userAssets, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET assets",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyAssets,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null,
                                        Caml_obj.notequal(transactionsHistory, null) ? JsxRuntime.jsxs(Accordion, {
                                                className: "w-11/12 ",
                                                children: [
                                                  JsxRuntime.jsx(AccordionSummary, {
                                                        "aria-controls": "panel2-content",
                                                        id: "panel2-header",
                                                        children: "GET transactionsList",
                                                        expandIcon: Caml_option.some(JsxRuntime.jsx(ExpandMoreIcon.make, {}))
                                                      }),
                                                  JsxRuntime.jsx(AccordionDetails, {
                                                        className: "text-sm overflow-auto",
                                                        children: Caml_option.some(JsxRuntime.jsx("pre", {
                                                                  children: prettyTransactionsHistory,
                                                                  className: "whitespace-pre-wrap"
                                                                }))
                                                      })
                                                ]
                                              }) : null
                                      ]
                                    })
                              ]
                            }),
                        props.agreementSigned ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "Agreement Signature",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/ascWqX7bTaHtIyG/assets/prpWaAX7bTaIyG/asset:pledge",
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: tokenizedPropertyBodyJson$1,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    }),
                                summaryClassName: ""
                              }) : null
                      ]
                    })
            });
        break;
    case "Property Tokenization" :
        accordionContent = JsxRuntime.jsx("div", {
              children: Caml_obj.equal(loginPropertyStartResponse, null) && Caml_obj.equal(propertyLoginAssertion, null) ? JsxRuntime.jsx("div", {
                      children: "Start onboarding to view activity logs",
                      className: "text-sm text-gray-500"
                    }) : JsxRuntime.jsxs("div", {
                      children: [
                        Caml_obj.notequal(loginPropertyStartResponse, null) ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "User Login",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: JsxRuntime.jsxs("div", {
                                            children: [
                                              "POST https://selfnode.codecrane.com/auth-0/issue_authentication_challenge?user-id=mywallet",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-1/issue_authentication_challenge?user-id=mywallet",
                                              JsxRuntime.jsx("br", {}),
                                              "POST https://selfnode.codecrane.com/auth-2/issue_authentication_challenge?user-id=mywallet"
                                            ]
                                          }),
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: prettyLoginPropertyStartResponse,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    })
                              }) : null,
                        Caml_obj.notequal(propertyLoginAssertion, null) ? JsxRuntime.jsx("div", {
                                children: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "User Login Finish",
                                      detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                            summary: JsxRuntime.jsx("div", {
                                                  children: "POST https://selfnode.codecrane.com/store-result"
                                                }),
                                            detailsContent: JsxRuntime.jsx("pre", {
                                                  children: prettyPropertyLoginAssertion,
                                                  className: "whitespace-pre-wrap"
                                                }),
                                            detailsClassName: "text-sm overflow-auto"
                                          })
                                    })
                              }) : null,
                        props.tokenizeProperty ? JsxRuntime.jsx(AccordionItem.make, {
                                summary: "Tokenization",
                                detailsContent: JsxRuntime.jsx(AccordionItem.make, {
                                      summary: "POST https://finternet-app-api.shuttleapp.rs/v1/users/ascWqX7bTaHtIyG/assets",
                                      detailsContent: JsxRuntime.jsx("pre", {
                                            children: tokenizedPropertyBodyJson$1,
                                            className: "whitespace-pre-wrap"
                                          }),
                                      detailsClassName: "text-sm overflow-auto"
                                    }),
                                summaryClassName: ""
                              }) : null
                      ]
                    })
            });
        break;
    default:
      accordionContent = null;
  }
  return JsxRuntime.jsx("div", {
              children: accordionContent
            });
}

var make = Accordion$1;

export {
  make ,
}
/* AccordionItem Not a pure module */
