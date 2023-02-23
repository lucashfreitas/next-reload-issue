"use client";

import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        This is page 2 - should do only a client side navigation when go to page
        1
      </h1>

      <button
        onClick={() => {
          router.push("/page1");
        }}
      >
        Page 1
      </button>
    </>
  );
};

export default Page;
