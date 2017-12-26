import React from 'react';
import './SearchBar.css';

let sortByOptions = {
    bestMatch: 'best_match',
    highestRated: 'rating',
    mostReviewed: 'review_count'
};

class SearchBar extends React.Component {
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
        return (<li key={sortByOptionValue}>{sortByOption}</li>);
        });
    };
    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {SearchBar.renderSortByOptions}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where to?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Lets Go</a>
                </div>
            </div>
        );
    };
};

export default SearchBar;
