"use client";

import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

const AddDues = () => {
  const supabase = createClient();

  const [name, setName] = useState("");
  const [months_2022, setMonths2022] = useState("");
  const [amount_2022, setAmount2022] = useState("");
  const [months_2023, setMonths2023] = useState("");
  const [amount_2023, setAmount2023] = useState("");
  const [months_2024, setMonths2024] = useState("");
  const [amount_2024, setAmount2024] = useState("");
  const [months_2025, setMonths2025] = useState("");
  const [amount_2025, setAmount2025] = useState("");
  const [months_2026, setMonths2026] = useState("");
  const [amount_2026, setAmount2026] = useState("");
  const [loading, setLoading] = useState(false);
  const [noName, setNoName] = useState(false);

  const addDues = async () => {
    setNoName(false);
    if (!name) {
      setNoName(true);
      return;
    }

    if (!months_2022) {
      setMonths2022(undefined);
    }

    if (!amount_2022) {
      setAmount2022(undefined);
    }

    if (!months_2023) {
      setMonths2023(undefined);
    }

    if (!amount_2023) {
      setAmount2023(undefined);
    }

    if (!months_2024) {
      setMonths2024(undefined);
    }

    if (!amount_2024) {
      setAmount2024(undefined);
    }

    if (!months_2025) {
      setMonths2025(undefined);
    }

    if (!amount_2025) {
      setAmount2025(undefined);
    }

    if (!months_2026) {
      setMonths2026(undefined);
    }

    if (!amount_2026) {
      setAmount2026(undefined);
    }

    try {
      setLoading(true);

      const { data, error } = await supabase
        .from("monthlydues")
        .insert([
          {
            name,
            months_2022,
            amount_2022,
            months_2023,
            amount_2023,
            months_2024,
            amount_2024,
            months_2025,
            amount_2025,
            months_2026,
            amount_2026,
          },
        ])
        .select();

      if (error) {
        toast.error("Something went wrong. Try again", {
          position: "top-center",
        });
      }

      if (data) {
        toast.success("Added successfully", {
          position: "top-center",
        });
        setName('')
        setMonths2022("");
        setAmount2022("");
        setMonths2023("");
        setAmount2023("");
        setMonths2024("");
        setAmount2024("");
        setMonths2025("");
        setAmount2025("");
        setMonths2026("");
        setAmount2026("");
      }
    } catch (error) {
      console.log("Error Msg: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='mt-2 flex justify-center'>
      <Dialog>
        <DialogTrigger className='bg-gray-700 text-white px-8 py-1.5 rounded-lg'>
          Open
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add new details</DialogTitle>
            {/* <DialogDescription>             
            </DialogDescription> */}
          </DialogHeader>
          <div className='flex flex-col gap-3'>
            <div className='flex flex-col justify-center'>
              <label>Name</label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='w-full uppercase'
              />
              {noName && (
                <span className='text-sm text-red-500 italic font-light'>
                  Name field cannot be empty.
                </span>
              )}
            </div>

            <div className='flex justify-center gap-3'>
              <div>
                <label className='text-sm text-gray-500'>Months in 2022</label>
                <Input
                  value={months_2022}
                  onChange={(e) => setMonths2022(e.target.value)}
                  className='w-full'
                />
              </div>
              <div>
                <label className='text-sm text-gray-500'>Amount for 2022</label>
                <Input
                  value={amount_2022}
                  onChange={(e) => setAmount2022(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center gap-3'>
              <div>
                <label className='text-sm text-gray-500'>Months in 2023</label>
                <Input
                  value={months_2023}
                  onChange={(e) => setMonths2023(e.target.value)}
                  className='w-full'
                />
              </div>
              <div>
                <label className='text-sm text-gray-500'>Amount for 2023</label>
                <Input
                  value={amount_2023}
                  onChange={(e) => setAmount2023(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center gap-3'>
              <div>
                <label className='text-sm text-gray-500'>Months in 2024</label>
                <Input
                  value={months_2024}
                  onChange={(e) => setMonths2024(e.target.value)}
                  className='w-full'
                />
              </div>
              <div>
                <label className='text-sm text-gray-500'>Amount for 2024</label>
                <Input
                  value={amount_2024}
                  onChange={(e) => setAmount2024(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center gap-3'>
              <div>
                <label className='text-sm text-gray-500'>Months in 2025</label>
                <Input
                  value={months_2025}
                  onChange={(e) => setMonths2025(e.target.value)}
                  className='w-full'
                />
              </div>
              <div>
                <label className='text-sm text-gray-500'>Amount for 2025</label>
                <Input
                  value={amount_2025}
                  onChange={(e) => setAmount2025(e.target.value)}
                />
              </div>
            </div>

            <div className='flex justify-center gap-3'>
              <div>
                <label className='text-sm text-gray-500'>Months in 2026</label>
                <Input
                  value={months_2026}
                  onChange={(e) => setMonths2026(e.target.value)}
                  className='w-full'
                />
              </div>
              <div>
                <label className='text-sm text-gray-500'>Amount for 2026</label>
                <Input
                  value={amount_2026}
                  onChange={(e) => setAmount2026(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>
                Close
              </Button>
            </DialogClose>
            <Button onClick={addDues} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddDues;
