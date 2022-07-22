import Link from "next/link";

export function Navbar() {
  return (
    <nav className="">
      <ul className="flex gap-4 justify-end py-2 px-12">
        <li>
          <Link href="/"><a>Home</a></Link>
        </li>
        <li>
          <Link href="/about"><a>About</a></Link>
        </li>
        <li>
          <Link href="/products"><a>Products</a></Link>
        </li>
      </ul>
    </nav>
  )
}