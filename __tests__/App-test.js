import React from 'react';
import {create} from 'react-test-renderer';
import Index from '../src/ui';




const navigation = {
  navigate:jest.fn()

}


/**
 * Simple UI test with react-test-renderer to track changes in Ui
 */
const tree = create(<Index navigation={navigation} />);

test('snapshot',()=>{
  expect(tree).toMatchSnapshot();
})


/** Unit Testing of Navigation using Jest */

test('Navigate to Login Screen',()=>{
  const button = tree.root.findByProps({testID:'Button'}).props ;
  button.onPress();

  expect(navigation.navigate).toBeCalledWith('Login')
})

