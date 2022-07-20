import React, { useState, useEffect } from "react"
// import Autocomplete from '@material-ui/lab/Autocomplete'; //delete if needed
// import TextField from '@material-ui/core/TextField'
// import TextField from '@mui/material/TextField'
import { Autocomplete, TextField } from "@mui/material";
import './searchbar.css'
import { useHistory } from "react-router-dom";

function SearchBar() {
    const history = useHistory()
    const [jsonResults, setJsonResults] = useState([])
    const [test, setTest] = useState([])
    // const [value, setValue] = useState('')
    useEffect(() => {
        fetch('/api/locations/list')
            .then((response) => response.json())
            .then((json) => {
                // console.log(json, 'this is json') this returns an array of objects with all locations
                setJsonResults(json)
            })
    }, [])
    console.log(test, 'this is testtt')
    console.log(jsonResults, "this is jsonresults")
    //jsonResults should be an array of objects like {0: {id: 1, bio: 'hi'}}

    return (
        <>

            {/* <Autocomplete
                id="city-search"
                //set optionLabel to iterate throguh jsonResults based on city name
                getOptionLabel={(jsonResults) => `${jsonResults.city}`}
                options={jsonResults.length === 0 ? [] : jsonResults}
                // isOptionEqualToValue={(option, value) => option.username === value.username}
                noOptionsText={'NO CITY FOUND'}
                style={{ width: 250, margin:15, 'postion': 'relative', 'left': 10 }}
                // shouldItemRender={(option, value) => option.username.toLowercase().indexOf(value.toLowercase()) > -1}
                renderOption={(option) => (
                    <div onClick={() => { history.push(`/locations/${option.id}`) }}>
                        <React.Fragment >
                            <span
                                style={{ cursor: 'pointer' }}
                            // onClick={()=> {window.location.href = `/users/${option.id}`}}>
                            //     {`${option.username}`}
                            // </span>
                            >
                                {`${option.city}`}
                            </span>
                        </React.Fragment>
                    </div>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        id='text-field'
                        placeholder='Search...'
                    // inputProps={{style: {color: 'white'}}}
                    />)}
            /> */}
        </>
    )
}

export default SearchBar
