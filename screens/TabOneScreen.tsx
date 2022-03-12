import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, CheckBox, Icon, ThemeProvider } from 'react-native-elements';
import { Text } from 'react-native-elements/dist/Text';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  const [check2, setCheck2] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor='#eee'
        darkColor='rgba(255,255,255,0.1)'
      />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
      <Button title='Hey!' onPress={() => console.log('123213')} />
      <View
        style={
          {
            // borderWidth: 1,
          }
        }>
        <CheckBox
          center
          title='Click Here'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={check2}
          onPress={() => setCheck2(!check2)}
          wrapperStyle={{
            borderWidth: 1,
          }}
          containerStyle={{
            borderWidth: 1,
            borderColor: 'red',
          }}
        />
        <Icon name='radio-button-checked' type='material' color={'red'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
