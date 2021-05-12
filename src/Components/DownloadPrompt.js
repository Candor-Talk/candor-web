import StringLibrary from '../Libraries/StringLibrary.json';

const library = StringLibrary.DownloadPrompt;

const DownloadPrompt = () => {
    return (
        <div>
          <p className="h2">{library.joinConversation}</p>
          <p className="font-weight-light">{library.downloadPrompt}</p>
          <a href='https://play.google.com/store/apps/details?id=com.talkcandor&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
            <img width={180} alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
          </a>
          <a href='https://apps.apple.com/ca/app/candor-talk/id1552310457'>
            <img width={132} alt='Get it on the App Store' src='./images/AppleBadge.svg' />
          </a>
        </div>
    )
}

export default DownloadPrompt;
