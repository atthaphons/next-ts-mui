import React from 'react';

interface SearchCriteriaDropdownProps {
    criteria: string[];
    selectedCriteria: string;
    onCriteriaChange: (criteria: string) => void;
}

const SearchCriteriaDropdown: React.FC<SearchCriteriaDropdownProps> = ({ criteria, selectedCriteria, onCriteriaChange }) => {
    return (
        <select value={selectedCriteria} onChange={(e) => onCriteriaChange(e.target.value)}>
            {criteria.map((criterion) => (
                <option key={criterion} value={criterion}>
                    {criterion}
                </option>
            ))}
        </select>
    );
};

export default SearchCriteriaDropdown;
