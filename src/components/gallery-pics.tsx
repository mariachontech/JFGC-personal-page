/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

export const GalleryPics = (props: Props) => {
  return (
    <section className="py-6 ">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src="https://source.unsplash.com/random/301x301/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?0"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?1"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?2"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?3"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?4"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?5"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?6"
        />
        <img
          alt=""
          className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          src="https://source.unsplash.com/random/200x200/?7"
        />
        <img
          src="https://source.unsplash.com/random/302x302/"
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
        />
      </div>
      <div className="columns-1 gap-4 space-y-4 p-4 sm:columns-2 md:columns-3 lg:columns-4">
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/8n7ipHhI8CI" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman in white dress shirt holding red flower during daytime.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/IXYxqP4zejo" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing white blazer.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/0zq6yuNk3L8" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing black scoop-neck sleeveless top.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/wBmWZZ7WS2U" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman kneeling on floor while hands up.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/rhVeNHHNbdk" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                One topless unknown celebrity.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/Nsze2HlxoZo" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing black and white V-neck top.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/VhcZyymbvpA" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                View the photo by Aiony Haust.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/j5L0X1ioajw" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Grayscale photo of woman wearing black spaghetti strap top.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/uUem73YWgSI" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman in white shirt lying on bed.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/3TLl_97HNJo" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing black crew-neck shirt.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ybd0faxFuHE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Selective focus photograph of man in white dress shirt.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/gGJMFXLMZD4" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman sitting on black canal frame.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/LupPyi-bHOs" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Man standing on green mountain.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/LV429inzFWs" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Edited photo of woman holding black DSLR camera.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/WTshKdiBHkI" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Women&apos;s gray coat.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ZXKL4mwbSRA" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman listening on black headphones.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/81sAxFc8NOE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                View the photo by Aiony Haust.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/Mqxav2v_rJQ" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman holding camera.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/hRzGI5kLc5c" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing grey shirt carrying flowers inside greenhouse.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/hA2bgXeA5sc" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Grayscale photography of woman wearing sweatshirt.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ddxdqm_9j_c" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Man wearing gray sweater.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/kfesSq6u8-0" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman in black long-sleeved shirt taking pose.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/S-igcQ6qpg4" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman raising hands.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/A2-IOiuGgnE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman looking backwards while walking towards trees.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/owp8uQgoK8U" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Grayscale photography of woman in black spaghetti strap top in
                middle of road.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/Dhgj5YgpSRE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman laying on white bedding.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/n33JxJFUsvI" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman lying on bed.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/wP2gA4S2xEU" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Man standing under red flower plants.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/1FOeHGCkTfQ" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman holding brown wooden framed light bulb.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/B4YM5GVNFU0" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Man and woman facing backward while woman&apos;s head on
                man&apos;s shoulder on tip of hill.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ZcitQRpbqbE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Mountain under clear blue sky.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/xCQm5_9aro0" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                View the photo by Aiony Haust.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/NGIrxCby4Go" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman taking photo.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/_V_SY9jSkic" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman in white sleeveless dress standing on green grass field
                during daytime.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/K0DxxljcRv0" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman holding dried flower.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/8OxVecNEuCQ" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing white half-sleeved dress standing in green room.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/CVKVPiNv_Wc" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Women&apos;s black long-sleeved crop top.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/orYdcTza06E" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman standing in front of wall.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/BSaOlM6qFJI" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing pink floral bra leaning on white wall.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/jmATI5Q_YgY" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Women&apos;s red floral top.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/HQCz1G4cew4" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman in white and black top wearing eyeglasses.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/vTIPblWkvaw" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman sitting on brown armchair beside dining table.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ftLZUqNRjTc" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman hugging white pillow.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/qaccIWWgG40" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Man wearing white dress shirt.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/vFj2k-KavKE" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing black floral cold-shoulder dress near white cat
                lying on roof.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/TG1cM0nDUq0" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman sitting on stair while raising right hand.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/ITXtNqvfdOw" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Woman wearing black button-up shirt.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/soK2Bdjzrng" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                View the photo by Aiony Haust.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/Z4k1eltT-Pk" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                View the photo by Aiony Haust.
              </div>
            </div>
          </div>
        </div>
        <div className="group relative cursor-pointer overflow-hidden rounded-md">
          <img src="https://source.unsplash.com/gtkvIGeHAn4" />
          <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="pointer-events-none absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex flex-col p-8">
              <button className="mr-auto rounded-full bg-red-500 py-2 px-8 text-sm font-bold text-white">
                Share
              </button>
              <div className="relative z-10 mt-auto break-words text-lg font-semibold text-white">
                Topless woman wearing black jeans.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
