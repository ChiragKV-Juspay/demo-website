@new external urlSearchParams: 'a = "URLSearchParams"
@val external window: 'a = "window"

type domesticMoneyTransferScreens =
  | Home
  | EnterAmount

  | Transfer
  | TransactionCompleted
  | FinternetHome

type finternetOnboardingScreens =
  | FinternetLogin
  | CreateAccount
  | QRScreen
  | FinternetEmptyHome

type onboardingScreens =
  | OnboardingLogin
  | LinkBankAccount
  | SelectBank
  | SelectedBankAccount

  | BankAccountLinked

type loanAgainstPropertyScreens =
  | PropertyDashboard
  | ShareVerifiableCredentials
  | SelectBankForLoan
  | KeyFactSheet
  | SignAgreement
  | LoanSanctionedSuccessfully
  | FinternetHomeMyProp

// | LinkProperty
// | LinkedHome
// | LoanSteps
// | FillLoanApplication
// | LinkCredentials

type propertyUserOnboardingScreens =
  | PropertyLogin
  | PropertyTokenizationHome
  | PropertyDetailsForm
  | AttestVerifiableCredentials
  | PropertyTokenizedStatus

// | PropertyDashboard
// | ShareVerifiableCredentials

@react.component
let make = () => {
  let (currentFinternetOnboardingScreen, setCurrentFinternetOnboardingScreen) = React.useState(_ =>
    FinternetLogin
  )
  let (currentOnboardingScreen, setCurrentOnboardingScreen) = React.useState(_ => OnboardingLogin)
  let (currentTransferScreen, setCurrentTransferScreen) = React.useState(_ => Home)
  let (currentLoanAgainstPropertyScreen, setCurrentLoanAgainstPropertyScreen) = React.useState(_ =>
    PropertyDashboard
  )

  let (
    currentPropertyUserOnboardingScreen,
    setCurrentPropertyUserOnboardingScreen,
  ) = React.useState(_ => PropertyLogin)

  let (selectedOption, setSelectedOption) = React.useState(_ => "Hello World!")

  let (userData, setUserData) = React.useState(() => Js.Json.null)
  let (transactionsHistory, setTransactionsHistory) = React.useState(() => Js.Json.null)
  let (userAssets, setUserAssets) = React.useState(() => Js.Json.null)
  let (transactionResult, setTransactionResult) = React.useState(() => Js.Json.null)

  let (tokenizeAccount, setTokenizeAccount) = React.useState(_ => false)
  let (tokenizeProperty, setTokenizeProperty) = React.useState(_ => false)
  let (agreementSigned, setAgreementSigned) = React.useState(_ => false)

  let (tokenizeAccountResult, setTokenizeAccountResult) = React.useState(() => Js.Json.null)
  // let (tokenizeAccountResult, setTokenizeAccountResult) = React.useState(() => Js.Json.null)

  let (showAuthInitiated, setShowAuthInitiated) = React.useState(_ => false)
  let (showTransactionConfirm, setShowTrasactionConfirm) = React.useState(_ => false)
  let (registerStartResponse, setRegisterStartResponse) = React.useState(() => Js.Json.null)
  let (loginStartResponse, setLoginStartResponse) = React.useState(() => Js.Json.null)
  let (loginPropertyStartResponse, setLoginPropertyStartResponse) = React.useState(() =>
    Js.Json.null
  )

  let (attestation, setAttestation) = React.useState(() => Js.Json.null)
  let (assertion, setAssertion) = React.useState(() => Js.Json.null)
  let (propertyLoginAssertion, setPropertyLoginAssertion) = React.useState(() => Js.Json.null)

  let (showFaceIDModal, setShowFaceIDModal) = React.useState(_ => false)

  let toggleFaceIDModal = () => {
    setShowFaceIDModal(prev => !prev)
  }
  let (isCollapsed, setIsCollapsed) = React.useState(_ => false)

  let toggleCollapse = () => {
    setIsCollapsed(prev => !prev)
  }

  let handlePrevScreen = () => {
    switch currentTransferScreen {
    | Home => ()
    | Transfer => setCurrentTransferScreen(_ => Home)
    | EnterAmount => setCurrentTransferScreen(_ => Transfer)
    | TransactionCompleted => setCurrentTransferScreen(_ => EnterAmount)
    | FinternetHome => setCurrentTransferScreen(_ => TransactionCompleted)
    }
  }

  let handleNextScreen = () => {
    switch currentTransferScreen {
    | Home => setCurrentTransferScreen(_ => Transfer)
    | Transfer => setCurrentTransferScreen(_ => EnterAmount)
    | EnterAmount => setCurrentTransferScreen(_ => TransactionCompleted)
    | TransactionCompleted => setCurrentTransferScreen(_ => FinternetHome)
    | FinternetHome => ()
    }
  }

  let handlePrevOnboardingScreen = () => {
    switch currentOnboardingScreen {
    | OnboardingLogin => ()
    | LinkBankAccount => setCurrentOnboardingScreen(_ => OnboardingLogin)
    | SelectBank => setCurrentOnboardingScreen(_ => LinkBankAccount)
    | SelectedBankAccount => setCurrentOnboardingScreen(_ => SelectBank)
    | BankAccountLinked => setCurrentOnboardingScreen(_ => SelectedBankAccount)
    }
  }

  let handleNextOnboardingScreen = () => {
    switch currentOnboardingScreen {
    | OnboardingLogin => setCurrentOnboardingScreen(_ => LinkBankAccount)
    | LinkBankAccount => setCurrentOnboardingScreen(_ => SelectBank)
    | SelectBank => setCurrentOnboardingScreen(_ => SelectedBankAccount)
    | SelectedBankAccount => setCurrentOnboardingScreen(_ => BankAccountLinked)

    | BankAccountLinked => ()
    }
  }
  let handlePrevFinternetOnboardingScreen = () => {
    switch currentFinternetOnboardingScreen {
    | FinternetLogin => ()
    | CreateAccount => setCurrentFinternetOnboardingScreen(_ => FinternetLogin)
    | QRScreen => setCurrentFinternetOnboardingScreen(_ => CreateAccount)
    | FinternetEmptyHome => setCurrentFinternetOnboardingScreen(_ => QRScreen)
    }
  }

  let handleNextFinternetOnboardingScreen = () => {
    switch currentFinternetOnboardingScreen {
    | FinternetLogin => setCurrentFinternetOnboardingScreen(_ => CreateAccount)
    | CreateAccount => setCurrentFinternetOnboardingScreen(_ => QRScreen)
    | QRScreen => setCurrentFinternetOnboardingScreen(_ => FinternetEmptyHome)
    | FinternetEmptyHome => ()
    }
  }
  let handlePrevLoanAgainstPropertyScreen = () => {
    switch currentLoanAgainstPropertyScreen {
    | PropertyDashboard => ()

    | ShareVerifiableCredentials => setCurrentLoanAgainstPropertyScreen(_ => PropertyDashboard)
    | SelectBankForLoan => setCurrentLoanAgainstPropertyScreen(_ => ShareVerifiableCredentials)
    | KeyFactSheet => setCurrentLoanAgainstPropertyScreen(_ => SelectBankForLoan)
    | SignAgreement => setCurrentLoanAgainstPropertyScreen(_ => KeyFactSheet)
    | LoanSanctionedSuccessfully => setCurrentLoanAgainstPropertyScreen(_ => SignAgreement)
    | FinternetHomeMyProp => setCurrentLoanAgainstPropertyScreen(_ => LoanSanctionedSuccessfully)
    }
  }

  let handleNextLoanAgainstPropertyScreen = () => {
    switch currentLoanAgainstPropertyScreen {
    | PropertyDashboard => setCurrentLoanAgainstPropertyScreen(_ => ShareVerifiableCredentials)

    | ShareVerifiableCredentials => setCurrentLoanAgainstPropertyScreen(_ => SelectBankForLoan)
    | SelectBankForLoan => setCurrentLoanAgainstPropertyScreen(_ => KeyFactSheet)
    | KeyFactSheet => setCurrentLoanAgainstPropertyScreen(_ => SignAgreement)
    | SignAgreement => setCurrentLoanAgainstPropertyScreen(_ => LoanSanctionedSuccessfully)
    | LoanSanctionedSuccessfully => setCurrentLoanAgainstPropertyScreen(_ => FinternetHomeMyProp)
    | FinternetHomeMyProp => ()
    }
  }

  let handlePropertyUserOnboardingNextScreen = () => {
    switch currentPropertyUserOnboardingScreen {
    | PropertyLogin => setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizationHome)
    | PropertyTokenizationHome => setCurrentPropertyUserOnboardingScreen(_ => PropertyDetailsForm)
    | PropertyDetailsForm =>
      setCurrentPropertyUserOnboardingScreen(_ => AttestVerifiableCredentials)
    | AttestVerifiableCredentials =>
      setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizedStatus)
    | PropertyTokenizedStatus => ()
    }
  }

  let handlePropertyUserOnboardingPrevScreen = () => {
    switch currentPropertyUserOnboardingScreen {
    | PropertyLogin => ()
    | PropertyTokenizationHome => setCurrentPropertyUserOnboardingScreen(_ => PropertyLogin)
    | PropertyDetailsForm => setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizationHome)
    | AttestVerifiableCredentials =>
      setCurrentPropertyUserOnboardingScreen(_ => PropertyDetailsForm)
    | PropertyTokenizedStatus =>
      setCurrentPropertyUserOnboardingScreen(_ => AttestVerifiableCredentials)
    }
  }

  let fetchData = async () => {
    let endpoint = `https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId`
    let response = await Fetch.get(endpoint)
    let json = await response->Fetch.Response.json
    Js.log(json)
    setUserData(_ => json)
  }
  let fetchUserAssets = async () => {
    let assetsEndpoint = `https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId/assets`
    let response = await Fetch.get(assetsEndpoint)
    let json = await response->Fetch.Response.json
    Js.log(json)

    setUserAssets(_ => json)
  }
  // let postUserAssets = async () => {
  //   let assetsEndpoint = `https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId/assets`

  //   let transferBody = {"username": "mywallet"}
  //   let response = await Fetch.fetch(
  //     assetsEndpoint,
  //     {
  //       method: #POST,
  //       body: transferBody->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
  //       headers: Headers.fromObject({
  //         "Content-type": "application/json",
  //       }),
  //       // credentials: #omit,
  //     },
  //   )
  //   let response = await Fetch.get(assetsEndpoint)
  //   let json = await response->Fetch.Response.json
  //   Js.log(json)

  //   setUserAssets(_ => json)
  // }

  let authenticate = async () => {
    // let urlParams = urlSearchParams(window["location"]["search"])
    // let uuid = urlParams["get"]("uuid")
    // let isRegistered = urlParams["get"]("registered") === "true"
    // Console.log(urlParams)
    // if !isRegistered {
    let result = await RegisterWithPassKeys.registerWithPasskeys("`chirag`")
    // if !result {
    //   Js.error("Failed to register with passkeys")
    //   // throw new Error("Failed to register with passkeys");
    // }

    // return sendResultToServer(result);
    // }
  }
  let simpleWebAuthnRegister = async () => {
    open Fetch
    toggleFaceIDModal()
    // https://webauthn-fin-production.up.railway.app/api/passkey/registerStart
    let transferBody = {"username": "mywallet"}
    let response = await fetch(
      "https://webauthn-fin-production.up.railway.app/api/passkey/registerStart",
      {
        method: #POST,
        body: transferBody->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
        headers: Headers.fromObject({
          "Content-type": "application/json",
        }),
        // credentials: #omit,
      },
    )
    let json = await response->Fetch.Response.json
    setRegisterStartResponse(_ => json)

    let attestationResponse = await SimpleWebAuthnTypes.startRegistration(json)
    setAttestation(_ => attestationResponse)

    Console.log(attestationResponse)
    let registerFinishResponse = await fetch(
      "https://webauthn-fin-production.up.railway.app/api/passkey/registerFinish",
      {
        method: #POST,
        body: attestationResponse->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
        headers: Headers.fromObject({
          "Content-type": "application/json",
        }),
        // credentials: #omit,
      },
    )
    Console.log(registerFinishResponse)
    toggleFaceIDModal()
    // Console.log(registerFinishResponse)
  }
  let simpleWebAuthnLogin = async () => {
    open Fetch
    toggleFaceIDModal()
    // https://webauthn-fin-production.up.railway.app/api/passkey/registerStart
    let transferBody = {"username": "mywallet"}
    let response = await fetch(
      "https://webauthn-fin-production.up.railway.app/api/passkey/loginStart",
      {
        method: #POST,
        body: transferBody->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
        headers: Headers.fromObject({
          "Content-type": "application/json",
        }),
      },
    )
    let json = await response->Fetch.Response.json
    switch selectedOption {
    | "User Onboarding" => setLoginStartResponse(_ => json)
    | "Property User Onboarding" => setLoginPropertyStartResponse(_ => json)
    | _ => ()
    }

    let assertionResponse = await SimpleWebAuthnTypes.startAuthentication(json)
    switch selectedOption {
    | "User Onboarding" => setAssertion(_ => assertionResponse)
    | "Property User Onboarding" => setPropertyLoginAssertion(_ => assertionResponse)
    | _ => ()
    }
    // Console.log(attestationResponse)
    let loginFinishResponse = await fetch(
      "https://webauthn-fin-production.up.railway.app/api/passkey/loginFinish",
      {
        method: #POST,
        body: assertionResponse->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
        headers: Headers.fromObject({
          "Content-type": "application/json",
        }),
      },
    )
    Console.log(loginFinishResponse)
    toggleFaceIDModal()
    // Console.log(registerFinishResponse)
  }
  let fetchUserTransactionsHistory = async () => {
    let historyEndpoint = `https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId/assets/123/history`
    let response = await Fetch.get(historyEndpoint)
    let json = await response->Fetch.Response.json
    Js.log(json)

    setTransactionsHistory(_ => json)
  }
  let performTransfer = () => {
    let postTransfer = async () => {
      open Fetch

      let transferBody = {
        "sender": "arnab.d@unifiedledger1",
        "recipient": "ales@ledger",
        "asset": {
          "currency": "USD",
          "unit": 200,
          "token_manager": "tokenManagerAddress",
        },
        "signature": "signature",
      }

      let response = await fetch(
        "https://finternet-app-api.shuttleapp.rs/v1/users/exampleUserId/assets/123/asset:transfer",
        {
          method: #POST,
          body: transferBody->Js.Json.stringifyAny->Belt.Option.getExn->Body.string,
          headers: Headers.fromObject({
            "Content-type": "application/json",
          }),
        },
      )

      let json = await response->Fetch.Response.json
      setTransactionResult(_ => json)
    }

    postTransfer()->ignore
  }
  let handleFetchUser = () => {
    // setCurrentTransferScreen(_ => Home)
    fetchData()->ignore
    fetchUserTransactionsHistory()->ignore
    fetchUserAssets()->ignore
  }

  let handleNavigateToTransactionCompleted = () => {
    // setCurrentTransferScreen(_ => TransactionCompleted)
    setShowTrasactionConfirm(_ => true)
    performTransfer()->ignore
  }

  // let handleNavigateToFaceID = (~isFinternetOnboarding=false) => {
  //   isFinternetOnboarding
  //     ? setCurrentFinternetOnboardingScreen(_ => FaceID)
  //     : setCurrentOnboardingScreen(_ => FaceID)
  //   simpleWebAuthnRegister()
  //   ->Promise.then(_ => {
  //     isFinternetOnboarding
  //       ? setCurrentFinternetOnboardingScreen(_ => QRScreen)
  //       : setCurrentOnboardingScreen(_ => QRScreen)
  //     Js.Promise.resolve()
  //   })
  //   ->ignore
  // }
  let handleTokenizeAccount = () => {
    setTokenizeAccount(_ => true)
    setCurrentOnboardingScreen(_ => BankAccountLinked)
  }
  let handleTokenizeProperty = () => {
    setTokenizeProperty(_ => true)
    setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizedStatus)
  }

  let handleSignAgreement = () => {
    handleFetchUser()
    setAgreementSigned(_ => true)
    setCurrentLoanAgainstPropertyScreen(_ => LoanSanctionedSuccessfully)
  }
  let handleRegister = () => {
    // authenticate()->ignore
    simpleWebAuthnRegister()
    // simpleWebAuthnLogin()
    ->Promise.then(_ => {
      setCurrentFinternetOnboardingScreen(_ => QRScreen)
      Js.Promise.resolve()
    })
    ->ignore
  }
  let handleAuth = () => {
    // authenticate()->ignore
    simpleWebAuthnLogin()
    // simpleWebAuthnLogin()
    ->Promise.then(_ => {
      switch selectedOption {
      | `Property User Onboarding` => handleTokenizeProperty()

      // setCurrentPropertyUserOnboardingScreen(_ =>
      | `User Onboarding` => handleTokenizeAccount()
      // | `Domestic Money Transfer` => {
      //     handleNavigateToTransactionCompleted()
      //     setCurrentTransferScreen(_ => TransactionCompleted)
      //   }
      | `Loan Against Property` => handleSignAgreement()
      }
      Js.Promise.resolve()
    })
    ->ignore
  }
  let handleNavigateToFaceID = (~id=1) => {
    // authenticate()->ignore
    simpleWebAuthnLogin()
    // simpleWebAuthnLogin()
    ->Promise.then(_ => {
      switch selectedOption {
      // | `Finternet Onboarding` => setCurrentFinternetOnboardingScreen(_ => QRScreen)
      | `User Onboarding` =>
        id == 1
          ? {
              handleFetchUser()
              setCurrentOnboardingScreen(_ => LinkBankAccount)
            }
          : setCurrentOnboardingScreen(_ => BankAccountLinked)
      // setCurrentOnboardingScreen(_ => id == 1 ? LinkBankAccount : BankAccountLinked)
      | `Property User Onboarding` =>
        handleFetchUser()

        setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizationHome)
      | `Domestic Money Transfer` => {
          handleNavigateToTransactionCompleted()
          setCurrentTransferScreen(_ => TransactionCompleted)
        }
      }
      Js.Promise.resolve()
    })
    ->ignore
  }

  let renderFinternetOnboardingContent = () => {
    switch currentFinternetOnboardingScreen {
    | FinternetLogin =>
      <Login
        handleNavigate={_ => setCurrentFinternetOnboardingScreen(_ => CreateAccount)}
        flow={FinternetOnboarding}
      />
    // <FinternetLogin
    //   handleNavigate={_ => setCurrentFinternetOnboardingScreen(_ => CreateAccount)}
    // />
    // | CreateAccount => <CreateAccount handleNavigate={_ => handleNavigateToFaceID()} />
    | CreateAccount => <CreateAccount handleNavigate={_ => handleRegister()} />

    | QRScreen =>
      <QRScreen
        handleNavigate={_ => setCurrentFinternetOnboardingScreen(_ => FinternetEmptyHome)}
      />
    | FinternetEmptyHome => <FinternetHome flow={EmptyHome} />
    }
  }

  let renderTransferContent = () => {
    switch currentTransferScreen {
    | Home => <Home handleNavigate={_ => setCurrentTransferScreen(_ => Transfer)} />
    | Transfer => <Transfer handleNavigate={_ => setCurrentTransferScreen(_ => EnterAmount)} />
    | EnterAmount => <EnterAmount handleNavigate={_ => handleNavigateToFaceID()} />
    // | FaceID => <FaceID />
    | TransactionCompleted =>
      <TransactionCompleted handleNavigate={_ => setCurrentTransferScreen(_ => FinternetHome)} />
    | FinternetHome => <FinternetHome flow={HomeWithMyFin} />
    }
  }

  let renderOnboardingContent = () => {
    switch currentOnboardingScreen {
    | OnboardingLogin =>
      // <OnboardingLogin handleNavigate={_ => setCurrentOnboardingScreen(_ => LinkBankAccount)} />
      <Login
        // handleNavigate={_ => setCurrentOnboardingScreen(_ => LinkBankAccount)}
        handleNavigate={_ => handleNavigateToFaceID()}
        flow={MoneyTransferOnboarding}
      />
    | LinkBankAccount =>
      <LinkBankAccount handleNavigate={_ => setCurrentOnboardingScreen(_ => SelectBank)} />

    | SelectBank =>
      // <SelectBank handleNavigate={_ => setCurrentOnboardingScreen(_ => SelectedBankAccount)} />
      <SelectBank
        handleNavigate={_ => {
          setCurrentOnboardingScreen(_ => SelectedBankAccount)
        }}
      />

    | SelectedBankAccount =>
      // handleTokenizeAccount()

      // <SelectedBankAccount handleNavigate={_ => handleNavigateToFaceID(~id=2)} />
      <SelectedBankAccount handleNavigate={_ => handleAuth()} />

    // | FaceID => <FaceID />

    | BankAccountLinked => <BankAccountLinked />
    }
  }

  let renderLoanAgainstPropertyContent = () => {
    switch currentLoanAgainstPropertyScreen {
    | PropertyDashboard =>
      <PropertyDashboard
        handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => ShareVerifiableCredentials)}
      />
    | ShareVerifiableCredentials =>
      <ShareVerifiableCredentials
        handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => SelectBankForLoan)}
      />
    | SelectBankForLoan =>
      <SelectBankForLoan
        handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => KeyFactSheet)}
      />
    | KeyFactSheet =>
      <KeyFactSheet handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => SignAgreement)} />

    | SignAgreement =>
      <SignAgreement
        // handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LoanSanctionedSuccessfully)}
        handleNavigate={_ => handleAuth()}
      />

    | LoanSanctionedSuccessfully =>
      <LoanSanctionedSuccessfully
        handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => FinternetHomeMyProp)}
      />
    | FinternetHomeMyProp => <FinternetHome flow={HomeWithMyFinAndMyProp} />

    // | PropertyHome =>
    //   <PropertyHome handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LinkProperty)} />
    // | LinkProperty =>
    //   <LinkProperty handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LinkedHome)} />
    // | LinkedHome =>
    //   <LinkedHome handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LoanSteps)} />
    // | LoanSteps =>
    //   <LoanSteps
    //     handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => SelectBankForLoan)}
    //   />

    // | FillLoanApplication =>
    //   <FillLoanApplication
    //     handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LinkCredentials)}
    //   />
    // | LinkCredentials =>
    //   <LinkCredentials
    //     handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => KeyFactSheet)}
    //   />

    // | LoanSanctionedSuccessfully =>
    //   <LoanSanctionedSuccessfully
    //     handleNavigate={_ => setCurrentLoanAgainstPropertyScreen(_ => LinkedHome)}
    //   />
    | _ => <div> {React.string("Unexpected Screen")} </div>
    }
  }

  let renderPropertyUserOnboardingContent = () => {
    switch currentPropertyUserOnboardingScreen {
    | PropertyLogin =>
      <Login
        handleNavigate={_ => handleNavigateToFaceID()}
        // handleNavigate={_ => setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizationHome)}
        flow={PropertyOnboarding}
      />
    // <PropertyLogin
    //   handleNavigate={_ => setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizationHome)}
    // />
    | PropertyTokenizationHome =>
      <PropertyTokenizationHome
        handleNavigate={_ => setCurrentPropertyUserOnboardingScreen(_ => PropertyDetailsForm)}
      />

    | PropertyDetailsForm =>
      <PropertyDetailsForm
        handleNavigate={_ =>
          setCurrentPropertyUserOnboardingScreen(_ => AttestVerifiableCredentials)}
      />
    | AttestVerifiableCredentials =>
      <AttestVerifiableCredentials
        handleNavigate={_ => handleAuth()}

        // handleNavigate={_ => setCurrentPropertyUserOnboardingScreen(_ => PropertyTokenizedStatus)}
      />
    | PropertyTokenizedStatus => <PropertyTokenizedStatus handleNavigate={_ => ()} />
    }
  }

  let handleDrawerSelection = selectedOption => {
    switch selectedOption {
    | "User Onboarding" => setSelectedOption(_ => "User Onboarding")
    | "Domestic Money Transfer" => setSelectedOption(_ => "Domestic Money Transfer")
    | "Loan Against Property" => setSelectedOption(_ => "Loan Against Property")
    | "Finternet Onboarding" => setSelectedOption(_ => "Finternet Onboarding")
    | "Property User Onboarding" => setSelectedOption(_ => "Property User Onboarding")

    | "Hello World!" => setSelectedOption(_ => "Hello World!")
    | _ => Js.log("Unexpected drawer selection: " ++ selectedOption)
    }
  }

  let renderContent = () => {
    switch selectedOption {
    | "User Onboarding" => renderOnboardingContent()
    | "Domestic Money Transfer" => renderTransferContent()
    | "Loan Against Property" => renderLoanAgainstPropertyContent()
    | "Finternet Onboarding" => renderFinternetOnboardingContent()
    | "Property User Onboarding" => renderPropertyUserOnboardingContent()

    | "Hello World" =>
      <div className="h-full w-full flex justify-center items-center text-2xl">
        {React.string("Welcome to the Home Page")}
      </div>
    | _ =>
      Js.log("Unhandled case in renderContent: " ++ selectedOption)
      React.null
    }
  }

  <div>
    <div
      //  className="absolute top-4 left-4 flex flex-row gap-1"
      className="flex justify-between items-center px-10 py-2 shadow ">
      // className="fixed top-0 left-0 w-full flex justify-between items-center px-10 py-2 shadow bg-white z-50">
      <div className="flex">
        <img src="/finternetLogo.png" alt="Description of image" className="h-10 w-10" />
        <div className="self-center"> {React.string("Playground")} </div>
      </div>
      // <GitHubIcon />
      <a href="https://github.com/finternet-io" target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
    <div
      className="flex flex-col sm:flex-row  h-screen w-screen font-space-grotesk justify-between ">
      <div className="mr-10">
        <Drawer handleDrawerSelection={handleDrawerSelection} selectedOption={selectedOption} />
      </div>
      {selectedOption == "Hello World!"
        ? <div className="flex flex-col h-full w-full  items-center  my-40">
            <img src="/finternetLogo.png" alt="Description of image" className=" h-4/12 w-1/12" />
            <div className="w-5/12 text-center ">
              {React.string(
                "Welcome to the Finternet playground. Explore use cases that demonstrate how the Finternet unlocks transactability across assets. ",
              )}
            </div>
          </div>
        : <>
            <div
              className="flex flex-col sm:self-auto self-center min-h-[50rem] sm:min-h-full h-full w-4/5 sm:w-1/5  my-4 gap-4 ">
              // <div
              //   className="bg-white h-full sm:h-4/5 self-center w-full border-8 border-black shadow-lg rounded-lg overflow-auto ">
              <div
                //     className="h-full w-full border-8 border-black shadow-lg rounded-lg p-4 "
                // className="bg-white h-full sm:h-4/5 self-center w-full p-4 border-2 border-black border-t-4 shadow-lg rounded-lg overflow-auto ">
                className="relative bg-white h-full sm:h-4/5 self-center w-full p-4 ring-4 ring-offset-4 ring-black shadow-lg rounded-lg overflow-auto">
                {renderContent()}
                <FaceIDModal
                  showModal={showFaceIDModal}
                  toggleModal={toggleFaceIDModal}
                  // handleNavigate={handleNavigate}
                  text="Link your Finternet account with the the MyProp app"
                  buttonText="Link"
                />
              </div>
              // </div>
              <div className="flex flex-row justify-around text-xl text-gray-400">
                <button
                  onClick={_ => {
                    switch selectedOption {
                    | "Finternet Onboarding" => handlePrevFinternetOnboardingScreen()
                    | "User Onboarding" => handlePrevOnboardingScreen()
                    | "Domestic Money Transfer" => handlePrevScreen()
                    | "Property User Onboarding" => handlePropertyUserOnboardingPrevScreen()

                    | "Loan Against Property" => handlePrevLoanAgainstPropertyScreen()

                    | _ => Js.log("Unhandled case in renderContent: " ++ selectedOption)
                    }
                  }}>
                  {React.string("<")}
                </button>
                <button
                  onClick={_ => {
                    switch selectedOption {
                    | "Finternet Onboarding" => handleNextFinternetOnboardingScreen()
                    | "User Onboarding" => handleNextOnboardingScreen()
                    | "Domestic Money Transfer" => handleNextScreen()
                    | "Property User Onboarding" => handlePropertyUserOnboardingNextScreen()

                    | "Loan Against Property" => handleNextLoanAgainstPropertyScreen()

                    | _ => Js.log("Unhandled case in renderContent: " ++ selectedOption)
                    }
                  }}>
                  {React.string(">")}
                </button>
              </div>
            </div>
            // <div
            //   className="ml-4 p-4  bg-gray-100 rounded-lg w-3/5 h-full flex flex-col gap-3 overflow-auto ">
            {isCollapsed
              ? {
                  <div className="mr-5">
                    <button onClick={_ => setIsCollapsed(_ => false)}>
                      {React.string("<<<")}
                    </button>
                  </div>
                }
              : <div
                  className="relative sm:ml-4 p-4 bg-gray-100 rounded-lg w-4/5 min-h-96 sm:self-auto self-center sm:w-2/5 sm:h-5/6 flex flex-col gap-3 overflow-auto my-4 sm:mr-10">
                  <button
                    className="absolute top-3 right-3" onClick={_ => setIsCollapsed(_ => true)}>
                    {React.string("x")}
                  </button>
                  // <div className="flex flex-row w-full justify-end">
                  //   <button onClick={_ => setIsCollapsed(_ => true)}> {React.string("x")} </button>
                  // </div>
                  <div className="text-2xl">
                    {switch selectedOption {
                    | "User Onboarding" => React.string("User Onboarding Activity Log (WIP)")
                    | "Domestic Money Transfer" => React.string("Domestic Transfer Activity Log")
                    | "Property User Onboarding" =>
                      React.string("Property User Onboarding Activity Log")
                    | "Loan Against Property" => React.string("Loan Against Property Activity Log")
                    | "Finternet Onboarding" => React.string("Finternet Onboarding Activity Log")
                    | _ => React.string("Unexpected Screen")
                    }}
                    // {React.string("Domestic Transfer Activity Log")}
                  </div>
                  // {userData != Js.Json.null
                  // ?
                  <Accordion
                    userData={userData}
                    transactionsHistory={transactionsHistory}
                    userAssets={userAssets}
                    showAuthInitiated={showAuthInitiated}
                    showTransactionConfirm={showTransactionConfirm}
                    transactionResult={transactionResult}
                    flowType={selectedOption}
                    registerStartResponse={registerStartResponse}
                    attestation={attestation}
                    loginStartResponse={loginStartResponse}
                    assertion={assertion}
                    tokenizeAccount={tokenizeAccount}
                    tokenizeProperty={tokenizeProperty}
                    loginPropertyStartResponse={loginPropertyStartResponse}
                    propertyLoginAssertion={propertyLoginAssertion}
                    agreementSigned={agreementSigned}
                  />
                </div>}
            // :
            //  <div className="text-sm">
            // {React.string("Initiate transaction to view activity logs")}
            // </div>}
          </>}
      // <Drawer />
    </div>
    // <Drawer
    //   openDrawer={openDrawer}
    //   setOpenDrawer={setOpenDrawer}
    //   handleDrawerSelection={handleDrawerSelection}
    // />
  </div>
}
