import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar({
  topAnime,
  popularAnime
}: $TSFixMe) {

  // @ts-expect-error TS(2580) FIXME: Cannot find name 'require'. Do you need to install... Remove this comment to see the full error message
  const imgUrl = require(`../../assets/images/MAL-icon.png`);

  return (

    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
    <div>
      // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
      // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
      <aside>
        // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
        // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
        <nav>
          // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          <h3>Top Anime</h3>
          // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          <div>
            {topAnime &&
              topAnime.map((anime: $TSFixMe, index: $TSFixMe) => (

                // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
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
                  // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                  <NavLink
                    key={`${anime.mal_id}-link`}
                    to={`/anime/${anime.mal_id}` && `/anime/${anime.mal_id}`}
                  >
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <img src={anime.images.jpg.small_image_url} alt="top" />
                    // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                    <span className="sidebar--title">{anime.title}</span>
                  </NavLink>
                </div>
              ))}
          </div>
        </nav>
        // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
        // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
        <nav>
          // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          <h3>Popular Anime</h3>
          // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
          <div>
            {popularAnime &&
              popularAnime.map((anime: $TSFixMe, index: $TSFixMe) => (

                // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
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