import React from 'react'

const DuesCard = () => {
  return (
    <div>
      {" "}
      <AlertDialog>
        <AlertDialogTrigger>Add Dues</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>.... paid for:</AlertDialogTitle>
            <AlertDialogDescription>
              {/* <p
                className={`flex justify-between w-full gap-3 border-b py-1 ${
                  months_2022 === "12" ? "text-green-500" : "text-gray-500"
                }`}> */}
                <p className='flex items-center gap-2'>2022</p>
                {/* <p className='flex'>
                  {months_2022 ? months_2022 : "0"} month
                  <span className={amount_2022 === null ? "hidden" : "flex"}>
                    s
                  </span>
                </p> */}

                {/* <p>
                  {amount_2022
                    ? NairaAmount.format(parseInt(amount_2022))
                    : "-----"}
                </p> */}
              {/* </p> */}
              {/* =====2023===== */}
              {/* <div
                className={`flex justify-between w-full gap-3 border-b py-1 ${
                  months_2023 === "12" ? "text-green-500" : "text-gray-500"
                }`}> */}
                <p className='flex items-center gap-2'>2023</p>
                {/* <p className='flex'>
                  {months_2023 ? months_2023 : "0"} month
                  <span className={amount_2023 === null ? "hidden" : "flex"}>
                    s
                  </span>
                </p> */}
                {/* <p>
                  {amount_2023
                    ? NairaAmount.format(parseInt(amount_2023))
                    : "-----"}
                </p> */}
              {/* </div> */}
              {/* =====2024===== */}
              {/* <p
                className={`flex justify-between w-full gap-3 border-b py-1 ${
                  months_2024 === "12" ? "text-green-500" : "text-gray-500"
                }`}> */}
                <p className='flex items-center gap-2'>2024</p>
                {/* <p className='flex'>
                  {months_2024 ? months_2024 : " 0"} month
                  <span className={amount_2024 === null ? "hidden" : "block"}>
                    s
                  </span>
                </p> */}
                {/* <p>
                  {amount_2024
                    ? NairaAmount.format(parseInt(amount_2024))
                    : "-----"}
                </p> */}
              {/* </p> */}
              {/* =====2025===== */}
              {/* <div
                className={`flex justify-between w-full gap-3 border-b py-1  ${
                  months_2025 === "12" ? "text-green-500" : "text-gray-500"
                }`}> */}
                <p className='flex items-center gap-2'>2025 </p>
                {/* <p className='flex'>
                  {months_2025 ? months_2025 : "0"} month
                  <span className={amount_2025 === null ? "hidden" : "flex"}>
                    s
                  </span>
                </p> */}
                {/* <p>
                  {amount_2025
                    ? NairaAmount.format(parseInt(amount_2025))
                    : "-----"}
                </p> */}
              {/* </div> */}
              {/* =====2026===== */}
              {/* <p
                className={`flex justify-between w-full gap-3 border-b py-1 ${
                  months_2026 === "12" ? "text-green-500" : "text-gray-500"
                }`}>
                <p className='flex items-center gap-2'>2026</p>
                <p className='flex'>
                  {months_2026 ? months_2026 : "0"} month
                  <span className={amount_2026 === null ? "hidden" : "flex"}>
                    s
                  </span>
                </p>
                <p>
                  {amount_2026
                    ? NairaAmount.format(parseInt(amount_2026))
                    : "-----"}
                </p>
              </p> */}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

export default DuesCard