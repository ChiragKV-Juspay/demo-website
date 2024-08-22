open Colors
@react.component
let make = (
  ~onClick,
  ~isSelected,
  ~bankDetails: ExampleData.bankOptionsType,
  ~showBankDetails=true,
  ~showCardNumber=false,
) => {
  let radioButtonPath = showBankDetails
    ? "/RadioButtonSelectedBlue.svg"
    : "/RadioButtonSelected.svg"
  <div className="flex flex-row justify-between mx-1 cursor-pointer  " onClick={onClick}>
    <div className="flex flex-row gap-3 w-11/12 ">
      <div className="flex flex-row gap-2 ">
        <img src={bankDetails.imagePath} alt="Description of image" />
        <div className="w-px h-4 bg-[#E6E6E6] self-center" />
      </div>
      <div className="flex flex-col w-9/12 ">
        <div className=" font-bold text-sm"> {React.string(bankDetails.name)} </div>
        {showBankDetails
          ? <div className="flex flex-row justify-between ">
              <div className="flex flex-row gap-1">
                <div className={`text-xs text-[${colors.gray}] font-medium`}>
                  {React.string("LTV ratio:")}
                </div>
                <div className={`text-xs  text-[${colors.propertyBlue}] font-bold`}>
                  {React.string(bankDetails.ltvRatio)}
                </div>
              </div>
              <div className="flex flex-row justify-between gap-1">
                <div className={`text-xs text-[${colors.gray}] font-medium`}>
                  {React.string("Interest:")}
                </div>
                <div className={`text-xs text-[${colors.propertyBlue}] font-bold`}>
                  {React.string(bankDetails.interestRate)}
                </div>
              </div>
            </div>
          : React.null}
        {showCardNumber ? <div> {React.string(bankDetails.cardNumber)} </div> : React.null}
      </div>
    </div>
    {isSelected
      ? {<img src=radioButtonPath alt="Description of image" />}
      : <img src="/RadioButtonUnselected.svg" alt="Description of image" />}
  </div>
}
