"use client"

import { FileSearch } from '@phosphor-icons/react';
import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        {/* Menggunakan komponen FileSearch */}
        <FileSearch size={44} className="text-color-accent" />
        <h3 className="text-color-accent text-4xl font-bold">NOT FOUND</h3>
        {/* Menggunakan Link dari Next.js */}
        <Link href="/" passHref>
          <div className="text-color-primary hover:text-color-accent transition-all cursor-pointer underline">
            Kembali
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
