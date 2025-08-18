import '../styles/Hero.css'

function DownloadButton({ fileUrl, fileName, buttonText }) {
  return (
    <a href={fileUrl} download={fileName}>
      <button className='hero-btn'>{buttonText}</button>
    </a>
  );
}

export default DownloadButton;