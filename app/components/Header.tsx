import Link from "next/link";

function Header() {
  return (
    <nav className="py-4 px-5 md:px-24  lg:px-40 relative w-full border-b border-grayshade-300 ">
      <img
        className="absolute -z-10 top-0 left-0 w-full h-full  object-cover"
        src="https://react-shop-siza.vercel.app/assets/AbstractDesign-5_Gpi5_9.svg"
        alt=""
      />
      <div className="w-full z-99 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="lg:text-5xl md:text-4xl text-xl font-semibold">
            React Shop
          </h1>
        </Link>
        <div className="flex items-center justify-between">
          <Link href={"/post"}>
            <div className="relative lg:mx-6 md:mx-4 mx-3">
              <span className="absolute text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-[#703BF7] text-white">
                0
              </span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Shopping_Basket">
                  <g>
                    <path d="M19.44,7.937H17.3l-1.21-4.51a.508.508,0,0,0-.61-.35.489.489,0,0,0-.35.61l1.14,4.25H7.74l1.14-4.25a.5.5,0,0,0-.36-.61.513.513,0,0,0-.61.35l-1.2,4.51H4.56a1.5,1.5,0,0,0-.32,2.96l.74,7.77a2.492,2.492,0,0,0,2.49,2.27h9.06a2.492,2.492,0,0,0,2.49-2.27l.74-7.77a1.5,1.5,0,0,0-.32-2.96Zm-1.41,10.64a1.5,1.5,0,0,1-1.5,1.36H7.47a1.5,1.5,0,0,1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508,0,0,1-.5-.5.5.5,0,0,1,.5-.5H19.44a.5.5,0,0,1,.5.5A.508.508,0,0,1,19.44,9.937Z"></path>
                    <path d="M9.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,9.5,17.432Z"></path>
                    <path d="M14.5,17.432a.5.5,0,0,1-.5-.5v-3a.5.5,0,0,1,1,0v3A.5.5,0,0,1,14.5,17.432Z"></path>
                  </g>
                </g>
              </svg>
            </div>
          </Link>
          <div className="relative  text-2xl border bg-white dark:bg-grayshade-400 border-grayshade-200 h-max p-1 leading-none rounded-md">
            <button>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 256 256"
                className="text-sky-500"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z"
                  opacity="0.2"
                ></path>
                <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path>
              </svg>
            </button>
            <ul className="hidden z-50 w-max absolute top-12 -right-12 bg-white dark:bg-grayshade-500 border border-grayshade-300 p-5 rounded-xl">
              <li className="text-sky-500 cursor-pointer my-2 w-full flex items-center justify-start">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="mr-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M210.69,158.18A88,88,0,1,1,97.82,45.31,96.08,96.08,0,0,0,192,160,96.78,96.78,0,0,0,210.69,158.18Z"
                    opacity="0.2"
                  ></path>
                  <path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"></path>
                </svg>
                <span>dark</span>
              </li>
              <li className="false cursor-pointer my-2 w-full flex items-center justify-start">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="mr-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                  ></path>
                  <circle
                    cx="256"
                    cy="256"
                    r="80"
                    fill="none"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  ></circle>
                </svg>
                <span>light</span>
              </li>
              <li className="false cursor-pointer my-2 w-full flex items-center justify-start">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 256 256"
                  className="mr-4"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M224,64V176a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208A16,16,0,0,1,224,64Z"
                    opacity="0.2"
                  ></path>
                  <path d="M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8Zm-48,48a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,224Z"></path>
                </svg>
                <span>system</span>
              </li>
            </ul>
          </div>
          <Link
            className="lg:mx-6 md:mx-4 mx-3"
            href="https://github.com/Siza36/react-shop"
            target="_blank"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
              className="text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
