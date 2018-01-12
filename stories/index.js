import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';
import BottomSlider from '../components/BottomSlider';
import ImageWithOverlay from '../components/ImageWithOverlay'
import SlideOutTextOverlay from '../components/SlideOutTextOverlay'


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

// storiesOf('Checkout Area', module)
//   .add('with desktop size', () => (
// 	  <BottomSlider items={[1,2,3]}>Hello Button</BottomSlider>
//   ))
//   .add('with tablet size', () => (
// 	  <BottomSlider items={['😀', '😎', '👍', '💯',5]} >😀 😎 👍 💯</BottomSlider>
//   ))   
//   .add('with mobile size', () => (
// 	  <BottomSlider items={[1,2,3,4,5,1,2,3,4,5,1,2,3,4,5,1,2,3,4,5]} >😀 😎 👍 💯</BottomSlider>
//   ));

storiesOf('Fade Image', module)
  .add('with desktop size', () => (
	  <ImageWithOverlay/>
  ))
  .add('with tablet size', () => (
	  <ImageWithOverlay/>
  ))   
  .add('with mobile size', () => (
	  <ImageWithOverlay/>
  ));
storiesOf('Fade Image Overlay', module)
  .add('with desktop size', () => (
	  <SlideOutTextOverlay/>
  ))
  .add('with tablet size', () => (
	  <SlideOutTextOverlay/>
  ))   
  .add('with mobile size', () => (
	  <SlideOutTextOverlay/>
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
