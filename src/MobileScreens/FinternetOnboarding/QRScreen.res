open Colors
@react.component
let make = (~handleNavigate=?) => {
  <div className="flex flex-col h-full gap-7">
    <Header isFinternet={true} />
    <div className="font-bold text-lg text-white">
      {React.string("Identity verified successfully!")}
    </div>
    <div
      className="flex flex-col justify-between items-center w-full border border-gray-100 drop-shadow-md rounded-2xl py-3 gap-4 py-5">
      <div className="w-11/12">
        <div className=" font-light text-white text-xs"> {React.string("Account Address")} </div>
        <div className="flex flex-row justify-between">
          <div className="text-white text-base "> {React.string("siddharth@finternet")} </div>
          // <img src="/CopyIcon.svg" alt="Description of image" />
        </div>
      </div>
      <img src="/QRCode.svg" alt="Description of image" className="w-11/12 self-center" />
      <div className="font-light text-white  text-base">
        {React.string("Welcome to the Finternet!")}
      </div>
      <button
        className=" bg-white text-black text-xs rounded-lg w-3/5 h-10"
        onClick={_ =>
          switch handleNavigate {
          | Some(callback) => callback()
          | None => Js.log("No navigation function provided")
          }}>
        {React.string("Go to Home")}
      </button>
      <SecuredByFinterest color=colors.white />
    </div>
  </div>
}
