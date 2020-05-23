import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';
import { useTranslation } from 'react-i18next';

import { RootState } from 'store/types';
import { getFeatured } from 'store/rootSelectors';
import {
  fetchWeatherByPosition,
  removeFromFeatured,
  clearFeatured,
  reorderFeatured,
} from 'store/cities/actions';
import Title from 'components/common/Title';
import TrashButton from 'components/common/buttons/Trash';
import EmptyResult from 'components/common/messages/EmptyResult';
import List from './List';

import * as S from './styles';

// eslint-disable-next-line no-use-before-define
type Props = ConnectedProps<typeof connector>;

export const Featured = ({
  cities,
  _fetchWeatherByPosition,
  _removeFromFeatured,
  _clearFeatured,
  _reorderFeatured,
}: Props): React.ReactElement => {
  const { t } = useTranslation();
  const tC = (key: string, options?: Record<string, unknown>): string =>
    t(`cities.featured.${key}`, options);
  const isEmpty = !cities || !Object.keys(cities).length;

  const onDragEnd = ({ source, destination }: DropResult): void => {
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    _reorderFeatured(source.index, destination.index);
  };

  return (
    <S.FeaturedSection>
      <S.FeaturedHeader>
        <Title>{tC('title')}</Title>

        <TrashButton isEmpty={isEmpty} onClick={_clearFeatured} />
      </S.FeaturedHeader>

      {isEmpty && <EmptyResult>{tC('addToFeatured')}</EmptyResult>}

      {!isEmpty && (
        <DragDropContext onDragEnd={onDragEnd}>
          <List
            cities={cities}
            fetchCity={_fetchWeatherByPosition}
            removeFromFeatured={_removeFromFeatured}
          />
        </DragDropContext>
      )}
    </S.FeaturedSection>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  cities: getFeatured(state),
});

const mapDispatch = {
  _fetchWeatherByPosition: fetchWeatherByPosition,
  _removeFromFeatured: removeFromFeatured,
  _clearFeatured: clearFeatured,
  _reorderFeatured: reorderFeatured,
};

const connector = connect(mapState, mapDispatch);
export default connector(Featured);
