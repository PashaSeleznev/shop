import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import PropTypes from 'prop-types';

function MyMap({center, zoom}) {
  return (
    <YMaps>
      <div>
        <Map style = {{width: '800px', height: '500px'}} defaultState={{ center: center, zoom: zoom }}>
        <Placemark geometry={center} />
        </Map>
      </div>
    </YMaps>
  );
}

export default MyMap;

MyMap.propTypes = {
  center: PropTypes.array.isRequired,
  zoom: PropTypes.number.isRequired
}