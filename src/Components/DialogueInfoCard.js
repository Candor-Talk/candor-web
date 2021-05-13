const DialogueInfoCard = ({dialogueMetaData}) => {
    return dialogueMetaData && (
      <div className="d-flex align-items-start flex-column" style={{ height: '100%' }}>
        <div>
          <p className="candor-bold">{dialogueMetaData.poster.displayName} / {dialogueMetaData.partner.displayName}</p>
          <p className="h2">{dialogueMetaData.caption}</p>
          <p className="font-weight-light">{dialogueMetaData.numberOfPosts} responses</p>
        </div>
        <div className="mt-auto">
          <img width={40} alt='Candor logo' src='../../images/CandorIcon.svg' />
        </div>
      </div>
    )
}

export default DialogueInfoCard;
