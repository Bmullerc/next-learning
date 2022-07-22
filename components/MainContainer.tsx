import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

interface ContainerProps {
  children?: JSX.Element,
}

export default function MainContainer({ children }: ContainerProps) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}