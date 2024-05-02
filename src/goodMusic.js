const songs = [
    ["Speak Your Mind - Marc Benno","https://open.spotify.com/track/1oWlvdxiEjWHv2sVURNLHM?autoplay=true"],
    ["The Sorcerer - Twain","https://open.spotify.com/track/53ZxF1STwZA0JpTmI8ZunV?autoplay=true"],
    ["Plain & Sane & Simple Melody - Ted Lucas","https://open.spotify.com/track/4DCEk28xejlUHLl0i9G7FA?autoplay=true"],
    ["Oh! Sweet Nuthin’ - The Velvet Underground","https://open.spotify.com/track/0i19MAZbyn8uTir7FprXId?autoplay=true"],
    ["Dramamine - Modest Mouse","https://open.spotify.com/track/5vtRk4rYxiy4cj95cmJ5Ma?si=10611728c5f74123"],
    ["This Is How We Move - Billie Marten", "https://open.spotify.com/track/5bQV0NEKpqCd3Erpau30VL?si=1faf55bdf8b44f86"],
    ["Buka - Hania Rani", "https://open.spotify.com/track/366WRwY3T7CmjQPXFXe2sS?si=c445f1c9fb7e42c5"],
    ["Spud Infinity - Big Thief", "https://open.spotify.com/track/3Q6VfeIZ1bTjWiNe2Or4LQ?si=b616eaa161064839"],
];

const random = Math.floor(Math.random() * songs.length);

export default function GetRandomSong() {
    console.log(songs[random][0])
    return (
        <a
            className= 'music-text'
            href={songs[random][1]}
            target="_blank"
            rel="noopener noreferrer"
        >{songs[random][0]}</a>);
    // <p>{songs[random][0]}</p>;
}