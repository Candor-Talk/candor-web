import ProfilePicture from './ProfilePicture.js'

const DialogueInfoCard = (props) => {
  if (props.dialogueMetaData) {
    return (
      <div className="d-flex align-items-start flex-column" style={{height: '100%'}}>
          <div>
            <p className="candor-bold"><ProfilePicture photoUrl={props.dialogueMetaData.poster.photoUrl} /> &nbsp; {props.dialogueMetaData.poster.displayName} / {props.dialogueMetaData.partner.displayName} &nbsp; <ProfilePicture photoUrl={props.dialogueMetaData.partner.photoUrl} /></p>
            <p className="h2">{props.dialogueMetaData.caption}</p>
            <p className="font-weight-light">{props.dialogueMetaData.numberOfPosts} responses</p>
          </div>
          <div className="mt-auto">
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
