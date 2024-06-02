import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ListingType } from '@/types/listingType';
import Colors from '@/constants/Colors';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

type Props = {
  listingData: any[];
};

export default function Listings({ listingData }: Props) {
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.item}>
          <Image style={styles.image} source={{ uri: item.image }} />

          <View style={styles.bookmark}>
            <Ionicons name='bookmark-outline' size={20} color={Colors.white} />
          </View>

          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail'>
            {item.name}
          </Text>

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome5
                name='map-marker-alt'
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.itemLocationTxt}>{item.location}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={listingData}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: 'absolute',
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
  },
});
