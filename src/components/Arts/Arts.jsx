import React from 'react';
import { Link } from 'react-router-dom';
import { writings } from '../../data.js';
import heart from '../../assets/heart.gif';

export default function Arts() {

  const list = writings.map((writing) => (
    <li key={ writing.id }>
      <Link className="text-center text-md subpixel-antialiased md:leading-loose" to={ writing.alias }>
        <p className="">{ writing.title }</p>
      </Link>
    </li>
  ));

  return (
    <>
      <section className="animate__fadeIn">
        <h2
          className="subtitle max-w-max mx-auto text-center text-xl font-light md:text-2xl my-16 p-2 subpixel-antialiased underline"
        >
          Arts
        </h2>
        <article>
          <div className="md:grid md:grid-cols-4 md:gap-12">
            <div className="md:col-start-1 md:col-span-2">
              <h3 className="caption text-center text-xl md:text-2xl font-light subpixel-antialiased">writings:</h3>
              <ul>{ list }</ul>
            </div>
            <div className="md:col-start-3 md:col-span-2 w-60 md:w-72 mx-auto my-4">
              <img src={ heart } alt="heart gif" className="h-60 md:h-72" />
            </div>
          </div>
          <div className="flex flex-col items-center my-10">
            <h3 className="caption text-center text-xl md:text-2xl font-light my-4 subpixel-antialiased">songs:</h3>
            <iframe
              className="rounded-xl w-3/5 h-96"
              src="https://open.spotify.com/embed/album/66BL4sZdmZh68Rkm4UL4am?utm_source=generator"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            >
            </iframe>
            <h4 className="text-center subpixel-antialiased my-6">LE FOG</h4>
          </div>
         
          <div className="caption text-center w-2/3 mx-auto my-12 text-xs md:text-sm p-4 md:p-8">
            <em>
            all songs, sounds, writings, recordings and compositions are by adam robson
            </em>
          </div>
        </article>
      </section>
    </>
  );
}
