import React, { useState } from 'react';
import Reservation from '../Reservation';
import Reservationn from '../Reservationn';
import TravelCard from '../TravelCard';
// import Login from '../Login';
import SocialMedias from '../../components/SocialMedias';
import style from './main.module.css';
import { IoIosBus } from 'react-icons/io';
// before import IoIosBed
import { FaRegCalendarAlt } from 'react-icons/fa';
import { DateRangePicker } from 'react-dates';
import { BsPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Dropdown from '../../components/Dropdown';
import { MenuItem, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { staysSearchData } from '../../redux/Stays/action';
import moment from 'moment';
import Calendar from 'react-calendar';

// solved using moment

export default function Main(props) {
	// const mapStateToProps = (state) => ({
	// 	isRegister: state.register.isRegister,
	// 	r_message: state.register.message,
	// 	r_isAuth: state.register.isAuth,
	// 	r_userEmail: state.register.userEmail,
	// 	r_userToken: state.register.userToken,
	// 	r_userData: state.register.userData,
	// 	r_userName: state.register.userName,

	// 	isLogin: state.login.isLogin,
	// 	l_message: state.login.message,
	// 	l_isAuth: state.login.isAuth,
	// 	l_userEmail: state.login.userEmail,
	// 	l_userToken: state.login.userToken,
	// 	l_userData: state.login.userData,
	// 	l_userName: state.login.userName,

	// 	message: state.login.message,

	// 	staysSearchData: state.staysSearch.staysSearchData,
	// 	isSearch: state.staysSearch.isSearch,
	// });

	// const mapDispatchToProps = (dispatch) => ({
	// 	staysSearchData: (payload) => dispatch(staysSearchData(payload)),
	// });

	const currencies = [
		{
			value: 'AB',
			label: '1',
		},
		{
			value: 'CD',
			label: '2',
		},
		{
			value: 'EF',
			label: '3',
		},
		{
			value: 'GH',
			label: '4',
		},
		{
			value: 'JPY',
			label: '5',
		},
		{
			value: 'JPYY',
			label: '6',
		},
	];

	const [currency, setCurrency] = React.useState('EUR');

	const handleChangeCur = (event) => {
		setCurrency(event.target.value);
	};

	const [state, setState] = useState({
		city: '',
		checkin: '',
		checkout: '',
		num_adults: 1,
		num_child: 0,
		num_rooms: 1,
		checkin_date: '',
		checkin_month: '',
		checkin_year: '',
		checkout_date: '',
		checkout_month: '',
		checkout_year: '',
		startDatee: '',
		endDatee: '',
		modalVisible: false,
		isProfile: false,
	});

	const [depart, setDepart] = useState('');
	const [arriving, setArriving] = useState('');
	const [cities, setCities] = useState([
		{ label: 'Tunis', value: 'Tunis' },
		{ label: 'Athènes', value: 'Athènes' },
		{ label: 'Corfou', value: 'Corfou' },
		{ label: 'Rhodes', value: 'Rhodes' },
		{ label: 'Thessalonique', value: 'Thessalonique' },
		{ label: 'Heraklion', value: 'Heraklion' },
	]);
	const [departDate, setDepartDate] = useState();
	const [arrivingDate, setArrivingDate] = useState();

	const handleChange = (e) => {
		setState({
            ...state,
			[e.target.name]: e.target.value,
		});
	};

	const handleAdultIncrement = () => {
		setState({
            ...state,
			num_adults: state.num_adults + 1,
		});
	};
	const handleAdultDecrement = () => {
		const num_adults = state.num_adults;
		console.log(num_adults, 'dec');
		if (num_adults > 1) {
			setState({
                ...state,
				num_adults: state.num_adults - 1,
			});
		}
	};
	const handleChildIncrement = () => {
		setState({
            ...state,
			num_child: state.num_child + 1,
		});
	};

	const handleChildDecrement = () => {
		const num_child = state.num_child;
		if (num_child > 0) {
			setState({
                ...state,
				num_child: state.num_child - 1,
			});
		}
	};

	const handleRoomIncrement = () => {
		setState({
            ...state,
			num_rooms: state.num_rooms + 1,
		});
	};

	const handleRoomDecrement = () => {
		const num_rooms = state.num_rooms;
		if (num_rooms > 1) {
			setState({
                ...state,
				num_rooms: state.num_rooms - 1,
			});
		}
	};

    console.log(state)
	return (
		<div>
			<center>
				<div
					className="p-col-5"
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						flex: '1',
						width: '100vw',
						flexDirection: 'column',
						backgroundColor: '#003580',
						marginBottom: '20px',
					}}
				>
					<p style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>
						Nos transports depuis les aéroports
					</p>
					<p style={{ textAlign: 'center', fontSize: 15, color: 'white' }}>
						Fini le taxi plus cher que l'avion
					</p>
				</div>

				<div className={`${style.flexRowInput}`}>
					<div className="input-group">
						<div className="input-group-prepend">
							<button
								className="btn btn-outline-secondary px-3 py-1 bg-light border-dark"
								type="button"
								id="button-addon1"
							>
								<IoIosBus size="1.4em" />
								{/* before it was bed */}
							</button>
							{/* {isProfile && <ProfileDetails />} */}
						</div>
						{/* <Autocomplete
                                            className={`form-control ${style.bed}`}
                                            aria-label="Example text with button addon"
                                            aria-describedby="button-addon1"
                                            // style={{width: '90%'}}
                                            placeholder="Where are you going?"
                                            onPlaceSelected={(place) => {
                                              console.log(place)
                                              this.setState({
                                                  city:"Bangalore"
                                              })
                                            }}
                                            types={['(regions)']}
                                            componentRestrictions={{country: "in"}}
                                        /> */}
						{/* <input type="text" className={`form-control ${style.bed}`}
                        placeholder="Où allez-vous ?"
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                        value={state.city} name="city" onChange={handleChange}
                    /> */}
						<Dropdown
							aria-describedby="button-addon1"
							aria-label="Example text with button addon"
							className={`form-control ${style.bed}`}
							value={depart}
							options={cities}
							onChange={(e) => setDepart(e.value)}
							optionLabel="label"
							filter
							filterBy="label"
							placeholder="Aéroport ?"
						/>
						{/* <Dropdown aria-describedby="button-addon1" aria-label="Example text with button addon" className={`form-control ${style.bed}`} value={depart} options={cities} onChange={(e) => setDepart(e.value)} optionLabel="label" filter filterBy="label" placeholder="Hotel ?" /> */}
					</div>

					{/* OKKKKK */}
					<div className="input-group justify-content-center">
						<div className="input-group-prepend">
							<button
								className="btn btn-outline-secondary px-3 bg-light"
								type="button"
								id="button-addon1"
							>
								<FaRegCalendarAlt className="mb-0" size="1.2em" />
							</button>
						</div>
						{/* <Calendar onChange={onChangeDate} value={date} ></Calendar> */}
						<DateRangePicker
							className={`form-control ${style.calendar}`}
							startDate={state.startDatee}
							startDateId="your_unique_start_date_id" // your_unique_start_id
							endDate={state.endDatee}
							endDateId="your_unique_end_date_id" // your_unique_end_id
							onDatesChange={({ startDate, endDate }) => {
								console.log(startDate);
								let cal_checkin = String(moment(startDate).format('dddd')).split(' ');
								let cal_checkout = String(moment(endDate).format('dddd')).split(' ');
								setState({
									...state,
									startDatee: startDate,
									endDatee: endDate,
									checkin_date: cal_checkin[2],
									checkin_month: cal_checkin[1],
									checkin_year: cal_checkin[3],
									checkout_date: cal_checkout[2],
									checkout_month: cal_checkout[1],
									checkout_year: cal_checkout[3],
									city: 'bammmm',
								});
							}}
							focusedInput={state.focusedInput}
							onFocusChange={(focusedInput) => setState({ ...state, focusedInput: focusedInput })}
							startDatePlaceholderText="ALLER-"
							endDatePlaceholderText="RETOUR"
						></DateRangePicker>
					</div>
					<div className="input-group">
						<div className="input-group-prepend">
							<button
								className="btn btn-outline-secondary px-3 bg-light"
								type="button"
								id="button-addon1"
							>
								<BsPersonFill size="1.5em" />
							</button>
						</div>

						{/* <button type="button" class="btn btn-primary" data-toggle="modal"
                        data-target="#exampleModal" className={`form-control ${style.user}`}>

                            {state.num_adults} adulte
                    </button> */}
						<TextField
							id="standard-select-currency"
							select
							label="Nombre"
							variant="outlined"
							className={`form-control ${style.user}`}
							style={{ backgroundColor: 'white' }}
							value={currency}
							onChange={handleChangeCur}
							helperText="Nombre de personnes"
							fullWidth
						>
							{currencies.map((option) => (
								<MenuItem key={option.value} value={option.value}>
									{option.label}
								</MenuItem>
							))}
						</TextField>

						{/* <div class="modal fade md-5 mt-5" id="exampleModal" tabindex="-10" role="dialog"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered mt-5 mr-5 " role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5>Adultes</h5>
                                    <div class="modal-footer md-5">
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleAdultDecrement}>-
                                                            </button>
                                        {state.num_adults}
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleAdultIncrement}>+
                                                            </button>
                                    </div>
                                </div>
                                <div class="modal-header">
                                    <h5>Enfants</h5>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleChildDecrement}>-
                                                            </button>
                                        {state.num_child}
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleChildIncrement}>+
                                                            </button>
                                    </div>
                                </div>
                                <div class="modal-header">
                                    <h5>Chambres</h5>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleRoomDecrement}>-
                                                            </button>
                                        {state.num_rooms}
                                        <button type="button" class="btn btn-primary"
                                            onClick={handleRoomIncrement}>+
                                                            </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
						{/* <input type="text" className={`form-control ${style.user}`} placeholder=".."
                                        <input type="text" className={`form-control ${style.user}`} placeholder="No. of Persons"
                                               aria-label="Example text with button addon"
                                               aria-describedby="button-addon1"
                                               value={this.state.num_rooms} name="num_rooms"
                                               onChange={this.handleChange}
                                        /> */}
					</div>
					<Link
						to={
							!state.city
								? `/reservation`
								: `/stays/search_results?city=${state.city}&checkin_date=${state.checkin_date}&checkin_month=${state.checkin_month}&checkin_year=${state.checkin_year}&checkout_date=${state.checkout_date}&checkout_month=${state.checkout_month}&checkout_year=${state.checkout_year}&num_adults=${state.num_adults}&num_child=${state.num_child}&num_rooms=${state.num_rooms}&page=1`
						}
					>
						<button className={`${style.searchBtn} ml-1 my-auto`}>GO</button>
					</Link>
				</div>
			</center>

			<div className="p-d-flex">
				<div
					className="p-col-5"
					style={{
						justifyContent: 'center',
						alignItems: 'center',
						display: 'flex',
						flexDirection: 'column',
						marginTop: '-500px',
					}}
				>
					<Reservationn />
					<div style={{ marginBottom: 20 }}></div>
					<SocialMedias />
				</div>
				<div className="p-col-7">
					<div style={{ marginBottom: 30 }}>
						<TravelCard title={'Athènes'} />
					</div>
					<div style={{ marginBottom: 30 }}>
						<TravelCard title={'Heraklion'} />
					</div>
					<div style={{ marginBottom: 30 }}>
						<TravelCard title={'Rhodes'} />
					</div>
					<div style={{ marginBottom: 30 }}>
						<TravelCard title={'Corfou'} />
					</div>
					<div style={{ marginBottom: 30 }}>
						<TravelCard title={'Thessalonique'} />
					</div>
				</div>
			</div>
		</div>
	);
}
