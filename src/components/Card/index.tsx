import { Text, View } from 'react-native';
import { styles, HEIGHT, MARGIN_BOTTOM } from './styles';
import { MaterialIcons } from '@expo/vector-icons'

export const CARD_HEIGHT = HEIGHT + MARGIN_BOTTOM;

export type CardProps = {
  id: number;
  title: string;
}

type Props = {
  data: CardProps;
}

export function Card({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {data.title}
      </Text>

      <MaterialIcons 
        name='drag-indicator'
        size={32}
        color='#EEE'
      />
    </View>
  );
}
