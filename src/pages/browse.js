import React from 'react';
import { BrowseContainer } from '../containers/browse';
import { UseContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = UseContent('series');
  const { films } = UseContent('films');
  const slides = selectionFilter({ series, films });
  return <BrowseContainer slides={slides} />;
}
