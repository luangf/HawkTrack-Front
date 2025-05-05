import { Link } from "react-router-dom";
import { BookOpenText, Cookie, Languages, X } from "lucide-react";
import { useState } from "react";

function Footer() {
  const [cookieModalActive, setCookieModalActive] = useState(false);

  function onBtnCookieClick() {
    setCookieModalActive((previousValue) => !previousValue);
  }

  return (
    <footer className="flex w-full flex-wrap justify-center gap-3 border-t-2 border-[var(--border-color)] bg-white p-3 md:shadow-[var(--box-shadow)]">
      <Link
        className="flex gap-1 rounded-[var(--border-radius)] border-2 border-[var(--border-color)] p-2 shadow-[var(--box-shadow)] hover:bg-amber-50"
        to="#"
      >
        <BookOpenText />
        Terms of Use
      </Link>
      <Link
        className="flex gap-1 rounded-[var(--border-radius)] border-2 border-[var(--border-color)] p-2 shadow-[var(--box-shadow)] hover:bg-amber-50"
        to="#"
      >
        <BookOpenText />
        Privacy
      </Link>

      <button
        onClick={onBtnCookieClick}
        className="flex cursor-pointer gap-1 rounded-[var(--border-radius)] border-2 border-[var(--border-color)] p-2 shadow-[var(--box-shadow)] hover:bg-amber-50"
      >
        <Cookie />
        Cookie Preferences
      </button>
      <div
        onClick={onBtnCookieClick}
        className={`${cookieModalActive ? "block" : "hidden"} fixed top-0 z-10 h-screen w-screen bg-gray-300/80`}
      ></div>
      <div
        className={`${cookieModalActive ? "flex" : "hidden"} fixed top-1/2 left-1/2 z-20 w-2xl max-w-9/10 -translate-x-1/2 -translate-y-1/2 flex-col rounded-[var(--border-radius)] border-2 bg-white p-4 shadow-[var(--box-shadow)]`}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Title Modal</h1>
          <X onClick={onBtnCookieClick} className="cursor-pointer" size={50} />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fugiat perspiciatis sit quae doloremque placeat, exercitationem
          quidem! Ducimus odit, laboriosam odio libero voluptatem aliquam
          veritatis? Similique beatae natus id omnis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          fugiat perspiciatis sit quae doloremque placeat, exercitationem
          quidem! Ducimus odit, laboriosam odio libero voluptatem aliquam
          veritatis? Similique beatae natus id omnis!
        </p>
      </div>

      <div className="flex items-center gap-1">
        <label htmlFor="language">
          <Languages size={30} />
        </label>
        <select
          className="cursor-pointer rounded-[var(--border-radius)] border-2 border-[var(--border-color)] p-2 shadow-[var(--box-shadow)] hover:bg-amber-50"
          name="language"
          id="language"
        >
          <option value="english">English</option>
          <option value="portugues">Português</option>
        </select>
      </div>
    </footer>
  );
}

export default Footer;
