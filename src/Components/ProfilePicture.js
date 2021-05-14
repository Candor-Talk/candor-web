const ProfilePicture = ({photoUrl}) => {
    if (photoUrl) {
        return (
            <img className="user-profile-image" src={photoUrl} alt="UserPic" />
        )
    } else {
        return (
            <img className="user-profile-image" src={'../../images/BackUpProfilePhoto.svg'} alt="UserPic" />
        )
    }
}

export default ProfilePicture;
