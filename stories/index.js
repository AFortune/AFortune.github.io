import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import BottomSlider from '../components/BottomSlider';


storiesOf('BottomSlider', module)
  .add('with media', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with sizes', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with sizes and crop buttons', () => (
	  <BottomSlider buttons items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));

storiesOf('Photo Gallery', module)
  .add('with desktop size', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with tablet size', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with mobile size', () => (
	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));

storiesOf('Cart Display', module)
  .add('with desktop size', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with tablet size', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with mobile size', () => (
	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));

storiesOf('Checkout Area', module)
  .add('with desktop size', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with tablet size', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with mobile size', () => (
	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));
