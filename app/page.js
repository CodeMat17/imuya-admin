import AddDues from "@/components/AddDues";
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function Home() {
  const supabase = createClient();

  // const { data: { user } } = await supabase.auth.getUser()  
  // console.log('USER: ', user);

  const { data: dues } = await supabase
    .from("monthlydues")
    .select("*")
    .order("name", { ascending: true });

  return (
    <main className='w-full min-h-screen px-4 py-12'>
      <h1 className='text-3xl md:text-4xl text-center'>
        IMUYA ADMIN DASHBOARD
      </h1>
      <AddDues />
      <div className='mt-12 flex flex-col max-w-md mx-auto gap-4'>
        {dues &&
          dues.map((item) => (
            <div key={item.id}>
              <Link href={`/member-dues/${item.id}`} className="uppercase">{item.name}</Link>
            </div>
          ))}
        {/* <pre>{JSON.stringify(dues, null, 2)}</pre> */}
      </div>
    </main>
  );
}
