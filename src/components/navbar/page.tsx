import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="px-20 py-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-13">
          <div className="flex">
            <p className="font-bold text-[25px]">KXSI</p>
            <span className="mt-2.5">studios</span>
          </div>

          <div className="flex space-x-7">
            <Link
              href=""
              className="transform transition-transform duration-300 hover:scale-105"
            >
              Music
            </Link>
            <Link
              href=""
              className="transform transition-transform duration-300 hover:scale-105"
            >
              Tour
            </Link>
            <Link
              href=""
              className="transform transition-transform duration-300 hover:scale-105"
            >
              Photos
            </Link>
            <Link
              href=""
              className="transform transition-transform duration-300 hover:scale-105"
            >
              Shops
            </Link>
          </div>
        </div>

        <div className="flex space-x-7">
          <Link
            href=""
            className="transform transition-transform duration-300 hover:scale-105"
          >
            Spotify
          </Link>
          <Link
            href=""
            className="transform transition-transform duration-300 hover:scale-105"
          >
            Instagram
          </Link>
          <Link
            href=""
            className="transform transition-transform duration-300 hover:scale-105"
          >
            Twitter
          </Link>
        </div>


      </div>
    </nav>
  );
}
