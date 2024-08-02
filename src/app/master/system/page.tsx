"use client";
import React, { useState } from 'react'
import SearchCriteriaSection from '@/app/components/search.criteria.section';
import { SearchCriteria } from '@/interface/system';
import { initTextBoxForm } from '@/data/common';
import CriteriaSection from './criteria';
import Result from './result';
import MaintainActionButton from '../supplier/maintain.action.button';
import { MODE } from '@/app/utils/constants';
import { useTranslation } from 'react-i18next';

const SystemPage: React.FC = () => {
    const { t } = useTranslation();
    function doSearch() {
        console.log("do search");
    }
    function doClear() {
        console.log("do clear");
    }

    const [criteria, setCriteria] = useState<SearchCriteria>({
        category: initTextBoxForm,
        subCategory: initTextBoxForm,
    });
    const [errorMessage, setErrorMessage] = useState<string[]>([]);
    const [mode, setMode] = useState<string>(MODE.INITIAL);

    return (
        <>
            <SearchCriteriaSection
                textHeader={t('searchCriteria')}
                layoutDetails={
                    <CriteriaSection
                        criteria={criteria}
                        setCriteria={setCriteria}
                        setErrorMessage={setErrorMessage}
                    />
                }
                errorMessage={errorMessage}
                actionSearch={doSearch}
                actionClear={doClear}
            />
            <MaintainActionButton mode={mode} setMode={setMode} />
            <Result />
        </>
    );
};
export default SystemPage

