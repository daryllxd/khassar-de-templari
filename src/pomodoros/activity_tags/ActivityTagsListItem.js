import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatDateRange} from 'utilities/DateFormats';

export default class ActivityTagsListItem extends Component {
  render() {
    const {activityTag} = this.props;
    return (
      <tr>
        <td>
          <p>{activityTag.name}</p>
        </td>
        <td>{activityTag.shortcut}</td>
      </tr>
    );
  }
}
