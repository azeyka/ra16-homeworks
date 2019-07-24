import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CalendarMod from '../modules/CalendarMod'

export default class Calendar extends Component {
    static propTypes = {
        date: PropTypes.instanceOf(Date).isRequired
    };

    render() {
        const {date} = this.props,
        calendar = CalendarMod(date),
        weekdays = [
            'Воскресенье',
            'Понедельник',
            'Вторник',
            'Среда',
            'Четверг',
            'Пятница',
            'Суббота',
        ],
        monthes = {
            'nominative': [
                            'Январь',
                            'Февраль',
                            'Март',
                            'Апрель',
                            'Май',
                            'Июнь',
                            'Июль',
                            'Август',
                            'Сентябрь',
                            'Окрябрь',
                            'Ноябрь',
                            'Декабрь',
                        ],
            'genitive': [
                            'Января',
                            'Февраля',
                            'Марта',
                            'Апреля',
                            'Мая',
                            'Июня',
                            'Июля',
                            'Августа',
                            'Сентября',
                            'Окрября',
                            'Ноября',
                            'Декабря',
                        ]
        };
    
        return (
            <div className="ui-datepicker">
                <div className="ui-datepicker-material-header">
                    <div className="ui-datepicker-material-day">{weekdays[date.getDay()]}</div>
                    <div className="ui-datepicker-material-date">
                    <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
                    <div className="ui-datepicker-material-month">{monthes['genitive'][date.getMonth()]}</div>
                    <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
                    </div>
                </div>
                <div className="ui-datepicker-header">
                    <div className="ui-datepicker-title">
                        <span className="ui-datepicker-month">{monthes['nominative'][date.getMonth()]}</span>&nbsp;
                        <span className="ui-datepicker-year">{date.getFullYear()}</span>
                    </div>
                </div>
                <table className="ui-datepicker-calendar">
                    <colgroup>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                        <col/>
                        <col className="ui-datepicker-week-end"/>
                        <col className="ui-datepicker-week-end"/>
                    </colgroup>
                    <thead>
                    <tr>
                        <th scope="col" title="Понедельник">Пн</th>
                        <th scope="col" title="Вторник">Вт</th>
                        <th scope="col" title="Среда">Ср</th>
                        <th scope="col" title="Четверг">Чт</th>
                        <th scope="col" title="Пятница">Пт</th>
                        <th scope="col" title="Суббота">Сб</th>
                        <th scope="col" title="Воскресенье">Вс</th>
                    </tr>
                    </thead>
                    <tbody>
                    {calendar.map(currWeek => {
                        return (
                            <tr key={currWeek[0].getFullYear()-currWeek[0].getMonth()-currWeek[0].getDate()}>
                                {
                                    currWeek.map(currDate => {
                                        return (
                                            <td key={currDate.getDate()-currDate.getMonth()-currDate.getFullYear()}
                                                className={
                                                    currDate.getMonth() === date.getMonth() ? 
                                                        currDate.getDate() === date.getDate() ? "ui-datepicker-today" : "" : "ui-datepicker-other-month"}
                                                >
                                                {currDate.getDate()}
                                            </td>
                                        );
                                    })
                                } 
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        )
    };
};