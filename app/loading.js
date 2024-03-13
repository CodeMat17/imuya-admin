import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center pt-32'>
      <LoaderCircle className='w-12 h-12 text-3xl animate-spin' />
      <p>Please wait</p>
    </div>
  );
};

export default Loading;
