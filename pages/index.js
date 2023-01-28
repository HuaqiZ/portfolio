import Image from "next/image";
import Experience from "../components/Profile/Experience";

export default function Home() {
  return (
    <div>
      <Image
        priority
        src="/images/profile.jpg"
        className="rounded-full"
        height={108}
        width={108}
        alt=""
      />
      <span className="text-3xl">Huaqi Zhang</span>
      {/* <div>
        <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
          hi, I'm <br className="block md:hidden" />
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            Huaqi Zhang 👋
          </span>
          <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>
        <div className="text-xl font-semibold md:text-3xl">
          developer by choice and designer for fun
        </div>
      </div> */}
      <div className="h-[500px] w-[400px]">
        <Experience />
      </div>
    </div>
  );
}
