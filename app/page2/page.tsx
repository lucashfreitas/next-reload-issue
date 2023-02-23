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
      <p>
        But if you inspect your network tab note that we are doing a full page
        refresh and requesting a new document.
      </p>
      <p>
        The expected behaviour is for nextjs to do a client side navigation only
        and not a full page refresh
      </p>
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
