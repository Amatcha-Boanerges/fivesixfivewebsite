import Link from 'next/link';
import React from 'react';

type CardProps = {
  slug: string;
  title: string;
  summary: string;
  linkPrefix: string;
};

const Card: React.FC<CardProps> = ({ slug, title, summary, linkPrefix }) => {
  return (
    <Link href={`${linkPrefix}/${slug}`}>
      <div className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 transition-colors duration-200 h-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        <p className="font-normal text-gray-700">{summary}</p>
      </div>
    </Link>
  );
};

export default Card; 