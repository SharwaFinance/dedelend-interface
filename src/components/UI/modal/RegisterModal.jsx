import React from 'react';
import Modal from './Modal';
import { useState } from 'react';
import Button from '../button/Button';

const RegisterModal = ({ visible, setVisible, onClick }) => {
	
	return (
		<Modal isObligatory={true} visible={visible} setVisible={setVisible} className="modal_register">
			<h1 className='modal__title'>You need to register</h1>
			<div className="modal__body">
				<div className="modal__text">
					<p>DeDeLend will create a smart contract for your address. All trades will be opened and closed via the smart contract.</p>
					<p>After the registration you'll receive ERC-721 tokens, each token is a representation of your position on GMX:</p>
					<div className="text-cols">
						<div className="text-col">
							<p>ETH — short</p>
							<p>ETH — long</p>
						</div>
						<div className="text-col">
							<p>BTC — short</p>
							<p>BTC — long</p>
						</div>
						<div className="text-col">
							<p>UNI — short</p>
							<p>UNI — long</p>
						</div>
						<div className="text-col">
							<p>LINK — short</p>
							<p>LINK — long</p>
						</div>
					</div>
					<p>The ERC tokens allow open/close positions on GMX. Since all position on GMX is tokenized you can use them as collateral on DeDeLend.</p>
				</div>
				
				<Button btnActive={true} onClick={onClick}>Register</Button>
			</div>
		</Modal>
	);
};

export default RegisterModal;