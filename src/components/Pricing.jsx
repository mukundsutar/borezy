import React from "react";

export default function Pricing() {
  return (
    <>
      <main class="mx-auto max-w-6xl px-8 pb-36 pt-10" id="pricing">
        <div class="mx-auto mb-14 max-w-md text-center">
          <h1 class="mb-6 text-4xl font-semibold lg:text-5xl">
            <span class="text-indigo-600">Flexible</span> Plans
          </h1>
          <p class="text-xl font-medium text-gray-500">
            Choose a plan that works best for you and your team.
          </p>
        </div>

        <div class="flex flex-col items-center justify-between lg:flex-row lg:items-start">
          <div class="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none">
            <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                alt=""
                class="h-20 w-20 rounded-3xl"
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Basic</span>
                <span>
                  <span class="align-top text-xl font-medium text-gray-500">
                    $&thinsp;
                  </span>
                  <span class="text-3xl font-bold">10 </span>
                </span>
                <span class="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Get started with <span class="text-black">messaging</span>
                </span>
              </li>
              <li class="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Flexible <span class="text-black">team meetings</span>
                </span>
              </li>
              <li class="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">5 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-5 text-center text-xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>

          <div class="order-1 w-full flex-1 rounded-3xl bg-gray-900 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full">
            <div class="mb-8 flex items-center border-b border-gray-600 pb-8">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                alt=""
                class="h-20 w-20 rounded-3xl"
              />
              <div class="ml-5">
                <span class="block text-3xl font-semibold text-white">
                  Startup
                </span>
                <span>
                  <span class="align-top text-xl font-medium">$&thinsp;</span>
                  <span class="text-3xl font-bold text-white">24 </span>
                </span>
                <span class="font-medium">/ user</span>
              </div>
            </div>
            <ul class="mb-10 text-xl font-medium">
              <li class="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  All features in <span class="text-white">Basic</span>
                </span>
              </li>
              <li class="mb-6 flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  Flexible <span class="text-white">call scheduling</span>
                </span>
              </li>
              <li class="flex">
                <img src="https://res.cloudinary.com/williamsondesign/check-white.svg" />
                <span class="ml-3">
                  <span class="text-white">15 TB</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-6 text-center text-2xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>

          <div class="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full lg:rounded-l-none">
            <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img
                src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                alt=""
                class="h-20 w-20 rounded-3xl"
              />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">Enterprise</span>
                <span>
                  <span class="align-top text-xl font-medium text-gray-500">
                    $&thinsp;
                  </span>
                  <span class="text-3xl font-bold">35 </span>
                </span>
                <span class="font-medium text-gray-500">/ user</span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  All features in <span class="text-black">Startup</span>
                </span>
              </li>
              <li class="mb-2 flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  Growth <span class="text-black">oriented</span>
                </span>
              </li>
              <li class="flex text-lg">
                <img src="https://res.cloudinary.com/williamsondesign/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">Unlimited</span> cloud storage
                </span>
              </li>
            </ul>
            <a
              href="#/"
              class="flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-5 text-center text-xl text-white"
            >
              Choose Plan
              <img
                src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                class="ml-2"
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
