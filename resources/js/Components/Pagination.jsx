import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
  return (
    <nav className="flex justify-center gap-2 mt-4">
      {links.map((link, index) => {
        if (!link.url) {
          return (
            <span
              key={index}
              className="px-4 py-2 text-sm text-gray-500 bg-gray-100 rounded-md cursor-not-allowed"
              dangerouslySetInnerHTML={{ __html: link.label }}
            />
          );
        }

        return (
          <Link
            key={index}
            href={link.url}
            className={`px-4 py-2 text-sm rounded-md ${
              link.active
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            dangerouslySetInnerHTML={{ __html: link.label }}
          />
        );
      })}
    </nav>
  );
}
