import React from 'react';
import ResultAsideSection from '../result-aside-section/ResultAsideSection';
import WritingAsideSection from '../writting-aside-section/WritingAsideSection';
import WritingSecondSection from '../writing-second-section/WritingSecondSection';
import ResultSecondSection from '../result-second-section/ResultSecondSection';

const GetStartedSection = () => {
    return (
        <div>
            <div className='flex-none lg:flex justify-between items-center py-[100px] md:py-[175px]'>
                <div className='my-8 lg:my-0'>
                    <ResultAsideSection></ResultAsideSection>
                </div>
                <div>
                    <WritingAsideSection></WritingAsideSection>
                </div>
            </div>
            <div className='flex-none lg:flex justify-between items-center'>
                <div className='my-8 lg:my-0'>
                    <WritingSecondSection></WritingSecondSection>
                </div>
                <div>
                    <ResultSecondSection></ResultSecondSection>
                </div>
            </div>
        </div>
    );
};

export default GetStartedSection;