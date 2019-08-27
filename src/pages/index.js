import { useRef, useEffect } from 'react';

import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

import styles from './index.css';

export default function() {
  const divRef = useRef(null);

  useEffect(() => {
    if (divRef.current) {
      const map = new Map({
        basemap: 'osm',
      });
      const view = new MapView({
        map,
        container: divRef.current,
      });
    }
  }, []);

  return <div ref={divRef} className={styles.normal}></div>;
}
