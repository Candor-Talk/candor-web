import ProfilePicture from './ProfilePicture.js'

const DialogueInfoCard = ({dialogueMetaData}) => {
  if (dialogueMetaData) {
    return (
      <div className="d-flex align-items-start flex-column h-100">
          <div>
            <p className="candor-bold"><ProfilePicture photoUrl={dialogueMetaData.poster.photoUrl} /> &nbsp; {dialogueMetaData.poster.displayName} / {dialogueMetaData.partner.displayName} &nbsp; <ProfilePicture photoUrl={dialogueMetaData.partner.photoUrl} /></p>
            <p className="h2">{dialogueMetaData.caption}</p>
            <p className="font-weight-light">{dialogueMetaData.numberOfPosts} responses</p>
          </div>
          <div className="mt-auto d-none d-sm-block">
            <img width={40} alt='Candor logo' src='../../images/CandorIcon.svg'/>
          </div>
      </div>
  )
  } else {
    return (
      <div></div>
    )
  }
}

export default DialogueInfoCard;
