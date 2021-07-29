import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { artists, images } from '../../actions';
import { getTopArtists } from '../../utilities/apiCalls';
import artistImageData from '../../assets/artistsDataset';
import utils from '../../utilities/utils';
import backupImages from '../../utilities/backupImages';

const TopArtists = () => {

  const dispatch = useDispatch();

  const [artistCards, setArtistCards] = useState([]);

  const location = useSelector(state => state.location);
  const topArtists = useSelector(state => state.topArtists);
  const artistImages = useSelector(state => state.artistImages);

  useEffect(() => {
    fetchArtistsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchArtistsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  useEffect(() => {
    if (topArtists.length > 1) {
      findImageLinks();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topArtists]);


  useEffect(() => {
    if (artistImages.length > 1) {
      setArtistCards(buildCards());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistImages]);

  const fetchArtistsData = async () => {
    const apiData = await getTopArtists(location.string);
    if (apiData) {
      const allArtists = apiData.topartists.artist;
      const filtered = filterArtists(allArtists);
      dispatch(artists(filtered));
    }
  }

  const filterArtists = (data) => {
    const topArtists = data.reduce((topTen, artistObj) => {
      if (data.indexOf(artistObj) < 10) {
        topTen.push(artistObj);
      }
      return topTen;
    }, []);
    return topArtists;
  }

  const findImageLinks = () => {
    const links = [];
    topArtists.forEach(topArtist => {
      const index = topArtists.indexOf(topArtist);
      artistImageData.forEach(artist => {
        if (artist.name === topArtist.name) {
          links[index] = artist.link;
          console.log(artist.name);
        }
      })
    });
    dispatch(images(links));
  }

  const buildCards = () => topArtists.map(artist => {

    let index = topArtists.indexOf(artist);
    let nameString = artist.name.replaceAll(' ', '+');

    return (
      <article key={artist.mbid} className='top-artist-card'>
        <p className='top-artist-name'>{artist.name}</p>
        <Link to={`/artist:${nameString}`} id={nameString} className='link-container'>
          <div 
            className='top-artist-image' 
            id={artist.mbid} 
            key={artist.mbid} 
            style={{ backgroundImage: `url(${artistImages[index] || utils.getRandomElement(backupImages)})`}}>
          </div>
        </Link>
      </article>
    )
  });

  return (
    topArtists.length < 1 ?
      <section className='message-box'>
        <p className='message'>Page Loading</p>
      </section>
      :
      <section className='top-artists-box'>
        <h3>Top Artists</h3>
        <div className='artists-list'>
          {artistCards}
        </div>
      </section>
  )
}

export default TopArtists;
