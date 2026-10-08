"use client";

import React, { useEffect, useState } from "react";
import {
  BookItem,
  fetchLiveAuthorBooks,
  GOODREADS_AUTHOR_URL,
  AUTHOR_OPEN_LIBRARY_ID,
  AMAZON_AUTHOR_URL,
  ORCID_URL,
} from "@/lib/books";

export const LiveBiographyBooks: React.FC = () => {
  const [books, setBooks] = useState<BookItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    fetchLiveAuthorBooks()
      .then((data) => {
        if (isMounted) {
          setBooks(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.warn("Error fetching live biography books:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="my-4 not-prose">
      {loading ? (
        <div className="p-6 text-center text-xs font-mono text-gray-500 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg">
          <div className="inline-block animate-spin mr-2">⟳</div>
          Connecting to Amazon Author Central, Goodreads &amp; Open Library live registries...
        </div>
      ) : books.length === 0 ? (
        <div className="p-4 text-xs font-mono text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg">
          Author publications are synchronized live from Amazon Author Central, Goodreads, and Open Library. Visit the{" "}
          <a
            href={AMAZON_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 underline font-bold"
          >
            Amazon Author Central
          </a>{" "}
          or{" "}
          <a
            href={GOODREADS_AUTHOR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-600 dark:text-amber-400 underline font-bold"
          >
            Goodreads Profile
          </a>{" "}
          for current catalog listings.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="wikitable w-full text-left">
            <thead>
              <tr>
                <th>Title &amp; Work</th>
                <th>Year / Date</th>
                <th>Subject / Discipline</th>
                <th>Catalog &amp; Live Registry</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>
                    <i>
                      <b>{book.title}</b>
                    </i>
                    {book.subtitle && (
                      <span className="block text-[11px] text-gray-500 mt-0.5">
                        {book.subtitle}
                      </span>
                    )}
                  </td>
                  <td>{book.publishedDate || "2026"}</td>
                  <td>
                    {book.categories && book.categories.length > 0
                      ? book.categories.slice(0, 2).join(", ")
                      : "Distributed Systems & Cloud Computing"}
                  </td>
                  <td>
                    <div className="flex flex-col gap-1 text-[11px] font-mono">
                      {book.isbn && (
                        <span>
                          ISBN: <b>{book.isbn}</b>
                        </span>
                      )}
                      <div className="flex flex-wrap items-center gap-2">
                        {book.amazonUrl && (
                          <a
                            href={book.amazonUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link text-amber-700 dark:text-amber-400 font-bold"
                          >
                            Amazon
                          </a>
                        )}
                        {book.goodreadsUrl && (
                          <a
                            href={book.goodreadsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link"
                          >
                            Goodreads
                          </a>
                        )}
                        {book.openLibraryUrl && (
                          <a
                            href={book.openLibraryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link"
                          >
                            Open Library
                          </a>
                        )}
                        {book.googleBooksUrl && (
                          <a
                            href={book.googleBooksUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link"
                          >
                            Google Books
                          </a>
                        )}
                        {book.orcidUrl && (
                          <a
                            href={book.orcidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="wiki-link"
                          >
                            ORCID
                          </a>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
