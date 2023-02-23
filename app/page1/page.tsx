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
      <p>
        But if you inspect your network tab note that we are doing a full page
        refresh and requesting a new document.
      </p>
      <p>
        The expected behaviour is for nextjs to do a client side navigation only
        and not a full page refresh
      </p>
      <div>
        <button
          style={{
            padding: "5px",
          }}
          onClick={(event) => {
            event?.preventDefault();
            router.push("/page2");
          }}
        >
          Page 2
        </button>
      </div>
    </>
  );
};

export default Page;
