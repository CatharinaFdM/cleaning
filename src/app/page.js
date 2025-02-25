import React from 'react';
import Header from "./components/Header";
import LoginForm from './components/LoginForm';
import BookingForm from './components/BookingForm';
import RoomDropdown from './components/RoomDropdown';
import Legend from './components/Legend';
import Button from './components/Button';
import CleaningDone from './components/CleaningDone';
import BookingSlot from './components/BookingSlot';



export default function () {
	return (<div>
			<Header/>
			<h1>Frontpage</h1>
			{/* <LoginForm/> */}
			{/* <BookingForm/> */}
			{/* <RoomDropdown/> */}
			{/* <Button label="Insert button text here"/> */}
			{/* <CleaningDone/> */}
			{/* <Legend/> */}
			<BookingSlot/>
			</div>
	);
}





