import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';
import { fetchHeatmapData } from '../services/api';

const MyRoomieMapView = () => {
  const [heatmapData, setHeatmapData] = useState([]);

  useEffect(() => {
    const loadHeatmapData = async () => {
      try {
        const data = await fetchHeatmapData();
        setHeatmapData(data);
      } catch (error) {
        console.error('Error fetching heatmap data:', error);
      }
    };

    loadHeatmapData();
  }, []);

  return (
    <View style={styles.container}>
      <MapView style={styles.map}>
        <Heatmap
          points={heatmapData}
          opacity={0.7}
          radius={50}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MyRoomieMapView;