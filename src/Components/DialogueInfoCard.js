const DialogueInfoCard = () => {
    return (
        <div className="d-flex align-items-start flex-column" style={{height: '100%'}}>
            <div>
              <p className="candor-bold">Coleman H / Glenn L</p>
              <p className="h2">Why hasn't Canada developed their own COVID-19 vaccine?</p>
              <p className="font-weight-light">7 responses</p>
            </div>
            <div className="mt-auto">
              <img width={40} alt='Candor logo' src='./images/CandorIcon.svg'/>
            </div>
        </div>
    )
}

export default DialogueInfoCard
