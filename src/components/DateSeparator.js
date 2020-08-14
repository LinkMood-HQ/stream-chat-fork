import React from 'react';
import styled from '@stream-io/styled-components';
import { themed } from '../styles/theme';
import PropTypes from 'prop-types';
import { withTranslationContext } from '../context';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20;
  margin-bottom: 20;
  ${({ theme }) => theme.messageList.dateSeparator.container.css}
`;

const DateText = styled.Text`
  margin-left: 5;
  margin-right: 5;
  text-align: center;
  font-size: 14;
  font-weight: 700;
  opacity: 1;
  color: rgba(99, 99, 99, 1);
  ${({ theme }) => theme.messageList.dateSeparator.dateText.css}
`;

const Date = styled.Text`
  font-weight: 700;
  font-size: 14;
  opacity: 1;
  color: rgba(99, 99, 99, 1);
  ${({ theme }) => theme.messageList.dateSeparator.date.css}
`;

/**
 * @extends PureComponent
 * @example ./docs/DateSeparator.md
 */

class DateSeparator extends React.PureComponent {
  static propTypes = {
    message: PropTypes.object.isRequired,
    /**
     * Formatter function for date object.
     *
     * @param date Date object of message
     * @returns string
     */
    formatDate: PropTypes.func,
  };

  static themePath = 'messageList.dateSeparator';

  render() {
    const { message, formatDate, tDateTimeParser } = this.props;

    return (
      <Container>
        {/* <Line /> */}
        <DateText>
          {formatDate ? (
            formatDate(message.date)
          ) : (
            <React.Fragment>
              <Date>
                {tDateTimeParser(message.date).calendar(null, {
                  lastDay: '[Yesterday]',
                  sameDay: '[Today]',
                  nextDay: '[Tomorrow]',
                  lastWeek: '[last] dddd',
                  nextWeek: 'dddd',
                  sameElse: 'L',
                })}
              </Date>
            </React.Fragment>
          )}
        </DateText>
        {/* <Line /> */}
      </Container>
    );
  }
}

const DateSeparatorWithContext = withTranslationContext(themed(DateSeparator));
export { DateSeparatorWithContext as DateSeparator };
