import React from 'react';
import PropTypes from 'prop-types';

export const UnorderedList = ({ itemList: initialList }) => {
    return initialList.map(item => <li>{item}</li>);
};

UnorderedList.propTypes = {
    itemList: PropTypes.array.isRequired
};