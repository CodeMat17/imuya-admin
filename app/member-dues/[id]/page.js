import Update2022 from "@/components/Update2022";
import Update2023 from "@/components/Update2023";
import Update2024 from "@/components/Update2024";
import Update2025 from "@/components/Update2025";
import Update2026 from "@/components/Update2026";
import { createClient } from "@/lib/supabase/server";
import { CheckCheck } from "lucide-react";
import { notFound } from "next/navigation";

export const revalidate = 0;

const MemberDues = async ({ params: { id } }) => {

// const {data: {user}} = 

  const supabase = createClient();
  const { data: due } = await supabase
    .from("monthlydues")
    .select("*")
    .match({ id })
    .order("name", { ascending: true })
    .single();

  if (!due) {
    notFound;
  }

  return (
    <div className='px-4 py-12 flex flex-col items-center justify-center w-full border'>
      <h1 className='text-3xl md:text-4xl text-center'>UPDATE DUES</h1>
      <div className='mt-12 w-full max-w-md'>
        <p className='font-medium text-2xl text-center uppercase'>{due.name}</p>

        <div className='flex justify-between mt-6 mb-3'>
          <p>2022</p>
          <p>Months - {due.months_2022 ? due.months_2022 : "0"}</p>
          <p>{due.amount_2022 ? due.amount_2022 : "----"}</p>

          {due.months_2022 === "12" ? (
            <CheckCheck className='text-green-500' />
          ) : (
            <Update2022
              id={due.id}
              name={due.name}
              months={due.months_2022}
              amount={due.amount_2022}
            />
          )}
        </div>
        <div className='flex justify-between mb-3'>
          <p>2023</p>
          <p>Months - {due.months_2023 ? due.months_2023 : "0"}</p>
          <p>{due.amount_2023 ? due.amount_2023 : "----"}</p>
          {due.months_2023 === "12" ? (
            <CheckCheck className='text-green-500' />
          ) : (
            <Update2023
              id={due.id}
              name={due.name}
              months={due.months_2023}
              amount={due.amount_2023}
            />
          )}
        </div>
        <div className='flex justify-between mb-3'>
          <p>2024</p>
          <p>Months - {due.months_2024 ? due.months_2024 : "0"}</p>
          <p>{due.amount_2024 ? due.amount_2024 : "----"}</p>
          {due.months_2024 === "12" ? (
            <CheckCheck className='text-green-500' />
          ) : (
            <Update2024
              id={due.id}
              name={due.name}
              months={due.months_2024}
              amount={due.amount_2024}
            />
          )}
        </div>
        <div className='flex justify-between mb-3'>
          <p>2025</p>
          <p>Months - {due.months_2025 ? due.months_2025 : "0"}</p>
          <p>{due.amount_2025 ? due.amount_2025 : "----"}</p>
          {due.months_2025 === "12" ? (
            <CheckCheck className='text-green-500' />
          ) : (
            <Update2025
              id={due.id}
              name={due.name}
              months={due.months_2025}
              amount={due.amount_2025}
            />
          )}
        </div>
        <div className='flex justify-between mb-3'>
          <p>2026</p>
          <p>Months - {due.months_2026 ? due.months_2026 : "0"}</p>
          <p>{due.amount_2026 ? due.amount_2026 : "----"}</p>
          {due.months_2026 === "12" ? (
            <CheckCheck className='text-green-500' />
          ) : (
            <Update2026
              id={due.id}
              name={due.name}
              months={due.months_2026}
              amount={due.amount_2026}
            />
          )}
        </div>
        {/* <pre>{JSON.stringify(due, null, 2)}</pre> */}
      </div>
    </div>
  );
};

export default MemberDues;
