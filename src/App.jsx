// import React, { useState } from 'react';
// import ReactPlayer from 'react-player';

// const SongPlayer = ({  }) => {

//   const songData = {
//     "id": 6908,
//     "t_title": "Space Melody(PagalWorld.com.se)",
//     "i_artist_id": "554",
//     "t_song_link": "https://curioushit.nevinainfotech.in/public/files/uploadsong/20240117_LipuiPLxBb.mp3",
//     "e_platform": "Default",
//     "t_song_id": "Default_5zWZcX6",
//     "t_lyrics": "{\n  \"time_stamp\": {\n    \"00:00:14,478\": \"Maybe I'm a dreamer maybe\",\n    \"00:00:18,574\": \"I'm a fool for you but I think I'm a\",\n    \"00:00:22,334\": \"believer I\",\n    \"00:00:26,146\": \"believe in something new maybe I'm\",\n    \"00:00:29,814\": \"a liar maybe I\",\n    \"00:00:33,286\": \"will tell the truth I think we\",\n    \"00:00:37,302\": \"got a hope and\",\n    \"00:00:41,238\": \"I hope it's not too late for us to\",\n    \"00:00:44,680\": \"change will I see a place\",\n    \"00:00:49,560\": \"somewhere in la\",\n    \"00:01:25,750\": \"it maybe\",\n    \"00:01:29,894\": \"I'm a dreamer maybe I'm\",\n    \"00:01:33,594\": \"a fool for you but I think I'm a\",\n    \"00:01:37,978\": \"believer I believe\",\n    \"00:01:41,374\": \"in something new maybe I'm a\",\n    \"00:01:45,614\": \"liar maybe I will tell\",\n    \"00:01:49,440\": \"the truth we gotta hold\",\n    \"00:01:55,726\": \"and I hope it's not too late for us\",\n    \"00:01:59,760\": \"to change when I see a place\",\n    \"00:02:02,640\": \"somewhere in.\"\n  }\n}\n",
//     "t_image_path": "https://curioushit.nevinainfotech.in/public/files/myuploadsimages/nvzehIRStz.png",
//     "albumlist": "Alan Walker Mp3 Songs - Pagalworld.com.se",
//     "i_year_display": 2020,
//     "t_genres_display": "Club",
//     "listnerCount": 1,
//     "i_duration_display": "03:12",
//     "fav_flag": "0",
//     "embed_link": "https://curioushit.nevinainfotech.in/public/files/uploadsong/20240117_LipuiPLxBb.mp3",
//     "regions": [],
//     "sources": null,
//     "play_count": 3,
//     "listener_count": 1,
//     "like_count": 0,
//     "is_liked": "ri-heart-line",
//     "artist_name": null,
//     "album_name": ""
// }
//   const { t_song_link, t_lyrics } = songData;

//   const [currentLyric, setCurrentLyric] = useState('');
//   const [parsedLyrics, setParsedLyrics] = useState(null);

//   // Parse the lyrics string into an object
//   if (!parsedLyrics && t_lyrics) {
//     const convertToSeconds = (timestamp) => {
//       const [hours, minutes, seconds] = timestamp.split(':').map(parseFloat);
//       const totalSeconds = hours * 3600 + minutes * 60 + seconds;
//       return totalSeconds;
//     };
//     // setParsedLyrics(JSON.parse(t_lyrics).time_stamp);
//     const newData = {};
//     console.log("parsedLyrics",JSON.parse(t_lyrics).time_stamp);

//     const parsed = JSON.parse(t_lyrics).time_stamp
//     Object.keys(parsed).forEach((key) => {
//       const seconds = convertToSeconds(key);
//       newData[seconds] = parsed[key];
//     });

//     setParsedLyrics(newData)
//   }

//   // Function to update current lyric based on the current time
//   const updateLyric = (currentTime) => {
//     console.log("parsedLyrics",parsedLyrics);

//     if (!parsedLyrics){
//       // console.log("parsedLyrics",parsedLyrics);
//       return;
//     } 

//     for (const [timestamp, lyrics] of Object.entries(parsedLyrics)) {
//       const [startSeconds] = timestamp.split(',');
//       if (timestamp <= currentTime) {
//         setCurrentLyric(lyrics);
//       } else {
//         break;
//       }
//     }
//   };

//   // Function to handle progress updates
//   const handleProgress = ({ playedSeconds }) => {
//     console.log("playedSeconds",playedSeconds);
//     updateLyric(playedSeconds);
//   };

//   return (
//     <div>
//       <h2>{songData.t_title}</h2>
//       <ReactPlayer url={t_song_link} controls onProgress={handleProgress} />
//       <div>
//         <h3>Lyrics:</h3>
//         <p>{currentLyric}</p>
//       </div>
//     </div>
//   );
// };

// export default SongPlayer;

import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';

