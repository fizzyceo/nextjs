import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <div>
      <Link className="text-2xl" href="/">
        HOME
      </Link>
      <Link href="/about">ABOUT</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/users">USERS</Link>
      <Button />
    </div>
  );
};

export default Navbar;
