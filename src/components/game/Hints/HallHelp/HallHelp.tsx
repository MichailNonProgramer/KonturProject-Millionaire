import styles from './HallHelp.scss';
import React, {Dispatch, SetStateAction} from 'react';
import {Hint, PropsHint} from '../../../shared/Hint/Hint';
import logo from '/src/img/millionaire_icon.svg';

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  disable: boolean;
  setIsOpenHallHelpModal: Dispatch<SetStateAction<boolean>>;
}

export const HallHelp: React.FC<Props> = ({isActive, setIsActive, disable, setIsOpenHallHelpModal}) => {
  const click = () => {
    setIsOpenHallHelpModal(true);
    console.log('HallHelp');
  };
  return (
    <Hint
      img={logo}
      name={styles.root}
      onClick={click}
      isActive={isActive}
      setIsActive={setIsActive}
      disable={disable}
    />
  );
};