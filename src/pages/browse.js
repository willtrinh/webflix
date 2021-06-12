import React from 'react';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selection-filter';
export default function Browse() {
  const { films } = useContent('films');
  console.log(films);
  return <>I'm Browse</>;
}
