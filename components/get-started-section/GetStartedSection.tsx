import React from 'react';
import ResultAsideSection from '../result-aside-section/ResultAsideSection';
import WritingAsideSection from '../writting-aside-section/WritingAsideSection';

const GetStartedSection = () => {
    return (
        <div className='flex justify-between items-center py-[175px]'>
            <div>
                <ResultAsideSection></ResultAsideSection>
            </div>
            <div>
                <WritingAsideSection></WritingAsideSection>
            </div>
        </div>
    );
};

export default GetStartedSection;