import React, { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { setAlert } from "../store/actions/alertActions";
import { getWeather, setLoading } from '../store/actions/weatherActions';

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
    const dispatch = useDispatch();
    const [city, setCity] =useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLInputElement>) => {
        e.preventDefault();

        if(city.trim() === '') {
            return dispatch(setAlert('City is required!'));
        }

        dispatch(setLoading());
        dispatch(getWeather(city));
        setCity('');
    }
    return(
        <div className="hero is-light has-text-centered">
            <div className="hero-body">
                <div className="Container">
                    <h1 className="title">{title}</h1>
                    <form className="py-5">
                        <input
                            type="text"
                            className="input has-text-centered mb-2"
                            placeholder="Enter city name"
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                        />
                        <button className="button is-primary is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;