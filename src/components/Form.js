import React from 'react';

const Form = props => {
    return (
        <form /*onSubmit={props.submit}*/>
            <input type="text" value={props.value} onChange={props.zmiana} placeholder="Wpisz miasto" />
            {/*<button>wyszukaj miasto</button>*/}
        </form>
    );
}

export default Form;