import { View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { CARDS } from '../../data/cards';
import { MovableCard } from '../../components/MovableCard';
import { Header } from '../../components/Header';
import { styles } from './styles';
import { CARD_HEIGHT } from '../../components/Card';


export function List() {
  
  
  const scrollY = useSharedValue(0);
  const cardsPosition = useSharedValue(listToObject(CARDS));

  const handleScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  function listToObject(list: typeof CARDS) {
    const listOfCards = Object.values(list);

    const object: any = {};

    listOfCards.forEach((card, index) => {
      object[card.id] = index;
    });

    return object;
  }

  return (
    <View style={styles.container}>
      <Header />

      <Animated.ScrollView
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{height: CARDS.length * CARD_HEIGHT}}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {
          CARDS.map((item) => (
            <MovableCard 
              key={item.id}
              data={item}
              scrollY={scrollY}
              cardsPosition={cardsPosition}
              cardsCount={CARDS.length}

            />
          ))
        }
      </Animated.ScrollView>
    </View>
  );
}