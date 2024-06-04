import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#f2ebe3]">
      <div className="flex flex-col items-center rounded-lg justify-center min-h-screen ">
        <div
          className=" 
            rounded-xl 
           bg-slate-50 
           flex sm:flex-row flex-col gap-3 
           shadow-3 overflow-hidden
            w-[350px] sm:w-[800px] 
             h-full sm:h-[450px]
          "
        >
          <Image
            className="rounded-t-lg sm:hidden sm:rounded-lb-lg"
            src="/images/image-product-mobile.jpg"
            alt="product image"
            width={400}
            height={400}
          />
          <Image
            className="rounded-t-lg hidden sm:flex sm:rounded-lb-lg"
            src="/images/image-product-desktop.jpg"
            alt="product image"
            width={400}
            height={400}
          />
          <div className="flex text-neutral-900 flex-col sm:gap-8 p-3">
            <h3 className="mt-3 text-md font-montserrat text-gray-400 font-semibold uppercase">
              Perfume
            </h3>
            <h4 className="text-5xl font-fraunces  ">
              Gabrielle Essence Eau De Perfum
            </h4>
            <p className="text-sm font-montserrat">
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer Creator for the House of CHANEL
            </p>

            <div class="mt-2 mb-5 flex items-center  gap-3">
              <p>
                <span class="text-4xl font-fraunces text-[#3c8067]">
                  $149.99
                </span>
              </p>
              <del className="font-montserrat text-slate-400">$169.99</del>
            </div>
            <Button title={"Add to cart"}>
              <svg width="15" height="16" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                  fill="#FFF"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <span className="mx-1">
          <a
            href="https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ/"
            target="_blank"
          >
            Frontend Mentor
          </a>
        </span>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/yh919">
          Youssef Hussein
        </a>
        .
      </div>
    </main>
  );
}

const Button = ({ title, children }) => {
  return (
    <button className="flex items-center justify-center gap-3 bg-[#3c8067] hover:bg-[#1d492f] font-medium text-white px-20 sm:px-3  py-3 rounded-lg   transition duration-500 ease-in-out">
      {children}
      {title}
    </button>
  );
};
