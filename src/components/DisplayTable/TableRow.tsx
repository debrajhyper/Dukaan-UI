type TableRowProps = {
    OrderID: string,
    OrderDate: string,
    OrderAmount: string,
    TransactionFees: string
}

export default function TableRow({ OrderID, OrderDate, OrderAmount, TransactionFees }: TableRowProps) {
    return (
        <>
            <td title={OrderID} className='flex flex-col justify-center items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] whitespace-nowrap'>
                <span className="shrink-0 basis-auto text-[14px] font-medium leading-[20px] text-[#146eb4] text-left whitespace-nowrap">
                    {OrderID}
                </span>
            </td>
            <td title={OrderDate} className='flex flex-col justify-center items-start grow shrink-0 basis-0 flex-nowrap bg-[#fff] whitespace-nowrap'>
                <span className="shrink-0 basis-auto text-[14px] font-medium leading-[20px]  text-left whitespace-nowrap">
                    {OrderDate}
                </span>
            </td>
            <td title={OrderAmount} className='flex flex-col justify-center items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] whitespace-nowrap'>
                <span className="shrink-0 basis-auto text-[14px] font-medium leading-[20px]  text-left whitespace-nowrap">
                    {OrderAmount}
                </span>
            </td>
            <td title={TransactionFees} className='flex flex-col justify-center items-end grow shrink-0 basis-0 flex-nowrap bg-[#fff] whitespace-nowrap'>
                <span className="shrink-0 basis-auto text-[14px] font-medium leading-[20px]  text-left whitespace-nowrap">
                    {TransactionFees}
                </span>
            </td>
        </>
    )
}
