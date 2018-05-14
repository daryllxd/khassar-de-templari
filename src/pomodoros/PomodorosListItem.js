import React, {Component} from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import PomodorosListItemActivityTags from 'pomodoros/PomodorosListItemActivityTags';

export default class PomodorosListItem extends Component {
  showDate = (startedAt, duration) => {
    let startDate = dayjs(startedAt);
    let endDate = dayjs(startedAt).add(duration, 'minutes');
    let format = 'h:mm A'

    return `${startDate.format(format)}-${endDate.format(format)}`;
  }

  render() {
    const {pomodoro} = this.props;
    return (
      <tr>
        <td>
          <p>{pomodoro.description}</p>
        </td>
        <td>{ this.showDate(pomodoro.started_at, pomodoro.duration)}</td>
        <td>{ pomodoro.duration }</td>
        <td>{ pomodoro.activity_tags.map ( (tag) => <PomodorosListItemActivityTags key={`${pomodoro.id}-${tag.name}`} activity_tag={tag} /> ) }</td>
      </tr>
    );
  }
}
