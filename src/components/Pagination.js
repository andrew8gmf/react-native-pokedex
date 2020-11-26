import React from 'react';
import { View, Button } from 'react-native';

export default function Pagination({ gotoNextPage, gotoPrevPage }) {
  return (
    <View>
      {gotoPrevPage && <Button onPress={gotoPrevPage} title="Previous"></Button>}
      {gotoNextPage && <Button onPress={gotoNextPage} title="Next"></Button>}
    </View>
  )
}