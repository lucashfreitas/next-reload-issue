"use client";

import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        This is page 1 - should do only a client side navigation when go to page
        2
      </h1>

      <button
        onClick={() => {
          router.push("/page2");
        }}
      >
        Page 2
      </button>
    </>
  );
};

export default Page;
