import React from "react";
import _ from "lodash/fp";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import storeDevice from "../storeDevice";


export default function App() {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        console.log(JSON.stringify(data));
    };


    return (
        <form onSubmit={handleSubmit(storeDevice)}>

        </form>
    );
}