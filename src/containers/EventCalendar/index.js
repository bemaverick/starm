/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { FlatList , ScrollView, Text, View, TouchableOpacity, Button } from 'react-native';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

import { HeaderC, ButtonC, IconC, EventItem } from './../../components';

import { Colors } from './../../constants';
import styles from './styles';

export default class EventCalendar extends Component<Props> {

  // constructor(props) {
  //   super(props);
  //
  //   const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
  //   const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
  //   const workout = {key:'workout', color: 'green'};
  //
  //   this.state = {
  //     date: {
  //       '2018-10-25': {dots: [vacation, massage, workout], selected: true, selectedColor: 'red'},
  //       '2018-10-26': {dots: [massage, workout], disabled: true},
  //     }
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    console.log(date)
    this.setState({
      selectedStartDate: date,
    });
  }

  // renderHeader = () => (
  //   <View style={styles.headerWrap}>
  //     <ButtonC
  //       icon={<IconC type="FA5" name="calendar-plus" size={20} />}
  //       title="add Event"
  //     />
  //   </View>
  // )
  componentDidMount() {}

  render() {

    let today = moment();
    console.log(today)
    let day = today.clone().startOf('month');
    console.log(day)

    let customDatesStyles = [];
    while(day.add(1, 'day').isSame(today, 'month')) {
      customDatesStyles.push({
        date: day.clone(),
        // Random colors
        style: {backgroundColor: '#'+('#00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6)},
        textStyle: {color: 'black'}, // sets the font color
        //containerStyle: [], // extra styling for day container
      });
    }
    console.log(customDatesStyles)
    const { navigation } = this.props;

    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(); // Today
    const maxDate = new Date(2017, 6, 3);
    const startDate  =  selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <HeaderC
          backgroundColor={Colors.darkRed}
          title="Arm Calendar"
          leftIcon="back"
          leftIconAction={() => navigation.goBack()}

        />
        <View style={{backgroundColor: 'white'}}>
          <CalendarPicker
            startFromMonday
            previousTitle="<"
            nextTitle=">"
            selectedDayColor={Colors.darkRed}
            onDateChange={this.onDateChange}
            selectedDayTextColor="#FFFFFF"

            customDatesStyles={customDatesStyles}
            minDate={today}
          />
        </View>


        <View>
          <Text style={{color: 'white'}}>SELECTED DATE:{ startDate }</Text>
        </View>
        {/*<Calendar*/}
          {/*// Initially visible month. Default = Date()*/}
          {/*markedDates={{*/}
            {/*'2018-12-16': {selected: true, marked: true, selectedColor: 'blue'},*/}
            {/*'2012-05-17': {marked: true},*/}
            {/*'2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},*/}
            {/*'2012-05-19': {disabled: true, disableTouchEvent: true}*/}
          {/*}}*/}
          {/*//current={'2018-12-01'}*/}
          {/*// Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined*/}
          {/*minDate={'2012-05-10'}*/}
          {/*// Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined*/}
          {/*maxDate={'2012-05-30'}*/}

          {/*// onDayPress={({ dateString }) => {*/}
          {/*//   alert()*/}
          {/*//   const dateObj = _.cloneDeep(this.state.date);*/}
          {/*//   Object.entries(dateObj).forEach(x => x[1].selected = false);*/}
          {/*//   const obj = Object.entries(this.state.date).find(x => x[0] === dateString) || [dateString, { }];*/}
          {/*//   obj[1].selected = true;*/}
          {/*//*/}
          {/*//   console.log('DEBUG::this.state.date', this.state.date);*/}
          {/*//   this.setState({ date: { ...dateObj, [obj[0]]: { ...obj[1] }  }});*/}
          {/*// }}*/}
          {/*// Handler which gets executed on day press. Default = undefined*/}
          {/*onDayPress={(day) => {alert(day)}}*/}
          {/*// Handler which gets executed on day long press. Default = undefined*/}
      {/*//    onDayLongPress={(day) => {console.log('selected day long', day)}}*/}
          {/*// Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting*/}
          {/*monthFormat={'MM yyyy'}*/}
          {/*// Handler which gets executed when visible month changes in calendar. Default = undefined*/}
          {/*onMonthChange={(month) => {console.log('month changed', month)}}*/}
          {/*// Hide month navigation arrows. Default = false*/}
          {/*hideArrows={false}*/}
          {/*// Replace default arrows with custom ones (direction can be 'left' or 'right')*/}
         {/*// renderArrow={(direction) => (<IconC  />)}*/}
          {/*// Do not show days of other months in month page. Default = false*/}
          {/*hideExtraDays={true}*/}
          {/*// If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out*/}
          {/*// day from another month that is visible in calendar page. Default = false*/}
          {/*disableMonthChange={false}*/}
          {/*// If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.*/}
          {/*firstDay={1}*/}
          {/*// Hide day names. Default = false*/}
          {/*hideDayNames={true}*/}
          {/*// Show week numbers to the left. Default = false*/}
          {/*showWeekNumbers={false}*/}
          {/*// Handler which gets executed when press arrow icon left. It receive a callback can go back month*/}
          {/*onPressArrowLeft={substractMonth => substractMonth()}*/}
          {/*// Handler which gets executed when press arrow icon left. It receive a callback can go next month*/}
          {/*onPressArrowRight={addMonth => addMonth()}*/}

          {/*style={{*/}
            {/*borderWidth: 1,*/}
            {/*borderColor: 'gray',*/}
            {/*height: 350*/}
          {/*}}*/}
          {/*// Specify theme properties to override specific styles for calendar parts. Default = {}*/}
          {/*theme={{*/}
            {/*backgroundColor: '#ffffff',*/}
            {/*calendarBackground: '#ffffff',*/}
            {/*textSectionTitleColor: '#b6c1cd',*/}
            {/*selectedDayBackgroundColor: '#00adf5',*/}
            {/*selectedDayTextColor: '#ffffff',*/}
            {/*todayTextColor: '#00adf5',*/}
            {/*dayTextColor: '#2d4150',*/}
            {/*textDisabledColor: '#d9e1e8',*/}
            {/*dotColor: '#00adf5',*/}
            {/*selectedDotColor: '#ffffff',*/}
            {/*arrowColor: 'orange',*/}
            {/*monthTextColor: 'blue',*/}
            {/*// textDayFontFamily: 'monospace',*/}
            {/*// textMonthFontFamily: 'monospace',*/}
            {/*// textDayHeaderFontFamily: 'monospace',*/}
            {/*textMonthFontWeight: 'bold',*/}
            {/*textDayFontSize: 16,*/}
            {/*textMonthFontSize: 16,*/}
            {/*textDayHeaderFontSize: 16*/}
          {/*}}*/}
        {/*/>*/}


      </View>
    );
  }
}
