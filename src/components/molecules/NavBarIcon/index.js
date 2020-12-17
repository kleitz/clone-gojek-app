import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const NavBarIcon = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity onPress={props.onPress}>
        <Image style={{width: 26, height: 26}} source={props.img} />
        <Text
          style={{
            fontSize: 10,
            marginTop: 4,
            color: props.active ? '#43AB4A' : '#545454',
          }}>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NavBarIcon;
