import StringLibrary from '../Libraries/StringLibrary.json';
import GooglePlayStoreButton from './GooglePlayStoreButton.js';
import AppleAppStoreButton from './AppleAppStoreButton.js';

const library = StringLibrary.DownloadPrompt;

const DownloadPrompt = () => {
    return (
        <div>
          <p className="h2">{library.joinConversation}</p>
          <p className="font-weight-light">{library.downloadPrompt}</p>
          <AppleAppStoreButton width={138}></AppleAppStoreButton>
          <GooglePlayStoreButton width={180}></GooglePlayStoreButton>
        </div>
    )
}

export default DownloadPrompt;
