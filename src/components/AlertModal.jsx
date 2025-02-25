import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const AlertModal = () => {
	const [modalState, setModalState] = useState(true);

	const clickHandler = () => {
		setModalState(false);
	};

	const popupStyle = modalState ? { display: 'block' } : { display: 'none' };

	return (
		<section
			className='popup'
			style={popupStyle}
		>
			<div className='popup__container pulsate-bck'>
				<div className='popup__content'>
					<h2 className='popup__title'>Erreur de Connexion</h2>
					<p className='popup__text'>
						Il semble que votre connexion Internet ait échoué. En attendant le rétablissement de
						votre connexion, des données de démonstration vous seront affichées.
					</p>
				</div>
				<FontAwesomeIcon
					icon={faXmark}
					className='popup__close'
					onClick={clickHandler}
				/>
			</div>
		</section>
	);
};
