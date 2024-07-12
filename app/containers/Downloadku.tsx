"use client"
import React from 'react';
import { CSSProperties } from 'react';
import { PiDownloadSimple } from 'react-icons/pi';

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

const buttonStyle: CSSProperties = {
  display: 'inline-block',
//   padding: '5px 10px',
  fontSize: '16px',
  color: '#000',
//   backgroundColor: '#fff',
  border: 'none',
//   borderRadius: '10px',
  textDecoration: 'none',
  textAlign: 'center',
  transition: 'background-color 0.3s ease, transform 0.3s ease',
};

const buttonHoverStyle: CSSProperties = {
//   backgroundColor: '#0A6847',
  transform: 'scale(1.4)',
};

const buttonActiveStyle: CSSProperties = {
  transform: 'scale(0.95)',
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileUrl, fileName }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <a
      href={fileUrl}
      download={fileName}
      style={{
        ...buttonStyle,
        ...(isHovered ? buttonHoverStyle : {}),
        ...(isActive ? buttonActiveStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      <PiDownloadSimple size={28} />
    </a>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}
    data-aos="fade-up"
    data-aos-duration="1000"
    className='fixed bottom-8 right-8 rounded-full border px-1.5 py-1 bg-white  border-black'>
      <DownloadButton fileUrl="/public/others/Weapmath.apk" fileName="weapmath.apk" />
    </div>
  );
};

export default App;
