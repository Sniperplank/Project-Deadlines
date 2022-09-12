import React from 'react'
import ReactDOM from 'react-dom'
import { ModalContent } from '../Styled MUI components/ModalContent'
import { ModalOverlay } from '../Styled MUI components/ModalOverlay'
import MobileMenu from './MobileMenu'

function MenuModal({ open, onClose, logout }) {
    if (!open) return null
    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClick={onClose} />
            <ModalContent>
                <MobileMenu logout={logout} onClose={onClose}/>
            </ModalContent>
        </>,
        document.getElementById('portal')
    )
}

export default MenuModal