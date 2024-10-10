import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  Dimensions,
} from 'react-native';


// Mock data
const trendingHashtags = [
  { id: '1', tag: 'adventure', image: 'https://picsum.photos/200' },
  { id: '2', tag: 'roadtrip', image: 'https://picsum.photos/201' },
  { id: '3', tag: 'nature', image: 'https://picsum.photos/202' },
  { id: '4', tag: 'cityscape', image: 'https://picsum.photos/203' },
  { id: '5', tag: 'foodie', image: 'https://picsum.photos/204' },
];

const topCommunities = [
  { id: '1', name: 'Places of FRANCE', image: 'https://picsum.photos/205' },
  { id: '2', name: 'We live in ITALY', image: 'https://picsum.photos/206' },
  { id: '3', name: 'USA Travelers', image: 'https://picsum.photos/207' },
  { id: '4', name: 'Asian Adventures', image: 'https://picsum.photos/208' },
];

const topNomads = [
  { id: '1', name: '@lauraparker', image: 'https://picsum.photos/209' },
  { id: '2', name: '@mbogan', image: 'https://picsum.photos/210' },
  { id: '3', name: '@rayjosh', image: 'https://picsum.photos/211' },
  { id: '4', name: '@emilytravels', image: 'https://picsum.photos/212' },
];

const { width } = Dimensions.get('window');

export default function TabOneScreen() {
  const renderHashtagItem = ({ item }: { item: { id: string; tag: string; image: string } }) => (
    <View style={styles.hashtagItem}>
      <Image source={{ uri: item.image }} style={styles.hashtagImage} />
      <Text style={styles.hashtagText}>#{item.tag}</Text>
    </View>
  );

  const renderCommunityItem = ({ item }: { item: { id: string; name: string; image: string } }) => (
    <View style={styles.communityItem}>
      <Image source={{ uri: item.image }} style={styles.communityImage} />
      <Text style={styles.communityText}>{item.name}</Text>
    </View>
  );

  const renderNomadItem = ({ item }: { item: { id: string; name: string; image: string } }) => (
    <View style={styles.nomadItem}>
      <Image source={{ uri: item.image }} style={styles.nomadImage} />
      <Text style={styles.nomadText}>{item.name}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Discover the world</Text>
      <TextInput style={styles.searchInput} placeholder="Search" />
      
      <View style={styles.topSearchContainer}>
        <Image
          source={{ uri: 'https://picsum.photos/400/200' }}
          style={styles.topImage}
        />
        <Text style={styles.topSearchText}>#Top search of the day</Text>
      </View>

      <Text style={styles.sectionTitle}>Trending hashtags</Text>
      <FlatList
        horizontal
        data={trendingHashtags}
        renderItem={renderHashtagItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Top community</Text>
      <FlatList
        horizontal
        data={topCommunities}
        renderItem={renderCommunityItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.sectionTitle}>Top nomads</Text>
      <FlatList
        horizontal
        data={topNomads}
        renderItem={renderNomadItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  topSearchContainer: {
    position: 'relative',
    marginBottom: 16,
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  topSearchText: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 12,
  },
  hashtagItem: {
    marginRight: 12,
    width: width * 0.4,
    position: 'relative',
  },
  hashtagImage: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 8,
  },
  hashtagText: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  communityItem: {
    marginRight: 12,
    width: width * 0.6,
  },
  communityImage: {
    width: '100%',
    height: width * 0.4,
    borderRadius: 8,
  },
  communityText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 14,
  },
  nomadItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  nomadImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  nomadText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
  },
});