const SongPlayer = ({}) => {
    const songData = {
    "id": 6908,
    "t_title": "Space Melody(PagalWorld.com.se)",
    "i_artist_id": "554",
    "t_song_link": "https://curioushit.nevinainfotech.in/public/files/uploadsong/20240117_LipuiPLxBb.mp3",
    "e_platform": "Default",
    "t_song_id": "Default_5zWZcX6",
    "t_lyrics": "{\n  \"time_stamp\": {\n    \"00:00:14,478\": \"Maybe I'm a dreamer maybe\",\n    \"00:00:18,574\": \"I'm a fool for you but I think I'm a\",\n    \"00:00:22,334\": \"believer I\",\n    \"00:00:26,146\": \"believe in something new maybe I'm\",\n    \"00:00:29,814\": \"a liar maybe I\",\n    \"00:00:33,286\": \"will tell the truth I think we\",\n    \"00:00:37,302\": \"got a hope and\",\n    \"00:00:41,238\": \"I hope it's not too late for us to\",\n    \"00:00:44,680\": \"change will I see a place\",\n    \"00:00:49,560\": \"somewhere in la\",\n    \"00:01:25,750\": \"it maybe\",\n    \"00:01:29,894\": \"I'm a dreamer maybe I'm\",\n    \"00:01:33,594\": \"a fool for you but I think I'm a\",\n    \"00:01:37,978\": \"believer I believe\",\n    \"00:01:41,374\": \"in something new maybe I'm a\",\n    \"00:01:45,614\": \"liar maybe I will tell\",\n    \"00:01:49,440\": \"the truth we gotta hold\",\n    \"00:01:55,726\": \"and I hope it's not too late for us\",\n    \"00:01:59,760\": \"to change when I see a place\",\n    \"00:02:02,640\": \"somewhere in.\"\n  }\n}\n",
    "t_image_path": "https://curioushit.nevinainfotech.in/public/files/myuploadsimages/nvzehIRStz.png",
    "albumlist": "Alan Walker Mp3 Songs - Pagalworld.com.se",
    "i_year_display": 2020,
    "t_genres_display": "Club",
    "listnerCount": 1,
    "i_duration_display": "03:12",
    "fav_flag": "0",
    "embed_link": "https://curioushit.nevinainfotech.in/public/files/uploadsong/20240117_LipuiPLxBb.mp3",
    "regions": [],
    "sources": null,
    "play_count": 3,
    "listener_count": 1,
    "like_count": 0,
    "is_liked": "ri-heart-line",
    "artist_name": null,
    "album_name": ""
}

  const { t_song_link, t_lyrics } = songData;

  const [currentLyric, setCurrentLyric] = useState('');
  const [parsedLyrics, setParsedLyrics] = useState(null);
  const lyricsContainerRef = useRef(null);

  // Parse the lyrics string into an object
  useEffect(() => {
    const convertToSeconds = (timestamp) => {
      const [hours, minutes, seconds] = timestamp.split(':').map(parseFloat);
      const totalSeconds = hours * 3600 + minutes * 60 + seconds;
      return totalSeconds;
    };

    if (!parsedLyrics && t_lyrics) {
      const newData = {};
      const parsed = JSON.parse(t_lyrics).time_stamp;

      Object.keys(parsed).forEach((key) => {
        const seconds = convertToSeconds(key);
        newData[seconds] = parsed[key];
      });

      setParsedLyrics(newData);
    }
  }, [parsedLyrics, t_lyrics]);

  // Function to update current lyric based on the current time
  const updateLyric = (currentTime) => {
    if (!parsedLyrics) {
      return;
    }

    for (const [timestamp, lyrics] of Object.entries(parsedLyrics)) {
      const [startSeconds] = timestamp.split(',');
      console.log("currentTime+4",currentTime+4);
      console.log("timestamp+4",timestamp);
      if (timestamp <= currentTime+4) {
        setCurrentLyric(lyrics);
      } else {
        break;
      }
    }
  };

  // Function to handle progress updates
  const handleProgress = ({ playedSeconds }) => {
    updateLyric(playedSeconds);
  };

  // Scroll lyrics container upwards when current lyric changes
  useEffect(() => {
    if (lyricsContainerRef.current) {
      lyricsContainerRef.current.scrollTop = lyricsContainerRef.current.scrollHeight;
    }
  }, [currentLyric]);

  return (
    <div>
      <h2>{songData.t_title}</h2>
      <ReactPlayer url={t_song_link} controls onProgress={handleProgress} />
      <div ref={lyricsContainerRef} >
        {parsedLyrics &&
          Object.values(parsedLyrics).map((lyric, index) => (
            <p key={index} style={{ color: lyric === currentLyric ? 'red' : 'black' }}>
              {lyric}
            </p>
          ))}
      </div>
    </div>
  );
};

export default SongPlayer;

