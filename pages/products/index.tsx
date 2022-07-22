import Link from "next/link"

export default function Products() {
  return (
    <>
      <h1 className="">My Products</h1>
      <Link href="/">
        <a className="text-red-600 text-xl">Back</a>
      </Link>
    </>
  )
}