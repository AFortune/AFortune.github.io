import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import BottomSlider from '../components/BottomSlider';

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));   

storiesOf('BottomSlider', module)
  .add('with media', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with sizes', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with sizes and crop buttons', () => (
	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));

storiesOf('Photo Gallery', module)
  .add('with desktop size', () => (
	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
  ))
  .add('with tablet size', () => (
	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
  ))   
  .add('with ', () => (
	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
  ));
