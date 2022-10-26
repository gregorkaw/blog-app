import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="flex justify-center container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-slate-800 py-8">
        <div className="block mb-8">
          <Link href="/">
            <span className="transition duration-1000 hover:text-gray-400 cursor-pointer font-bold text-4xl text-white">Grzegorz-Kawecki</span>
          </Link>
        </div>
        <div className="hidden md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="transition p-4 duration-500 ease transform hover:bg-white hover:text-black rounded-full mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
