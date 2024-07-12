// Import necessary modules
import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { PiDownloadSimple } from 'react-icons/pi';

// Main App component
const App: React.FC = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}  data-aos="fade-up"
        data-aos-duration="500"
        className='fixed bottom-8 right-8 rounded-full border p-1 bg-white border-black'>
            <Link href="https://drive.google.com/uc?export=download&id=1F3Q8YMo6ZC5LUBNBiI_9VetTTfW_y2Vs">
                <PiDownloadSimple size={28} />
            </Link>
        </div>
    );
};

export default App;
