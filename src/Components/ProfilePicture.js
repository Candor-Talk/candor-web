const ProfilePicture = ({photoUrl}) => {
    if (photoUrl) {
        return (
            <img className="user-profile-image" src={photoUrl} />
        )
    } else {
        return (
            <img className="user-profile-image" src={'../../images/BackUpProfilePhoto.svg'} />
        )
    }
}

export default ProfilePicture;
