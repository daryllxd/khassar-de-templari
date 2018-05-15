import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formatDateRange} from 'utilities/DateFormats';
import PomodorosListItemActivityTags from 'pomodoros/PomodorosListItemActivityTags';

export default class PomodorosListItem extends Component {
  render() {
    const {pomodoro} = this.props;
    return (
      <tr>
        <td>
          <p>{pomodoro.description}</p>
        </td>
        <td>{formatDateRange(pomodoro.started_at, pomodoro.duration)}</td>
        <td>{ pomodoro.duration }</td>
        <td>{ pomodoro.activity_tags.map ( (tag) => <PomodorosListItemActivityTags key={`${pomodoro.id}-${tag.name}`} activity_tag={tag} /> ) }</td>
      </tr>
    );
  }
}
