"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { createClient } from "@/lib/supabase/client";
import { FilePenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Update2024 = ({ id, name, months, amount }) => {
  const supabase = createClient();
  const router = useRouter();

  const [month, setMonth] = useState(months);
  const [amnt, setAmnt] = useState(amount);
  const [loading, setLoading] = useState(false);

  const update = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("monthlydues")
        .update({ months_2024: month, amount_2024: amnt })
        .eq("id", id)
        .select();

      if (error) {
        toast.error("Operation failed. Try again.", {
          position: "top-right",
        });
      }
      if (data) {
        router.refresh();
        toast("Monthly dues successfully updated");
        toast.success("Monthly dues successfully updated", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Drawer>
        <DrawerTrigger>
          <FilePenIcon className='w-6 h-6' />
        </DrawerTrigger>
        <DrawerContent>
          <div className='w-full max-w-lg mx-auto'>
            <DrawerHeader>
              <DrawerTitle>{name} - 2024</DrawerTitle>
              <DrawerDescription>
                <span className='font-medium text-lg'>Months</span>{" "}
                <Input
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className='border border-gray-500 mb-4'
                />
                <span className='font-medium text-lg'>Amount</span>{" "}
                <Input
                  value={amnt}
                  onChange={(e) => setAmnt(e.target.value)}
                  className='border border-gray-500'
                />
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button onClick={update} disabled={loading}>
                {loading ? "Please wait..." : "Submit"}
              </Button>
              <DrawerClose>
                <Button variant='outline'>Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default Update2024;
