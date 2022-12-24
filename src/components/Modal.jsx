import s from './modal.module.css'
export const Modal = ({ currentAvatar: { src, alt }, onClose}) => {
    return (
      <div className={s.backdrop}><div className={s.modal}>
      <img src={src} alt={alt} />            
            <button onClick={onClose} type="button">Close</button>
    </div></div>
    
  );
};
