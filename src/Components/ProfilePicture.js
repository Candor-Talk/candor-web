const ProfilePicture = (props) => {
    if (props.photoUrl) {
        return (
            <img className="user-profile-image" src={props.photoUrl} />
        )
    } else {
        return (
            <img className="user-profile-image" src={'../../images/BackUpProfilePhoto.svg'} />
        )
    }
}

export default ProfilePicture;
