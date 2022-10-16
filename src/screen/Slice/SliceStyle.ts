import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageStyle: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856D6',
  },
  subtitle: {
    fontSize: 16,
  },
  paginationStyle: {
    width: 20,
    height: 10,
    borderRadius: 10,
  },
  touchable: {
    flexDirection: 'row',
    backgroundColor: '#5856d6',
    width: 110,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textIcon: {
    fontSize: 25,
    color: 'white',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
