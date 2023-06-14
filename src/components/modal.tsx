import { ReactNode, useEffect } from "react";
import IconClose from "../assets/icons/close";
import Button from "./button";

type ModalProps = {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  //pošto nam onClose i onSuccess ne trebaju vracati nikakav podatak, možemo zagrade ostaviti prazne to znaci da ćemo dobiti samo callback bez podatka
  onClose: () => void;
  onSuccess?: () => void;
};

const Modal = ({ children, title, isOpen, onClose, onSuccess }: ModalProps) => {
  useEffect(() => {
    const bodyElement = document.getElementsByTagName(
      "body"
    )[0] as HTMLBodyElement;
    //nakon što smo dohvatili body element provjeravamo ako je isOpen true onda scroll sakrivamo, a ako nije micemo ga
    if (isOpen) {
      bodyElement.style.overflow = "hidden";
    } else {
      bodyElement.style.overflow = "auto";
    }
    //Svaki puta kad se isOpen prop promjeni nama će se useEffect ponovo okinuti
  }, [isOpen]);

  return (
    <>
      {/* Provjeravamo ako je isOpen true onda nam renderiraj modal html ako ne nemoj prikazati ništa */}
      {isOpen && (
        <div>
          <div className="modal__overlay" onClick={() => onClose()}></div>
          <div className="modal">
            <div className="modal__header">
              <div className="modal__header__title">{title}</div>
              {/* Pošto ne prosljeđujemo nikakav podatak kroz callback možemo ga pisati skračeno bez arrow funkcije */}
              <IconClose className="modal__header__icon" onClick={onClose} />
            </div>
            <div className="modal__body">{children}</div>
            <div className="modal__footer">
              {/* Provjeravamo ako onSuccess postoji onda nam renderiraj Success 
                    button jer u suprotnom nam button ne treba ako nemamo akciju koja će 
                    se na njego klik odviti */}
              {onSuccess && <Button onClick={onSuccess} text="Ok" />}
              <Button text="Cancel" color="red" onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
