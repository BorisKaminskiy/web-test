import { FC } from 'react';
import classNames from 'classnames';
import styles from './Svg.module.scss'

export const Regular: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={classNames(styles.regular)}>
      <path d="M4.82841 10.4853L10.4853 4.82842C11.6568 3.65684 13.5563 3.65684 14.7279 4.82842C15.8995 5.99999 15.8995 7.89948 14.7279 9.07106L8.01039 15.7886C7.4246 16.3744 6.47485 16.3744 5.88907 15.7886C5.30328 15.2028 5.30328 14.253 5.88907 13.6673L11.8995 7.65684C12.0947 7.46158 12.0947 7.145 11.8995 6.94974C11.7042 6.75448 11.3876 6.75448 11.1924 6.94974L5.18196 12.9601C4.20565 13.9365 4.20565 15.5194 5.18196 16.4957C6.15827 17.472 7.74118 17.472 8.71749 16.4957L15.435 9.77816C16.9971 8.21607 16.9971 5.68341 15.435 4.12131C13.8729 2.55921 11.3403 2.55921 9.77815 4.12131L4.1213 9.77816C3.92604 9.97343 3.92604 10.29 4.1213 10.4853C4.31656 10.6805 4.63315 10.6805 4.82841 10.4853Z" fill="#605E5C"/>
    </svg>
  )
}

export const Telegramm: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={classNames(styles.telegramm)}>
      <path d="M10.8164 10.1973L3.28515 11.4525C3.10876 11.4819 2.96149 11.6032 2.89894 11.7708L0.301044 18.7282C0.0523705 19.3676 0.721794 19.9777 1.33546 19.6708L19.3355 10.6708C19.8882 10.3944 19.8882 9.60557 19.3355 9.32918L1.33546 0.329181C0.721794 0.0223491 0.0523705 0.632391 0.301044 1.27184L2.89894 8.22923C2.96149 8.39675 3.10876 8.51812 3.28515 8.54752L10.8164 9.80272C10.9253 9.82088 10.9989 9.92393 10.9808 10.0329C10.9667 10.1172 10.9007 10.1832 10.8164 10.1973Z" fill="#407EC9"/>
    </svg>
  )
}

export const Chat: FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNames(styles.chat)}>
      <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C10.3817 22 8.81782 21.6146 7.41286 20.888L3.58704 21.9553C2.92212 22.141 2.23258 21.7525 2.04691 21.0876C1.98546 20.8676 1.98549 20.6349 2.04695 20.4151L3.11461 16.5922C2.38637 15.186 2 13.6203 2 12C2 6.47715 6.47715 2 12 2ZM12 3.5C7.30558 3.5 3.5 7.30558 3.5 12C3.5 13.4696 3.87277 14.8834 4.57303 16.1375L4.72368 16.4072L3.61096 20.3914L7.59755 19.2792L7.86709 19.4295C9.12006 20.1281 10.5322 20.5 12 20.5C16.6944 20.5 20.5 16.6944 20.5 12C20.5 7.30558 16.6944 3.5 12 3.5ZM8.75 13H13.2483C13.6625 13 13.9983 13.3358 13.9983 13.75C13.9983 14.1297 13.7161 14.4435 13.35 14.4932L13.2483 14.5H8.75C8.33579 14.5 8 14.1642 8 13.75C8 13.3703 8.28215 13.0565 8.64823 13.0068L8.75 13H13.2483H8.75ZM8.75 9.5H15.2545C15.6687 9.5 16.0045 9.83579 16.0045 10.25C16.0045 10.6297 15.7223 10.9435 15.3563 10.9932L15.2545 11H8.75C8.33579 11 8 10.6642 8 10.25C8 9.8703 8.28215 9.55651 8.64823 9.50685L8.75 9.5H15.2545H8.75Z"/>
    </svg>
  )
}

export const Readed: FC = () => {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={classNames(styles.readed)}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.71942 8.46433L1.01932 5.20977C0.805292 4.95178 0.436584 4.92854 0.195794 5.15787C-0.044996 5.38719 -0.0666847 5.78223 0.147351 6.04022L3.25846 9.79025C3.48144 10.059 3.8696 10.0712 4.10692 9.81692L5.55182 8.26883L6.81402 9.79025C7.037 10.059 7.42516 10.0712 7.66248 9.81692L15.8292 1.06694C16.057 0.822864 16.057 0.427136 15.8292 0.183058C15.6013 -0.0610194 15.232 -0.0610194 15.0042 0.183058L7.27498 8.46433L6.3782 7.38342L12.2736 1.06694C12.5014 0.822864 12.5014 0.427136 12.2736 0.183058C12.0458 -0.0610194 11.6764 -0.0610194 11.4486 0.183058L5.60178 6.44755L4.7754 7.33296L3.71942 8.46433Z" fill="#407EC9" />
    </svg>
  )
}

