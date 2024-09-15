import { useState } from 'react';


interface Artist {
  id: number;
  name: string;
}


let initialArtists  = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

let nextId = 0;

export default function List() {
  const [artists, setArtists] = useState<Artist[]>([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      {artists.map((artist) => {
        return <div key={artist.id}>{artist.name}{' '} <button onClick={() => {
          setArtists(artists.filter(a => a.id !== artist.id));
        }}></button></div>;
      })}
    </>
  );
}
