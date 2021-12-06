import React from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function EditAvatarPopup(props) {

    const { isOpen, onClose, onUpdateAvatar } = props;

    // Subscription to the context
    const currentUser = React.useContext(CurrentUserContext);
    const avatarUrlInput = React.useRef();
    // After loading the current user from the API
    // their data will be used in managed components.
    React.useEffect(() => {
        if (isOpen)
            avatarUrlInput.current.value = currentUser.avatar;
    }, [currentUser, isOpen]);

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarUrlInput.current.value,
        });
    }

    return (
        <PopupWithForm name="edit-avatar" title="Change profile picture" btnSubmitTitle="Save" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} validate={true}>
            <label className="popup__field">
                <input ref={avatarUrlInput} placeholder="Image link" id="avatar-input" className="popup__item popup__item_type_avatar"
                    name="image" type="url" required />
                <span className="popup__item-error avatar-input-error"></span>
            </label>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;