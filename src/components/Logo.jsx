import Link from "next/link";
export function Logo({ name }) {
    return (<Link href="/" className="flex items-center gap-2 font-medium tracking-tight text-foreground" aria-label={`${name} home`}>
      <span aria-hidden="true" className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-medium text-primary-foreground">
        k
      </span>
      <span className="text-lg lowercase">{name}</span>
    </Link>);
}
