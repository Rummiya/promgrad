'use client';
import Form from '@/features/form/Form';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { TfiClose } from 'react-icons/tfi';
import scss from './ModalWindow.module.scss';

interface ModalWindowProps {
	active: boolean;
	setActive: (active: boolean) => void;
}

const ModalWindow = ({ active, setActive }: ModalWindowProps) => {
	useEffect(() => {
		if (active) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [active]);
	return (
		<AnimatePresence>
			{active && (
				<motion.div
					className={scss.modal}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					onClick={() => setActive(false)}
				>
					<motion.div
						className={scss.background}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						onClick={e => e.stopPropagation()}
					>
						<button className={scss.close} onClick={() => setActive(false)}>
							<TfiClose />
						</button>
						<div>
							<h1>ДАВАЙТЕ ОБСУДИМ ПРОЕКТ ПРЯМО СЕЙЧАС</h1>
							<h4>оставьте заявку и с вами свяжется наш спспециалист</h4>
						</div>
						<Form />
						{/* <div className={scss.contacts}>
              <input type="text" placeholder="Имя..." />
              <input type="tel" placeholder="Номер телефона..." />
              <button className={scss.submit} onClick={() => setActive(false)}>Оставить заявку</button>
            </div> */}
					</motion.div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ModalWindow;
