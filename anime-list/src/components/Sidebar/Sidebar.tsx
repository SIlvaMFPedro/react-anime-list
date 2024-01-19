import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({
  topAnime,
  popularAnime
}: $TSFixMe) {

  
  const imgUrl = require(`../../assets/images/MAL-icon.png`);

  return (

    
    <div>
    
      <aside>
       
        <nav>
          
          <h3>Top Anime</h3>
          
          <div>
            {topAnime &&
              topAnime.map((anime: $TSFixMe, index: $TSFixMe) => (

                
                <div className="sidebar--card" key={anime.mal_id}>
                  // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  <span className="sidebar--rank">
                    {index + 1}
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <a href={anime?.url} target="_blank" rel="noreferrer">
                      // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                      // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                      <img
                        src={imgUrl}
                        height="28px"
                        width="28px"
                        alt=""
                        title="View at MyAnimeList.net"
                      />
                    </a>
                  </span>
                 
                  <NavLink
                    key={`${anime.mal_id}-link`}
                    to={`/anime/${anime.mal_id}` && `/anime/${anime.mal_id}`}
                  >
                    
                    <img src={anime.images.jpg.small_image_url} alt="top" />
                    
                    <span className="sidebar--title">{anime.title}</span>
                  </NavLink>
                </div>
              ))}
          </div>
        </nav>
        
        <nav>
          
          <h3>Popular Anime</h3>
          
          <div>
            {popularAnime &&
              popularAnime.map((anime: $TSFixMe, index: $TSFixMe) => (

                
                <div className="sidebar--card" key={anime.mal_id}>
                  // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  <span className="sidebar--rank">
                    {index + 1}
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <a href={anime?.url} target="_blank" rel="noreferrer">
                      // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                      // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                      <img src={imgUrl} height="32px" width="32px" alt="" />
                    </a>
                  </span>
                  // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  <NavLink
                    key={`${anime.mal_id}-link`}
                    to={`/anime/${anime.mal_id}` && `/anime/${anime.mal_id}`}
                  >
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <img src={anime.images.jpg.small_image_url} alt="popular" />
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <span className="sidebar--title">{anime.title}</span>
                  </NavLink>
                </div>
              ))}
          </div>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;