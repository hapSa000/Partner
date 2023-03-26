import {StyleSheet} from 'react-native';
import {wp} from '../../../constants/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    backgroundColor: 'pink',
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {width: 20, height: 20},
  headerTitle: {
    fontWeight: 'bold',
    marginLeft: 50,
    fontSize: 17,
  },
  profileContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',

    paddingTop: 25,
  },
  profileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    //   backgroundColor: 'green',
    // elevation: 2,
  },
  profileImage1: {
    width: 130,
    height: 130,
    // elevation: 2,
    borderRadius: 70,
    top: 10,
  },
  profileComplete: {
    backgroundColor: '#fc5c65',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 52,
    bottom: 20,
  },
  profileCompleteText: {
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingBottom: 10,
  },
  nameContainerText: {
    fontSize: 22,
    color: 'black',
  },
  nameContainerImage: {
    width: 20,
    height: 20,
    margin: 10,
    borderRadius: 50,
  },
  flatlist: {
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
  },
  card: {
    margin: 10,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
    width: wp(28),
    borderRadius: 12,
    elevation: 2,
    top: 10,
  },
  star: {
    margin: 20,
    borderRadius: 50,
    fontSize: 30,
  },
  cardTitle: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: {
    textTransform: 'capitalize',
    fontWeight: '500',
  },
  cardButton: {
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  addIcon: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    position: 'absolute',
    left: 80,
    top: -10,
    elevation: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  addIconText: {
    color: 'grey',
    textTransform: 'uppercase',
    fontSize: 25,
  },
  caraousel: {
    backgroundColor: 'lightgrey',
    height: 100,
  },
  caraouselTitle: {fontWeight: 'bold', fontSize: 20, color: 'black'},
  desc: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
});
export default styles;
