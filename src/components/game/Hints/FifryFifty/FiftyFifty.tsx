import styles from './FiftyFifty.scss';
import React from 'react';
import {Hint, PropsHint} from '../../../shared/Hint/Hint';
import {activeHintsFiftyFifty, ListActiveAnswer} from '../../../../utils/ListActiveAnswers';
import {saveSessionState} from '../../../../utils/StogagesUtils';
import {faScaleBalanced} from '@fortawesome/free-solid-svg-icons';

export const FiftyFifty: React.FC<PropsHint> = ({isActive, setIsActive, disable, questions, isSoundActive}) => {
  const click = () => {
    activeHintsFiftyFifty(questions);
    saveSessionState('ListActiveAnswer', ListActiveAnswer);
  };
  return (
    <Hint
      icon={faScaleBalanced}
      className={styles.root}
      onClick={click}
      isActive={isActive}
      setIsActive={setIsActive}
      disable={disable}
      isSoundActive={isSoundActive}
    />
  );
};
