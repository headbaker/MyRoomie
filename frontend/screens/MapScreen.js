import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Heatmap } from 'react-native-maps';
import { fetchHeatmapData } from '../services/api';

const MapScreen = () => {
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
          radius={20}
        />
      </MapView>
      <Text style={styles.title}>Heatmap of Room Offers and Demands</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  title: {
    position: 'absolute',
    top: 10,
    left: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MapScreen;