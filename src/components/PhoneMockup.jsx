import Image from "next/image";
export function PhoneMockup({ src, alt, priority = false, className = "" }) {
    return (<div className={`relative mx-auto w-55 sm:w-65 ${className}`}>
      <div className="rounded-[2.2rem] border border-border bg-secondary p-2 shadow-2xl shadow-secondary/20">
        <div className="relative overflow-hidden rounded-[1.75rem] bg-card">
          <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black/70"/>
          <Image src={src} alt={alt} width={780} height={1600} priority={priority} loading={priority ? undefined : "lazy"} sizes="(max-width: 640px) 220px, 260px" className="h-auto w-full"/>
        </div>
      </div>
    </div>);
}
